burger = document.querySelector(".burger");
navbar = document.querySelectorAll(".navbar");
rightNav = document.querySelector(".rightNav");
navList = document.querySelector(".nav-list");
bmain = document.querySelector(".box-main");
cross = document.getElementById("cross");
line = document.querySelectorAll('.line');

burger.addEventListener("click", () => {
  burger.style.display = "none";
  cross.style.display = "block";
  rightNav.classList.toggle("v-nav");
  navList.classList.toggle("v-nav");
  bmain.classList.toggle("m-resp");
});

cross.addEventListener("click", () => {
  burger.style.display = "block";
  cross.style.display = "none";
  navList.classList.toggle("v-nav");
  rightNav.classList.toggle("v-nav");
  bmain.classList.toggle("m-resp");
  line.style.padding = '3px 3px';
});
