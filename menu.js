// Menu Mobile

// Je sélectionne et je stocke l'icône hamburger
const hamburger = document.querySelector("#toggleHamburger i");
const logo = document.getElementById("logo");
const logoTitle = document.getElementById("logoTitle");
// la DIV toggleMobileMenu
const toggleMobileMenu = document.querySelector("#toggleMobileMenu");
const togglemobilemenulink = document.querySelectorAll(
  "#toggleMobileMenu .nav-link"
);

// Fermer le menu
hamburger.addEventListener("click", function () {
  toggleMobileMenu.classList.toggle("hidden");
  logo.classList.toggle("hidden");
  hamburger.classList.toggle("fa-times");
});

// Fermer le menu quand on clique sur un lien
togglemobilemenulink.forEach(function (link) {
  link.addEventListener("click", function () {
    toggleMobileMenu.classList.add("hidden");
  });
});

// Changer la couleur du menu au scroll
window.onscroll = function () {
  const ud_header = document.querySelector(".ud-header");
  const fixed = ud_header.offsetTop;

  if (window.scrollY > fixed) {
    ud_header.classList.remove("bg-darkblue");
    ud_header.classList.add("sticky");
    ud_header.classList.add("blueMenu");
    logo.src = "./images/logo_1.png";
    logoTitle.style.color = "#0b162c";
    hamburger.style.color = "#0b162c";
  } else {
    ud_header.classList.add("bg-darkblue");
    ud_header.classList.remove("sticky");
    ud_header.classList.remove("blueMenu");
    logo.src = "./images/logo.png";
    logoTitle.style.color = "#ffffff";
    hamburger.style.color = "#ffffff";
  }
  console.log(logoTitle);
};
