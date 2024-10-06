const BookModel = require("../models/BookModel");
const BookController = {
    findAll: async (req, res) => {
        BookModel.find()
            .then((data) => res.status(200).json(data))
            .catch((err) => res.status(500).json(err.message))
    },
    findOne: async (req, res) => {
        const targetId = req.params.id
        BookModel.findById(targetId)
            .then((data) => res.status(200).json(data))
            .catch((err) => res.status(500).json({ message: `Sách không tìm thấy! ${err}` }))
    },
    delete: async (req, res) => {
        BookModel.deleteOne({
            _id: req.params.id
        })
            .then(() => res.status(200).json({ message: "Xóa sách thành công!" }))
            .catch((err) => res.status(500).json({ message: `Sách không tìm thấy! ${err}` }))
    },
    createBook: async (req, res) => {
        try {
            const book = new BookModel(req.body);
            const savedBook = await book.save();
            res.status(200).json({ message: "Sách mới đã được tạo thành công!", data: savedBook });
        } catch (err) {
            console.error('Lỗi khi tạo sách mới:', err);
            res.status(500).json({ message: "Lỗi khi tạo sách mới!!!", error: err.message });
        }
    },
    updateBook: async (req, res) => {
        const targetId = req.params.id;
        const updatedData = req.body;

        try {
            const updatedBook = await BookModel.findByIdAndUpdate(targetId, updatedData, { new: true, runValidators: true });

            if (!updatedBook) {
                return res.status(404).json({ message: "Sách không tìm thấy!" });
            }

            res.status(200).json({ message: "Sách đã được cập nhật thành công!", data: updatedBook });
        } catch (err) {
            console.error('Lỗi khi cập nhật sách:', err);
            res.status(500).json({ message: "Lỗi khi cập nhật sách!!!", error: err.message });
        }
    },
}

module.exports = BookController;