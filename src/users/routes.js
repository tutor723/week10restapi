const { Router } = require("express");
const userRouter = Router();
//middelware
const { hashPass, comparePass, tokenCheck} = require("../middleware");
//controller
const { registerUser, login, getAllUsers,deleteUser,updateUser } = require("./controllers");


//add user
userRouter.post("/users/register", hashPass, registerUser);
//login user
userRouter.post("/users/login", comparePass, login)
userRouter.get("/users/authCheck", tokenCheck, login) // persistant login
// get user
userRouter.get("/users/getUsers", tokenCheck, getAllUsers)

//delete user
userRouter.delete("/users/deleteUser", deleteUser)
//update user
userRouter.put("/users/updateUser", updateUser)


module.exports = userRouter;