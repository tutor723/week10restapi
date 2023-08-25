//import bcrypt for password hashing
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../users/model");
const saltRounds = process.env.salRound;


//password hashing
const hashPass = async (req, res, next) => {
  try {
    req.body.password = await bcrypt.hash(
      req.body.password,
      parseInt(saltRounds)
    );
    next();
  } catch (error) {
    res.status(501).json({ errorMessage: error.message, error: error });
  }
};

//password comparing
const comparePass = async (req, res, next) => {
  try {
    req.user = await User.findOne({ where: { username: req.body.username } });
//check if user exist in database or not
    if (req.user === null) {
      throw new Error("Username or password does not match");
    }
    //compare password if user exist iin database
    const match = await bcrypt.compare(req.body.password, req.user.password);
    if (!match) {
      throw new Error("Username or password does not match");
    }
    console.log("********* Passwords match *********");




    //email validation
    if (req.email === null) {
      throw new Error("Email incorrect format");
    }
    //email REgex format
    ValidateEmail =
      /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (!ValidateEmail.test(req.body.email)) {
      throw new Error("Email incorrect format");
    }
    next();
  } catch (error) {
    res.status(501).json({ errorMessage: error.message, error: error });
  }
};




//tokenauth
const tokenCheck = async (req, res, next) => {
  try {
    const token = req.header("Authorization");
    console.log("token")
    console.log(token);
    const decodedToken = jwt.verify(token, process.env.SECRET);
    console.log("decoded")
    console.log(decodedToken);

    const user = await User.findOne({ where: { id: decodedToken.id } });
    console.log("user")
    console.log(user);

    if (!user) {
      throw new Error("User is not authorised");
    }
    req.authUser = user;
    next();
  } catch (error) {
    res.status(501).json({ errorMessage: error.message, error: error });
  }
};




//export module
module.exports = {
  hashPass,
  comparePass,
  tokenCheck,
};
