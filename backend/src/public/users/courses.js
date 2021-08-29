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

function click_courses() {
  window.location.href = "course.html";
}
