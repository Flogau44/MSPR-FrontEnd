const questions = document.querySelectorAll(".question");

questions.forEach((item) => {
  // Chaque élément du tableau est représenté par item
  // Maintenant chaque élément du tableau (item) est soumis à une action au clic
  item.addEventListener("click", function () {
    // je sélectionne et stocke la DIV suivante de l'item cliqué
    const next = item.nextElementSibling;
    console.log(next);
    // On rend visible ou invisible la réponse
    next.classList.toggle("visible");
    // Je cible et stocke l'icône de item
    const icone = item.lastElementChild;
    icone.classList.toggle("fa-minus");
    console.log(icone);
  });
});
