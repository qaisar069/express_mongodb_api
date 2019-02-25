const express = require("express");
const mongoose = require("mongoose");
const keys = require("./config/keys");

const users = require("./routes/users");
const profile = require("./routes/profile");
const posts = require("./routes/posts");

const app = express();
const db = keys.mongoURI;

mongoose
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("mongodb connected"))
  .catch(err => console.log(err));

app.get("/", (req, res) => {
  res.json({
    msg: "Hello world"
  });
});

app.use("/api/users", users);
app.use("/api/profile", profile);
app.use("/api/posts", posts);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
