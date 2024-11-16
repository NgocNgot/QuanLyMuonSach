const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    hoLot: {
        type: String,
        required: true,
    },
    ten: {
        type: String,
        required: true,
    },
    ngaySinh:{
        type: Date,
        required: true,
    },
    phai: {
        type: String,
        enum: ["nam", "nữ", "khác"],
        required: true,
    },
    diaChi: {
        type: String,
        required: true,
    },
    dienThoai: {
        type: String,
        required: true,
    },

    email: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        min: 6
    },
    maDocGia: {
        type: String,

    },

});



const UserModel = mongoose.model("User", UserSchema, "docgia");
module.exports = UserModel;