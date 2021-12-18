const { Schema, model } = require("mongoose");

const productSchema = new Schema(
  {


    course: {
      type: Schema.Types.ObjectId,
      ref: "courses",
      required: true,
    },

  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = model("product", productSchema);

 // user: {
    //   type: Schema.Types.ObjectId,
    //   ref: "user",
    //   required: true,
    // },