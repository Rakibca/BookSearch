const mongoose = require("mongoose");

const bookSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    title: {
      type: String,
      required: [true, "Please add a text value"],
    },
    isbn: {
      type: String,
      required: [true, "Please add a text value"],
    },
    author: {
      type: String,
      required: [true, "Please add a text value"],
    },
    description: {
      type: String,
    },
    published_date: {
      type: Date,
    },
    publisher: {
      type: String,
    },
    updated_date: {
      type: Date,
      default: Date.now,
    },
  }
  // {timestamps: true}
);

module.exports = mongoose.model("Book", bookSchema);
