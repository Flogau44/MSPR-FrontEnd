//Création de la liste des artistes
//Sélection de la div où toutes les artistes seront chargées
let postsContainerArtists = document.getElementById("programmationArtists");

//Créer la fonction qui permet de créer toute la mise en forme d'un artistes (éléments et attributs)
function createArtists(item) {
  //Je crée l'élement article pour afficher correctement les informations de chaque artistes
  let artist = document.createElement("article");
  artist.classList.add("artistProg");
  artist.setAttribute("data-name", `${item.class_list[10].slice(9)}`);
  postsContainerArtists.appendChild(artist);

  //Je crée l'élement a pour générer un lien qui permettra d'aller sur la page détaillée de l'artiste
  let link = document.createElement("a");
  link.href = `artiste.html?id=${item.id}`;
  link.setAttribute(
    "title",
    `${item["_embedded"]["wp:featuredmedia"][0]["slug"]}`
  );
  artist.appendChild(link);

  //Je crée l'élement img pour récupérer dans wordpress l'image de chaque artistes
  let image = document.createElement("img");
  image.src = `${item["_embedded"]["wp:featuredmedia"][0]["source_url"]}`;
  image.classList.add("imgArtistsProg");
  image.setAttribute(
    "alt",
    `${item["_embedded"]["wp:featuredmedia"][0]["slug"]}`
  );
  link.appendChild(image);

  //Je crée l'élement div pour afficher correctement la partie description pour chaque artiste
  let descriptionArtist = document.createElement("div");
  descriptionArtist.classList.add("descriptionArtist");
  link.appendChild(descriptionArtist);

  //Je crée l'élement h2 pour récupérer dans wordpress le nom de l'artiste
  let name = document.createElement("h2");
  name.innerText = `${item.title.rendered}`;
  name.classList.add("nameArtist");
  descriptionArtist.appendChild(name);

  //Je crée l'élement p pour récupérer dans wordpress la date pour chaque artistes
  let date = document.createElement("p");
  date.classList.add("dateArtists");
  date.innerText = `${item.class_list[11].slice(11)}`;
  descriptionArtist.appendChild(date);
}

// Récupérer les données de l'API WP et ensuite afficher tous les artistes sur la page information
//Sélection de l'url WP-JSON
const restUrl =
  "http://localhost:10004/wp-json/wp/v2/posts?_embed&categories=4&per_page=6";

async function updateData() {
  try {
    const reponseJSON = await fetch(restUrl);
    // code à exécuter après réception de la réponse
    // conversion de la réponse au format Javascript
    const reponseJS = await reponseJSON.json();
    //Récupérer la liste complète des artistes au chargement de la page
    reponseJS.forEach(function (a) {
      createArtists(a);
      // Je rappelle la fonction createArtists et createArtistsHours afin de créer tout les éléments de chaque artistes
    });
  } catch (error) {
    console.log(error, "erreur");
  }
}
//Je rappelle la fonction updateData afin d'afficher les données de l'artiste
updateData();

//Caroussel

const imageList = document.querySelector(".slider-wrapper .image-list");
console.log(imageList);
const slideButtons = document.querySelectorAll(".slider-wrapper .slide-button");
console.log(slideButtons);

// Faire glisser les images en fonction des clics sur le bouton de diapositive
slideButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const direction = button.id === "prev-slide" ? -1 : 1;
    const scrollAmount = imageList.clientWidth * direction;
    imageList.scrollBy({ left: scrollAmount });
  });
});
