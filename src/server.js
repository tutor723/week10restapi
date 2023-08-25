require("dotenv").config();
const express = require("express");
const cors = require("cors");
const Email = require("./email/model");
const emailRouter = require("./email/routes");


const port = process.env.PORT || 5001;

const userRouter = require("./users/routes");
const User = require("./users/model");

const app = express();
app.use(cors());
app.use(express.json());


const syncTables = () => {
  User.sync({ alter: true, force: false });
  Email.sync({ alter: true, force: false });

  //association between eamil and user
  Email.hasMany(User);
  User.belongsTo(Email);
};

app.use(userRouter);
app.use(emailRouter);

app.get("/health", (req, res) => {
  res.status(200).json({ message: "api is working" });
});

app.listen(port, () => {
  syncTables();
  console.log(`App listening on port ${port}`);
});
