const mongoose = require("mongoose");
const FormSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  contact: {
    type: Number,
  },
  message: {
    type: String,
    require: true,
  },
});
const Form = mongoose.model("Form", FormSchema)
module.exports = Form;
