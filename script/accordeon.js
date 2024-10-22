// Je sélectionne les class question et je stocke
const questions = document.querySelectorAll(".question");

questions.forEach((item) => {
  // Chaque élément du tableau est représenté par item
  // Maintenant chaque élément du tableau (item) est soumis à une action au clic
  item.addEventListener("click", function () {
    // je sélectionne et je stocke la DIV suivante de l'item cliqué (reponse)
    const next = item.nextElementSibling;
    // On rend visible ou invisible la réponse
    next.classList.toggle("visible");
    // Je sélectionne et je stocke l'icône de item
    const icone = item.childNodes[3];
    icone.classList.toggle("fa-chevron-down");
  });
});
