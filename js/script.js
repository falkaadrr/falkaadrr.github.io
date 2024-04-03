//Toggle Class Active
const navbarNav = document.querySelector(".navbar-nav");
//ketika hamburger menu di klik
document.querySelector("#Hamburger-Menu").onclick = () => {
  navbarNav.classList.toggle("active");
};
//klik di luar sidebar
const hamburger = document.querySelector("#Hamburger-Menu");

document.addEventListener("click", function (e) {
  console.log(hamburger.contains(e.target));
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
