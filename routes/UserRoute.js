const express = require("express");
const router = express.Router();

const User = require("../models/UserSchema");

router.post("/register", async (req, res) => {
  const { fname, lname, email } = req.body;
  if (!fname || !lname || !email) {
    return res.status(400).json({ Status: "All fields are required----" });
  }
  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(404).json({ Status: "Email already exists" });
    }
    const user = await User.create({
      fname,
      lname,
      email,
    });
    return res.status(202).json({ Status: "User is created" });
  } catch (error) {
    return res.status(500).json({ Status: "User create is failed" });
  }
});
//get all the users
router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    return res.status(202).json({ users });
  } catch (error) {
    return res.status(500).json({ Status: "Error fetching the users" });
  }
});

//delete the user by mail
router.delete("/delete/:email", async (req, res) => {
  const { email } = req.params;

  try {
    const user = await User.findOneAndDelete({ email });
    if (!user) {
      return res.status(404).json({ Status: "User not found" });
    }
    return res.status(200).json({ Status: "User deleted successfully" });
  } catch (error) {
    return res
      .status(500)
      .json({ Status: "Error deleting user", error: error.message });
  }
});


module.exports = router;
