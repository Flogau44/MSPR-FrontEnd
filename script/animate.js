// slideinleft
const slideinleft = function (entries) {
  entries.forEach((entry) => {
    console.log(entry);
    // L'élément se trouve-t-il dans la fenêtre de visualisation ?
    if (entry.isIntersecting) {
      // Ajouter la classe slideinleft :
      entry.target.classList.add("animate-slideinleft");
    } else {
      // Sinon, supprimer la classe slideinleft
      entry.target.classList.remove("animate-slideinleft");
    }
  });
};
// Création d'un nouvel observateur pour le slideinleft
const observ1 = new IntersectionObserver(slideinleft);
// Récupérez tous les éléments que vous souhaitez afficher lors du défilement.
const targets1 = document.querySelectorAll(".js-show-on-scroll");
// Boucle sur chacune des cibles
targets1.forEach(function (target) {
  // Cacher l'élément
  target.classList.add("opacity-0");
  // Ajouter l'élément à l'observateur
  observ1.observe(target);
});

// Spinner-grow
const spinnerGrow = function (entries) {
  entries.forEach((entry) => {
    console.log(entry);
    // L'élément se trouve-t-il dans la fenêtre de visualisation ?
    if (entry.isIntersecting) {
      // Ajouter la classe Spinner-grow :
      entry.target.classList.add("animate-spinnergrow");
    } else {
      // Sinon, supprimer la classe Spinner-grow
      entry.target.classList.remove("animate-spinnergrow");
    }
  });
};
// Création d'un nouvel observateur pour le spinnergrow
const observ2 = new IntersectionObserver(spinnerGrow);
// Récupérez tous les éléments que vous souhaitez afficher lors du défilement.
const targets2 = document.querySelectorAll(".js-show-on-scroll");
// Boucle sur chacune des cibles
targets2.forEach(function (target) {
  // Cacher l'élément
  target.classList.add("opacity-0");
  // Ajouter l'élément à l'observateur
  observ2.observe(target);
});
