const Email = require("./model");
//import user model
const User = require("../users/model");

//add a email in email data table
const addEmail = async (req, res) => {
  try {
    const email = await Email.create({
      emailName: req.body.emailName,

    });
    res.status(201).json({ message: "success", newEmail: email });
  } catch (error) {
    console.log(error);
    res.status(501).json({ errorMessage: error.message, error: error });
  }
};

//get user associated with email
const emailAndusername = async (req, res) => {
  //get a user associated with email id
  try {
    const email = await Email.findOne({
      where: {
        emailName: req.params["email"],
       
      },
      include: User,
    });
    res.status(200).json({ message: "Success", email: email });
  } catch {
    console.log(error);
    res.status(501).json({ errorMessage: error.message, error: error });
  }
};
const getAllemail = async (req, res) => {
  try {
    const email = await Email.findAll();
   
    res.status(200).json({ message: "success", email: email });
  } catch (error) {
    res.status(501).json({ errorMessage: error.message, error: error });
  }
};
//export module
module.exports = {
  addEmail,
  emailAndusername,getAllemail
};
