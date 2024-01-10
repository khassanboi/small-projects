document.getElementById("navbar-menu-icon").addEventListener("click", () => {
  document.getElementById("navbar-container").classList.toggle("visible");
  console.log("clicked");
});

document.querySelectorAll(".navbar__list-item-link").forEach((el) => {
  el.addEventListener("click", function (e) {
    document.getElementById("navbar-container").classList.toggle("visible");
  });
});
