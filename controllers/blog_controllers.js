const { request } = require("express");
const blogModel = require("../schemas/blog_schema");

//post request
//craete a new blog
const createBlog = async (req, res) => {
  const { title, description, content } = req.body;
  try {
    //creating a new document ( a new blog post)
    const newBlog = new blogModel({ title, description, content });
    await newBlog.save();
    res.send({ message: "Successful", data: newBlog });
  } catch (error) {
    console.log(error);
    res.send({ message: "Unsuccessful" });
  }
};

//get request
//get all blogs created
const getAllBlogs = async (req, res) => {
  try {
    const allPosts = await blogModel.find();

    res.send({ message: "Successfull", data: allPosts });
  } catch (error) {
    console.log(error);
    res.send({ message: "unsuccesfull", data: allPosts });
  }
};
//put request
//get blog bu id and update it
const updateBlog = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedBlog = await blogModel.findByIdAndUpdate(id, req.body);

    res.send({ message: "Successfull", data: updatedBlog });
  } catch (error) {
    console.log(error);
    res.send({ message: "unsuccesfull", data: allPosts });
  }
};

//delete request
//delete blog by id
const deleteBlog = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedPost = await blogModel.findByIdAndDelete(id);

    res.send({ message: "Successfull", data: deletedPost });
  } catch (error) {
    console.log(error);
    res.send({ message: "unsuccesfull", data: allPosts });
  }
};

module.exports = { createBlog, getAllBlogs, updateBlog, deleteBlog };
