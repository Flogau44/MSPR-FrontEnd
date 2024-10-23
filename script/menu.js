// Menu Mobile

// Je sélectionne et je stocke l'icône hamburger non active (fa-bars)
const hamburgerNonactive = document.querySelector(
  ".navbar-mobile #hamburgerNonactive"
);
// Je sélectionne et je stocke l'icône hamburger active (fa-times)
const hamburgerActive = document.querySelector(
  ".navbar-mobile #hamburgerActive"
);
// Je sélectionne et je stocke l'élément DIV menu global
const modal = document.querySelector(".modal");
// Je sélectionne et je stocke les liens du menu
const modalLink = document.querySelectorAll(".navbar-mobile-list");
// Je sélectionne et je stocke le logo
const logo = document.getElementById("logo");
// Je sélectionne et je stocke le titre du logo
const logoTitle = document.getElementById("logoTitle");

// Ouvrir le menu quand on clique sur l'hamburger non active (fa-bars)
hamburgerNonactive.addEventListener("click", () => {
  modal.classList.remove("hidden");
  hamburgerNonactive.style.display = "none";
  hamburgerActive.style.display = "flex";
});

// Fermer le menu quand on clique sur l'hamburger active (fa-times)
hamburgerActive.addEventListener("click", () => {
  modal.classList.add("hidden");
  hamburgerNonactive.style.display = "flex";
  hamburgerActive.style.display = "none";
});

// Changer la couleur du menu au scroll
window.onscroll = () => {
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
    hamburgerNonactive.style.color = "#0b162c";
    // Sinon le menu garde l'état d'origine
  } else {
    ud_header.classList.add("bg-darkblue");
    ud_header.classList.remove("sticky");
    ud_header.classList.remove("blueMenu");
    logo.src = "./images/logo.png";
    logoTitle.style.color = "#ffffff";
    hamburgerNonactive.style.color = "#ffffff";
  }
};
