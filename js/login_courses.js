"use strict";

function productScroll() {
  let slider = document.getElementById("slider");
  let next = document.getElementsByClassName("pro-next");
  let prev = document.getElementsByClassName("pro-prev");
  let slide = document.getElementById("slide");
  let item = document.getElementById("slide");

  for (let i = 0; i < next.length; i++) {
    //refer elements by class name

    let position = 0; //slider postion

    prev[i].addEventListener("click", function () {
      //click previos button
      if (position > 0) {
        //avoid slide left beyond the first item
        position -= 1;
        translateX(position); //translate items
      }
    });

    next[i].addEventListener("click", function () {
      if (position >= 0 && position < hiddenItems()) {
        //avoid slide right beyond the last item
        position += 1;
        translateX(position); //translate items
      }
    });
  }

  function hiddenItems() {
    //get hidden items
    let items = getCount(item, false);
    let visibleItems = slider.offsetWidth / 210;
    return items - Math.ceil(visibleItems);
  }
}

function translateX(position) {
  //translate items
  slide.style.left = position * -210 + "px";
}

function getCount(parent, getChildrensChildren) {
  //count no of items
  let relevantChildren = 0;
  let children = parent.childNodes.length;
  for (let i = 0; i < children; i++) {
    if (parent.childNodes[i].nodeType != 3) {
      if (getChildrensChildren)
        relevantChildren += getCount(parent.childNodes[i], true);
      relevantChildren++;
    }
  }
  return relevantChildren;
}
productScroll();
var p = [1];
function cut_sarch() {
  document.getElementById("sarch_box").value = null;
  addCourses(JSON.parse(localStorage.getItem("courses")));
  document.getElementById("not_available").innerHTML = null;
  document.getElementById("not_available").style.display = "none";
  p.pop();
  p.push(1);
}

// console.log(sarch_box_1.length);
const courses = [
  {
    type: "Configuring, Compiling, and Debugging TypeScript Projects",
    name: "Web development",
    status: "Beginner",
    rat: 43,
    time: 34,
  },
  {
    type: "Creating Asynchronous TypeScript Code",
    name: "Web development",
    status: "Beginner",
    rat: 85,
    time: 304,
  },
  {
    type: "Managing Big Data with AWS Storage Options",
    name: "Software development",
    status: "Advanced",
    rat: 11,
    time: 200,
  },
  {
    type: "Working with Django Models",
    name: "Software development",
    status: "Intermediate",
    rat: 19,
    time: 400,
  },
  {
    type: "Managing Big Data with AWS Storage Options",
    name: "Information & cyber security",
    status: "Advanced",
    rat: 12,
    time: 700,
  },
  {
    type: "Autodesk Vault Professional Installation and Setup",
    name: "Manufacturing & design",
    status: "Advanced",
    rat: 12,
    time: 17,
  },
  {
    type: "Alerting on Issues with Prometheus Alertmanager",
    name: "It ops",
    status: "Intermediate",
    rat: 10,
    time: 40,
  },
  {
    type: "Designing SSIS Integration Solutions",
    name: "Data professional",
    status: "Beginner",
    rat: 24,
    time: 80,
  },
  {
    type: "Exploring Product Business Foundations",
    name: "Business professional",
    status: "Intermediate",
    rat: 15,
    time: 66,
  },
  {
    type: "Earning and Retaining Your PMP® Certification Product Business Foundations",
    name: "Business professional",
    status: "Beginner",
    rat: 22,
    time: 60,
  },
];

if (localStorage.getItem("courses") == null) {
  localStorage.setItem("courses", JSON.stringify(courses));
}
// localStorage.setItem("courses", JSON.stringify(courses));
let data_div = document.getElementById("coures_view");

function addCourses(d) {
  let data1 = d;

  data_div.innerHTML = null;

  data1.forEach(function (el) {
    var div = document.createElement("div");

    let name = document.createElement("p");
    name.innerHTML = el.name;
    let type = document.createElement("p");
    type.innerHTML = el.type;
    let wname = document.createElement("p");
    wname.innerHTML = "by pluralsight";
    let time = document.createElement("span");
    time.innerHTML = el.time + "m";
    let status = document.createElement("span");
    status.innerHTML = el.status;
    let rat = document.createElement("span");
    rat.innerHTML = el.rat;
    let img = document.createElement("img");
    img.src =
      "https://www.pluralsight.com/etc/clientlibs/pluralsight/main/images/course/level.png";
    let s_img = document.createElement("img");
    s_img.src =
      "https://www.nicepng.com/png/full/88-886368_five-yellow-stars-5-stars-black-background.png";
    let c_img = document.createElement("img");
    c_img.src =
      " https://www.pluralsight.com/etc/clientlibs/pluralsight/main/images/course/clock.png";
    name.setAttribute("id", "div_courses_name");
    type.setAttribute("id", "div_courses_name_1");
    div.setAttribute("id", "div_courses_div");
    wname.setAttribute("id", "div_courses_wname");
    time.setAttribute("id", "div_courses_time");
    status.setAttribute("id", "div_courses_status");
    rat.setAttribute("id", "div_courses_rat");
    img.setAttribute("id", "div_courses_img");
    c_img.setAttribute("id", "div_courses_c_img");
    s_img.setAttribute("id", "div_courses_s_img");
    div.append(type, name, wname, time, c_img, status, img, s_img, rat);
    data_div.append(div);
  });
}

