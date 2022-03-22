const express = require("express");
const connect = require("./src/configs/db");
const userController = require("./src/controllers/user.controller");
const postController = require("./src/controllers/post.controller");

const { register, login } = require("./src/controllers/auth.controller");
const app = express();

app.use(express.json());

app.post("/users", userController);

// Post method with Register Route...
app.post("/register", register);

// Post method with login Route...
app.post("/login", login);

app.use("/post", postController);

app.listen(2222, async () => {
  try {
    await connect();
    console.log("on port 2222");
  } catch (err) {
    console.log(err.message);
  }
});
