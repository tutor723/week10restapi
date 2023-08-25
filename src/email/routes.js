const { Router } = require("express");

const emailRouter = Router();

const { addEmail,emailAndusername,getAllemail } = require("./controllers");
//add email route
emailRouter.post("/email/addEmail", addEmail);
emailRouter.get("/email/getEmail", getAllemail);
//get user with respect to email id route
emailRouter.get("/email/getEmailAndUser/:email", emailAndusername);

module.exports = emailRouter;