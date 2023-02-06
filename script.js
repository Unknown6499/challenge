`use strict`;
//selecting elements
const nav = document.querySelector("#navigation");
const mainContent = document.querySelectorAll(".main-content");
//adding event handler
nav.addEventListener("click", function (e) {
  const click = e.target;
  console.log(click);
  //removing active class
  mainContent.forEach((t) => t.classList.remove("main-content-active"));

  //adding active class
  document
    .querySelector(`.main-content-${click.dataset.tab}`)
    .classList.add("main-content-active");
});

//creating array with image links
const image = [
  "images/2 (2).jpg",
  "images/2.jpg",
  "images/2.jpg",
  "images/3 (2).jpg",
  "images/3.jpg",
  "images/4 (2).jpg",
  "images/4.jpg",
  "images/Gora Bhairav.jpg",
  "images/Bheruji.jpg",
  "images/Bheru ji.jpg",
  "images/10.jpg",
  "images/9.jpg",
  "images/8.jpg",
  "images/7.jpg",
  "images/6.jpg",
  "images/5.jpg",
  "images/5 (2).jpg",
];
//creating index counter
let imageNum = 0;
//selecting buttons
const prev = document.getElementById("prev");
const next = document.getElementById("next");

//adding event handlers
//for previous button
prev.addEventListener("click", function (e) {
  e.preventDefault();
  imageNum--;
  if (imageNum <= 0) {
    imageNum = image.length - 1;
  }
  document.getElementById("img").src = image[imageNum];
});

//for next button
next.addEventListener("click", function (e) {
  e.preventDefault();
  imageNum++;

  if (imageNum >= image.length) {
    imageNum = 0;
  }
  document.getElementById("img").src = image[imageNum];
});
