const mongoose = require("mongoose");

const ContactSchema = new mongoose.Schema(
  {
    name: { type: String, required: true  },
    email: { type: String, required: true },
    message: { type: String ,required:true},
  
    Active: { type: Boolean, default: true },
  },
  { timestamps: true }
);

const Contact = mongoose.model("Contact", ContactSchema);

module.exports = { Contact };