addCourses(JSON.parse(localStorage.getItem("courses")));
function sortupper() {
  let data2 = JSON.parse(localStorage.getItem("courses"));
  data2 = data2.sort(function (a, b) {
    return b.rat - a.rat;
  });
  addCourses(data2);
  p.pop();
  p.push(10);
  document.getElementById("sarch_box").value = null;
  document.getElementById("not_available").innerHTML = null;
  document.getElementById("not_available").style.display = "none";
}

function sortupper_wirth() {
  let data2 = JSON.parse(localStorage.getItem("courses"));
  data2 = data2.sort(function (a, b) {
    return b.time - a.time;
  });
  addCourses(data2);
}

setInterval(function () {
  if (p != 10) {
    let sarch_box_1 = document.getElementById("sarch_box").value;
    var t = JSON.parse(localStorage.getItem("courses"));
    if (sarch_box_1.length >= 1) {
      data_div.innerHTML = null;
      for (var i = 0; i < t.length; i++) {
        if (
          t[i].name[sarch_box_1.length - 1].toLowerCase() ==
          sarch_box_1[sarch_box_1.length - 1].toLowerCase()
        ) {
          var div = document.createElement("div");

          let name = document.createElement("p");
          name.innerHTML = t[i].name;
          let wname = document.createElement("p");
          wname.innerHTML = "by pluralsight";
          let time = document.createElement("span");
          time.innerHTML = "39m";
          let status = document.createElement("span");
          status.innerHTML = t[i].status;
          let rat = document.createElement("span");
          rat.innerHTML = t[i].rat;
          let img = document.createElement("img");
          img.src =
            "https://www.pluralsight.com/etc/clientlibs/pluralsight/main/images/course/level.png";
          let s_img = document.createElement("img");
          s_img.src =
            "https://www.nicepng.com/png/full/88-886368_five-yellow-stars-5-stars-black-background.png";
          let c_img = document.createElement("img");
          c_img.src =
            " https://www.pluralsight.com/etc/clientlibs/pluralsight/main/images/course/clock.png";
          name.setAttribute("id", "div_courses_name");
          div.setAttribute("id", "div_courses_div");
          wname.setAttribute("id", "div_courses_wname");
          time.setAttribute("id", "div_courses_time");
          status.setAttribute("id", "div_courses_status");
          rat.setAttribute("id", "div_courses_rat");
          img.setAttribute("id", "div_courses_img");
          c_img.setAttribute("id", "div_courses_c_img");
          s_img.setAttribute("id", "div_courses_s_img");
          div.append(name, wname, time, c_img, status, img, s_img, rat);
          data_div.append(div);
          // } else if (
          //   t[i].name[sarch_box_1.length - 1].toLowerCase() !=
          //   sarch_box_1[sarch_box_1.length - 1].toLowerCase()
          // ) {
          // document.getElementById("not_available").style.display = "flex";
          // document.getElementById("not_available").innerHTML = "No results...";
        }
      }
    }
    //else {
    //   document.getElementById("not_available").innerHTML = null;
    //   document.getElementById("not_available").style.display = "none";
    //   addCourses(JSON.parse(localStorage.getItem("courses")));
    // }
  }
}, 1000);
function sort_mid(mid) {
  var t = JSON.parse(localStorage.getItem("courses"));
  data_div.innerHTML = null;
  for (var i = 0; i < t.length; i++) {
    if (t[i].status == mid) {
      var div = document.createElement("div");

      let name = document.createElement("p");
      name.innerHTML = t[i].name;
      let type = document.createElement("p");
      type.innerHTML = t[i].type;
      let wname = document.createElement("p");
      wname.innerHTML = "by pluralsight";
      let time = document.createElement("span");
      time.innerHTML = t[i].time + "m";
      let status = document.createElement("span");
      status.innerHTML = t[i].status;
      let rat = document.createElement("span");
      rat.innerHTML = t[i].rat;
      let img = document.createElement("img");
      img.src =
        "https://www.pluralsight.com/etc/clientlibs/pluralsight/main/images/course/level.png";
      let s_img = document.createElement("img");
      s_img.src =
        "https://www.nicepng.com/png/full/88-886368_five-yellow-stars-5-stars-black-background.png";
      let c_img = document.createElement("img");
      c_img.src =
        " https://www.pluralsight.com/etc/clientlibs/pluralsight/main/images/course/clock.png";
      name.setAttribute("id", "div_courses_name");
      type.setAttribute("id", "div_courses_name_1");
      div.setAttribute("id", "div_courses_div");
      wname.setAttribute("id", "div_courses_wname");
      time.setAttribute("id", "div_courses_time");
      status.setAttribute("id", "div_courses_status");
      rat.setAttribute("id", "div_courses_rat");
      img.setAttribute("id", "div_courses_img");
      c_img.setAttribute("id", "div_courses_c_img");
      s_img.setAttribute("id", "div_courses_s_img");
      div.append(type, name, wname, time, c_img, status, img, s_img, rat);
      data_div.append(div);
    }
  }
}

