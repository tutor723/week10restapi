const jwt = require("jsonwebtoken");
require("dotenv").config();

const generateAndSignJWT = () => {
  const userId = 123;
  const admin = true;
  const token = jwt.sign({ id: userId, isAdmin: admin }, process.env.SECRET);
  console.log(token);
};
generateAndSignJWT();



let generatedToken ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTIzLCJpc0FkbWluIjp0cnVlLCJpYXQiOjE2OTI4MTA5MTF9.MlaLQgdGFHN_dmFOxLhcqjVMkyBr0FMmLcRAenC9pKE";
let otherToken = "random string";


//verify token 
const verifyToken = () => {
  try {
    const decodedToken = jwt.verify(generatedToken, process.env.SECRET);
    console.log(decodedToken);
    console.log("Vaild Token");
  } catch {
    console.log("Invaild Token");
  }
};

verifyToken();
