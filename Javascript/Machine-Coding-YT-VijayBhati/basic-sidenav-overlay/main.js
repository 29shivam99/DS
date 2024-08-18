let clickMe = document.querySelector(".click-me");
let sideNav = document.querySelector("#side-nav");

clickMe.addEventListener("click", function (event) {
  console.log("clicked");
  sideNav.classList.remove("hide");
  sideNav.classList.add("show");
});

function closeSidenav(event) {
  console.log("askja");
  sideNav.classList.remove("show");
  sideNav.classList.add("hide");

  // Remove 'hide' class after animation ends to ensure display: none;
  // sideNav.addEventListener(
  //   "animationend",
  //   () => {
  //     if (sideNav.classList.contains("hide")) {
  //       sideNav.classList.remove("hide");
  //       sideNav.style.display = "none";
  //     }
  //   },
  //   { once: true }
  // );
}
