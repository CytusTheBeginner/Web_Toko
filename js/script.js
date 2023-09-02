const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("bg-custom");
    navbar.classList.remove("bg-transparent");
  } else {
    navbar.classList.add("bg-transparent");
    navbar.classList.remove("bg-custom");
  }
});

