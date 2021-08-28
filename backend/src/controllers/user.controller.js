const express = require("express");
const router = express.Router();
const User = require("../models/user.model");
const Course = require("../models/course.model");


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
router.get("/sigin", async function (req, res) {
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

/////////////////////////////////////////////////////
router.get("/payment_successful", async function (req, res) {
  const pageTitle = "Welcome to Users page";
  return res.render("users/payment_successful", {
     pageTitle,
  });
});
////////////////////////////////////////////
router.get("/forgotPassword", async function (req, res) {
  const pageTitle = "Welcome to Users page";
  return res.render("users/forgotPassword", {
     pageTitle,
  });
});

///////////////////////////////////////////////

router.get("/signInWithCompany", async function (req, res) {
  const pageTitle = "Welcome to Users page";
  return res.render("users/signInWithCompany", {
     pageTitle,
  });
});

//////////////////////////////////////////////

// router.get("/courses", async function (req, res) {
//   const pageTitle = "Welcome to Users page";
//   //const videos = await videoHead.find().lean().exec();
//   return res.render("users/courses", {
//      pageTitle,
//     // videos:videos 
//   });
// });

//////////////////////////////


router.get("/course", async function (req, res) {
  const pageTitle = "Welcome to Users page";
  return res.render("users/course", {
     pageTitle,
  });
});

////////////////////////////////////////

router.get("/free_trial", async function (req, res) {
  const pageTitle = "Welcome to Users page";
  return res.render("users/free_trial", {
     pageTitle,
  });
});

/////////////////////////////////////////

router.get("/courses", async function (req, res) {
    const videos = await Course.find().lean().exec();
    const pageTitle = "Welcome to Users page";
    return res.render("users/courses", {
       pageTitle,
       videos,
    });
  });
  

module.exports = router;