function sort_mid_name(mid) {
  var t = JSON.parse(localStorage.getItem("courses"));
  data_div.innerHTML = null;
  for (var i = 0; i < t.length; i++) {
    if (t[i].name == mid) {
      var div = document.createElement("div");

      let name = document.createElement("p");
      name.innerHTML = t[i].name;
      let type = document.createElement("p");
      type.innerHTML = t[i].type;
      let wname = document.createElement("p");
      wname.innerHTML = "by pluralsight";
      let time = document.createElement("span");
      time.innerHTML = t[i].time + "m";
      let status = document.createElement("span");
      status.innerHTML = t[i].status;
      let rat = document.createElement("span");
      rat.innerHTML = t[i].rat;
      let img = document.createElement("img");
      img.src =
        "https://www.pluralsight.com/etc/clientlibs/pluralsight/main/images/course/level.png";
      let s_img = document.createElement("img");
      s_img.src =
        "https://www.nicepng.com/png/full/88-886368_five-yellow-stars-5-stars-black-background.png";
      let c_img = document.createElement("img");
      c_img.src =
        " https://www.pluralsight.com/etc/clientlibs/pluralsight/main/images/course/clock.png";
      name.setAttribute("id", "div_courses_name");
      type.setAttribute("id", "div_courses_name_1");
      div.setAttribute("id", "div_courses_div");
      wname.setAttribute("id", "div_courses_wname");
      time.setAttribute("id", "div_courses_time");
      status.setAttribute("id", "div_courses_status");
      rat.setAttribute("id", "div_courses_rat");
      img.setAttribute("id", "div_courses_img");
      c_img.setAttribute("id", "div_courses_c_img");
      s_img.setAttribute("id", "div_courses_s_img");
      div.append(type, name, wname, time, c_img, status, img, s_img, rat);
      data_div.append(div);
    }
  }
}

// function sortupper() {
//   let data2 = JSON.parse(localStorage.getItem("courses"));
//   for (var i = 0; i < data2.length; i++) {
//     console.log(data2[i].status);
//   }
//   //console.log(data2);
//   addCourses(data2);
// }
function sort_drop_down() {
  document.getElementById("sort_drop_down_id").style.display = "block";
  document.getElementById("sort_drop_down_id").style.float = "right";
}
function sort_drop_down_cut() {
  document.getElementById("sort_drop_down_id").style.display = "none";
}
function up_product() {
  let div = document.getElementById("product").innerText;
  if (div == "expand_more") {
    document.getElementById("product").innerText = "expand_less";
  }
  document.getElementById("nav_down_1").style.display = "block";
  document.getElementById("body").style.position = "fixed";
}
function cut1(id) {
  document.getElementById("nav_down_1").style.display = "none";
  document.getElementById("body").style.position = "relative";
  document.getElementById(id).innerText = "expand_more";
}

function up(arr) {
  let div = document.getElementById(arr).innerText;
  if (div == "expand_more") {
    document.getElementById(arr).innerText = "expand_less";
  }
  document.getElementById("nav_down").style.display = "block";
  document.getElementById("body").style.position = "fixed";
}
function cut(id) {
  document.getElementById("nav_down").style.display = "none";
  document.getElementById("body").style.position = "relative";
  document.getElementById(id).innerText = "expand_more";
}

// function click_courses() {
//   window.location.href = "course.html";
// }
let data = JSON.parse(localStorage.getItem("Data1"));

document.getElementById("user_name").innerHTML = data[0];

function play_video() {
  window.location.href = "video.html";
}
