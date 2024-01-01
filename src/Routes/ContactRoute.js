const express = require("express");
const { CREATE_CONTACT_CONTROLLER } = require("../Controller/ContactController");
const ContactRoute = express.Router();

ContactRoute.post("/",CREATE_CONTACT_CONTROLLER)

module.exports={ContactRoute}