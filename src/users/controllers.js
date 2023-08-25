const User = require("./model");
const jwt = require("jsonwebtoken");
const Email = require("../email/model");



const registerUser = async (req, res) => {
  try {
    const email = await Email.findOne({
      where: {
        emailName: req.body.email,
      },
    });
    console.log("Add new user");

    //create user with username,email for getting email id
    const newUser = await User.create(
      //{
     // username:req.body.username,
    // email:req.body.email,
     //password:req.body.password,
     // EmailId:email.id,
   //}
   req.body
  );
      res.status(201).json({
      message: "Successfully registered",
      user: newUser,
    });
  } catch (error) {
    res.status(501).json({ errorMessage: error.message, error: error });
  }
};

//get all user
const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    for (let user of users) {
      user.password = "";
    }
    res.status(200).json({ message: "success", users: users });
  } catch (error) {
    res.status(501).json({ errorMessage: error.message, error: error });
  }
};

//User login
const login = async (req, res) => {
  try {
    // handles persistant login
    if (req.authUser) {
      res.status(200).json({
        message: "success",
        user: {
          username: req.authUser.username,
          email: req.authUser.email,
        },
      });
      return;
    }

    // handles manual login
    const token = await jwt.sign({ id: req.user.id }, process.env.SECRET);
    res.status(200).json({
      message: "success",
      user: {
        username: req.body.username,
        email: req.body.email,
        token: token,
      },
    });
  } catch (error) {
    res.status(501).json({ errorMessage: error.message, error: error });
  }
};

//delete user by username
const deleteUser = async (req, res) => {
  try {
    const result = await User.destroy({
      where: {
        username: req.body.username,
      },
    });
    res.status(202).json({ message: "success", result });
  } catch (error) {
    res.status(501).json({ errorMessage: error.message, error: error });
  }
};

//update user by username
const updateUser = async (req, res) => {
  try {
    const updateUser = await User.update(
      {
        email: req.body.newEmail,

        password: req.body.password,
      },
      {
        where: {
          username: req.body.username,
        },
      }
    );
    res.status(200).json({ message: "Success", updateUser: updateUser });
  } catch (error) {
    res.status(501).json({ message: error.message, error: error });
    console.log(error);
  }
};

//export module
module.exports = {
  registerUser,
  getAllUsers,
  login,
  deleteUser,
  updateUser,
};
