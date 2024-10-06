const mongoose = require("mongoose");

const BookSchema = new mongoose.Schema({
    maSach: {
        type: String,
    },
    tenSach: {
        type: String,
    },
    donGia: {
        type: String,
    },
    soQuyen: {
        type: String,
    },
    namXuatBan: {
        type: String,
    },
    maNXB: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "nhaxuatban",
    },
    tacGia: {
        type: String,
    },
    chiTiet: {
        hinhAnh: [String],
        moTa: {
            type: String,
        }
    },

});

const BookModel = mongoose.model("Book", BookSchema, "sach");
module.exports = BookModel;