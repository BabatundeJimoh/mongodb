const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const blogSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  data: {
    type: Date,
    default: Date.now(),
  },
});

const blogModel = mongoose.model("blog-posts", blogSchema);

module.exports = blogModel;
