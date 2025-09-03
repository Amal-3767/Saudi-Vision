const menuToggle = document.getElementById("menu-toggle");
const navlist = document.getElementById("navlist");

// Whenclick the hamburger
menuToggle.addEventListener("click", () => {
  navlist.classList.toggle("active");
});

// When you click on any link, the menu disappears.
navlist.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    navlist.classList.remove("active");
  }
});

// for scrol move hin scren
      AOS.init();

  