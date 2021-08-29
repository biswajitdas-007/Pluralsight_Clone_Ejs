const express = require("express");
const router = express.Router();
const User = require("../models/user.model");
const Course = require("../models/course.model");
const courseDomain = require("../models/coursedomain.model");
const videoHead = require("../models/videoHead.model");

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
      users
    });
  } 
});


//////////////////////////////////////////
router.get("", async function (req, res) {
  const users = await User.find().lean().exec();
  const pageTitle = "Welcome to Users page";
  return res.render("users/allUsers", {
    pageTitle,
    users,
    
  });
});
router.get("/ppp", async function (req, res) {
  const users = await User.find().lean().exec();
 // const pageTitle = "Welcome to Users page";
//  return res.render("users/allUsers", {
  //  pageTitle,
   // users,
   return res.send(users);
    
 // });
});

//////////////////////////////////////////
router.get("/sigin", async function (req, res) {
  const users = await User.find().lean().exec();
console.log(users[users.length-1]);
  const pageTitle = "Welcome to Users page";
  return res.render("users/addUser", {
     pageTitle,
     users,

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
  
/////////////////////////////////////////////////////


router.get("/pricing_skills", async function (req, res) {
  const videos = await Course.find().lean().exec();
  const pageTitle = "Welcome to Users page";
  return res.render("users/pricing_skills", {
     pageTitle,
     videos,
  });
});
///////////////////////////////////////////////////
router.get("/lastPage", async function (req, res) {
  try {
      const streams = await courseDomain.find().lean().exec();
      return res.render("users/lastPage", {
          streams:streams                       // path then the data to be fetched
      });
  } catch (error) {
      return res.status(400).send(error.message);
  }
});

//////////////////////////////////////////////////////
router.get("/filter", async function (req, res) {
  try {
      const videos = await videoHead.find().lean().exec();
      return res.render("users/filter1", {
          videos:videos                       // path then the data to be fetched
      });
  } catch (error) {
      return res.status(400).send(error.message);
  }
});

///////////////////////////////////////////////////////


router.get("/landingPage", async function (req, res) {
  try {
      const videos = await videoHead.find().lean().exec();
      return res.render("users/landingPage", {
          videos:videos                       // path then the data to be fetched
      });
  } catch (error) {
      return res.status(400).send(error.message);
  }
});

//////////////////////////////////////////////////////////

module.exports = router;
