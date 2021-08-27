function slideshow() {
  const arr = ["workflows", "teams", "processes", "skills", "processes"];
  let div = document.getElementById("slidshow");
  div.innerHTML = arr[0];
  let i = 0;
  setInterval(function () {
    if (i == arr.length) {
      i = 0;
    }

    div.innerHTML = arr[i];
    i++;
  }, 2000);
}
slideshow();
var count = 0;

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

function nav_down_sign() {
  let div = document.getElementById("sigin_in").innerText;
  if (div == "expand_more") {
    document.getElementById("sigin_in").innerText = "expand_less";
  }
  document.getElementById("nav_down_1_sign").style.display = "block";
  document.getElementById("body").style.position = "fixed";
}

function cut2() {
  document.getElementById("nav_down_1_sign").style.display = "none";
  document.getElementById("body").style.position = "relative";
  document.getElementById("sigin_in").innerText = "expand_more";
}

function courses_page() {
  window.location.href = "courses.html";
}
function sign_page() {
  window.location.href = "signin.html";
}
