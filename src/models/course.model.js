const { Schema, model } = require("mongoose");

const courseSchema = new Schema({
    image: { type: String, required: true },
    name: { required: true, type: String },
    price: { required: true, type: Number },
    price1: { required: true, type: Number },
    EMI: { required: true, type: String },
    Des: { required: true, type: String }

}, {
    versionKey: false,
    timestamps: true,
});

module.exports = new model("courses", courseSchema)  