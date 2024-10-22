// Menu Mobile

// Je sélectionne et je stocke l'icône hamburger
const hamburger = document.querySelector("#toggleHamburger i");
// Je sélectionne et je stocke le logo
const logo = document.getElementById("logo");
// Je sélectionne et je stocke le titre du logo
const logoTitle = document.getElementById("logoTitle");
// // Je sélectionne et je stocke l'élément DIV menu global
const toggleMobileMenu = document.querySelector("#toggleMobileMenu");
// Je sélectionne et je stocke les liens du menu
const togglemobilemenulink = document.querySelectorAll(
  "#toggleMobileMenu .nav-link"
);

// Fermer le menu quand on clique sur l'hamburger
hamburger.addEventListener("click", function () {
  toggleMobileMenu.classList.toggle("hidden");
  logo.classList.toggle("hidden");
  hamburger.classList.toggle("fa-times");
});

// Fermer le menu quand on clique sur un lien du menu
togglemobilemenulink.forEach(function (link) {
  link.addEventListener("click", function () {
    toggleMobileMenu.classList.add("hidden");
  });
});

// Changer la couleur du menu au scroll
window.onscroll = function () {
  // Je sélectionne et je stocke la barre du menu
  const ud_header = document.querySelector(".ud-header");
  // Je stocke le menu en fixed
  const fixed = ud_header.offsetTop;

  // Si un scroll est enclenché alors le menu passe en position fixed et change de couleur
  if (window.scrollY > fixed) {
    ud_header.classList.remove("bg-darkblue");
    ud_header.classList.add("sticky");
    ud_header.classList.add("blueMenu");
    logo.src = "./images/logo_1.png";
    logoTitle.style.color = "#0b162c";
    hamburger.style.color = "#0b162c";
    // Sinon si le menu garde l'état d'origine
  } else {
    ud_header.classList.add("bg-darkblue");
    ud_header.classList.remove("sticky");
    ud_header.classList.remove("blueMenu");
    logo.src = "./images/logo.png";
    logoTitle.style.color = "#ffffff";
    hamburger.style.color = "#ffffff";
  }
  //console.log(logoTitle);
};
