let accordion = document.querySelector(".accordion");

accordion.addEventListener("click", function (event) {
  if (event.target.classList.contains("header")) {
    let content = event.target.nextElementSibling;
    content.classList.toggle("section-visible");
    event.target.classList.toggle("header-active");
  }
});
