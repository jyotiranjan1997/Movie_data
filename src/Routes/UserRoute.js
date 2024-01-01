const express = require("express");
const {
  User_Login,
  User_Signup,
  Update_User,
  User_Lists,
} = require("../Controller/UserController");
const { verifyadmin } = require("../Middleware/verifyadmin");
const UserRoute = express.Router();

UserRoute.post("/login", User_Login); // TO LOGIN USER
UserRoute.put("/", verifyadmin, Update_User); // TO Update
UserRoute.post("/register", User_Signup); // To Register user with admin validation
UserRoute.get("/", verifyadmin, User_Lists); // TO get the list
UserRoute.get("/:id", verifyadmin, User_Lists); // To get single record for update

module.exports = { UserRoute };
