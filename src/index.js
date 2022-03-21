const express = require("express");
const app = express();

const userController = require("./controllers/users.controller");
const {register,login} = require("./controllers/auth.controller");

app.use(express.json());
app.use("/users",userController);
app.post("/register",register);
app.post("/login",login);

module.exports = app;