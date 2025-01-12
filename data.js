const xbtn = document.querySelector(".xbtn");
const ham = document.querySelector(".ham");

const mobileMenu = document.querySelector(".mobileMenu");

ham.addEventListener("click", function () {
  mobileMenu.classList.add("open");
});

xbtn.addEventListener("click", function () {
  mobileMenu.classList.remove("open");
});

console.log("hey");
