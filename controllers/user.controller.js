const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.registerUser = async (req, res) => {
  try {
    const { name, email, password, address } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      return res
        .status(401)
        .json({
          message: "User Exists with this email, try with aother email",
        });
    }
    if (!name || !email || !password || !address) {
      return res.status(404).json({
        message: "All fields are required",
      });
    }

    const passwordRegex =
      /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;

    if (!passwordRegex.test(password)) {
      return res.status(400).json({
        message:
          "Password must be at least 8 characters long and contain at least one capital letter, one symbol, and one number.",
      });
    }
    bcrypt.hash(password, 10, async function (err, hash) {
      if (err) {
        console.log(err);
        res
          .status(404)
          .json({ message: "Somethin went wrong at hashing the password" });
      } else {
        const user = new User({ name, email, address, password: hash });
        await user.save();
        res.status(201).json({ message: "Registration is successfull", user });
      }
    });
  } catch (error) {
    console.log(error.message);
    res
      .status(500)
      .json({ message: "Something went wrong at registering the user" });
  }
};

exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({
        message: "User Does't Exists",
      });
    }
    const hashPassword = user.password;
    bcrypt.compare(password, hashPassword, async function (err, result) {
      if (result) {
        const accessToken = jwt.sign({ userId: user._id }, process.env.secrete);
        res
          .status(201)
          .json({ message: "Logged In Successfully", accessToken });
      } else {
        console.log(err);
        res.status(404).json({
          message: "Somethin went wrong at comparing the password",
        });
      }
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Something went wrong at login the user" });
  }
};
