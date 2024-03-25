//Responsive Navbar start
const menuBtn = document.querySelector("#menuBtn");
const headerNavbar = document.querySelector(".hero-navbar");
menuBtn.addEventListener("click", () => {
  headerNavbar.classList.toggle("show-navbar");
});

document.addEventListener("click", (event) => {
  if (
    !event.target.closest(".hero-navbar") &&
    !event.target.closest("#menuBtn")
  ) {
    headerNavbar.classList.remove("show-navbar");
  }
});

//Responsive Navbar end
