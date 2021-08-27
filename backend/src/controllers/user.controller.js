const express = require("express");
const router = express.Router();
const User = require("../models/user.model");

// router.get("/create", function (req, res) {
//   res.render("users/addUser", {
//     first_name: req.query.first_name,
//     last_name: req.query.last_name,
//     email: req.query.email,

//   });
// });


router.post("", async function (req, res) {
  var count=0;
  const users = await User.find().lean().exec();
  for(var i=0; i<users.length; i++){
    console.log(users[i].email,req.body.email)
    if(users[i].email==req.body.email){
      count++
    }
  }
  if(count==0){
    const user = await User.create(req.body);
    
  }else{
    const pageTitle = "Email is already in databse";
    return res.render("users/addUser", {
      pageTitle,
    });
  } 
});

//////////////////////////////////////////
router.get("", async function (req, res) {
  const users = await User.find().lean().exec();
  const pageTitle = "Welcome to Users page";
  return res.render("users/allUsers", {
    users: users,
    pageTitle,
  });
});

//////////////////////////////////////////
router.get("/create", async function (req, res) {
  const users = await User.find().lean().exec();
console.log(users[users.length-1]);
  const pageTitle = "Welcome to Users page";
  return res.render("users/addUser", {
     pageTitle,
  });
});

///////////////////////////////////////////////
router.get("/home", async function (req, res) {
  const pageTitle = "Welcome to Users page";
  return res.render("users/home", {
     pageTitle,
  });
});

router.get("/payment_successful", async function (req, res) {
  const pageTitle = "Welcome to Users page";
  return res.render("users/payment_successful", {
     pageTitle,
  });
});

module.exports = router;
