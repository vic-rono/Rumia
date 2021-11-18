const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const User = require("../models/userModel");

exports.newUser = async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    const newUser = new User({
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
    });

    const user = await newUser.save();
    res.status(200).json(user._id);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.loginUser = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    !user && res.status(400).json("Wrong email or password");

    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    !validPassword && res.status(400).json("Wrong email or password");

    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.updateUser = async (req, res) => {
  const { userid, updateduser } = req.body;

  try {
    User.findByIdAndUpdate(
      userid,
      {
        name: updateduser.name,
        email: updateduser.email,
        password: updateduser.password,
      },
      (err) => {
        if (err) {
          return res.status(400).json("Something Went Wrong");
        } else {
          return res.status(200).json("User details updated successfully");
        }
      }
    );
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json(users);
  } catch (err) {
    return res.status(400).json(err);
  }
};

exports.deleteUser = async (req, res) => {
  const { userid } = req.body;
  try {
    const user = await User.findByIdAndRemove(userid);
    res.status(200).json(user);
  } catch (err) {
    return res.status(400).json(err);
  }
};
