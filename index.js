const express = require("express");
const mongoose = require("mongoose");
const blogRouter = require("./routes/blog_routes");

const app = express();

//middlewares
app.use(express.json());

//mongoDb uri
const URI =
  "mongodb+srv://babatunde135333:c0y4TD4CP04dXTxS@cluster0.9fjnxzy.mongodb.net/";

//connect mongodb
mongoose
  .connect(URI)
  .then(() => {
    console.log("mongoDb connected successfully");
  })
  .catch((err) => {
    console.log(err);
  });

//routes
app.use("/blog", blogRouter);

const PORT = 400;
app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
app.listen();

// server password c0y4TD4CP04dXTxS
