//Sélection de la div où toutes les données de l'artiste seront chargées
let postsContainer = document.querySelector("#artist");

//Créer la fonction qui permet de créer toute la mise en forme d'un artiste (éléments et attributs)
const createArtist = (item) => {
  //Je crée l'élement img pour récupérer dans wordpress l'image de l'artiste
  let image = document.createElement("img");
  image.src = `${item["_embedded"]["wp:featuredmedia"][0]["source_url"]}`;
  image.setAttribute(
    "alt",
    `${item["_embedded"]["wp:featuredmedia"][0]["slug"]}`
  );
  image.classList.add("imgArtist");
  postsContainer.appendChild(image);

  //Je crée l'élement div pour afficher correctement les informations de l'artiste
  let informationArtist = document.createElement("div");
  informationArtist.classList.add("informationArtist");
  postsContainer.appendChild(informationArtist);

  //Je crée l'élement div pour afficher correctement la partie en tête de l'artiste
  let headerArtist = document.createElement("div");
  headerArtist.classList.add("headerArtist");
  informationArtist.appendChild(headerArtist);

  //Je crée l'élement div pour récupérer dans wordpres le résumé de l'artiste
  let resumeArtist = document.createElement("div");
  resumeArtist.innerHTML = `${item.excerpt.rendered.slice(13)}`;
  resumeArtist.classList.add("resumeArtist");
  informationArtist.appendChild(resumeArtist);

  //Je crée l'élement h2 pour récupérer dans wordpress le nom de l'artiste
  let name = document.createElement("h2");
  name.innerText = `${item.title.rendered}`;
  name.classList.add("nameArtist");
  headerArtist.appendChild(name);

  //Je crée l'élement p pour récupérer dans wordpress la date de concert de l'artiste
  let date = document.createElement("p");
  date.innerText = `${item.class_list[11].slice(11)}`;
  date.classList.add("dateArtist");
  headerArtist.appendChild(date);

  //Je crée l'élement p pour récupérer dans wordpress l'horaire de concert de l'artiste
  let horaire = document.createElement("p");
  horaire.innerText = `${item.class_list[9].slice(11)}`;
  horaire.classList.add("horaireArtist");
  headerArtist.appendChild(horaire);

  //Je crée l'élement p pour récupérer dans wordpress la scène du concert de l'artiste
  let scene = document.createElement("p");
  scene.innerText = `${item.class_list[8].slice(9)}`;
  scene.classList.add("sceneArtist");
  headerArtist.appendChild(scene);
};

// Récupérer l'ID de l'artiste dans l'url
// Récupérer la chaine de requête dans l'url
const queryString_url_id = window.location.search;
// Extraire le n°ID
const urlSearchParams = new URLSearchParams(queryString_url_id);
const id = urlSearchParams.get("id");

// Récupérer les données de l'API WordPress et ensuite afficher ces données sur la page artiste suivant l'id
//Sélection de l'url WP-JSON
const restUrl = "http://localhost:10004/wp-json/wp/v2/posts?per_page=60&_embed";

async function updateData() {
  try {
    const reponseJSON = await fetch(restUrl);
    // code à exécuter après réception de la réponse
    // conversion de la réponse au format Javascript
    const reponseJS = await reponseJSON.json();
    console.log(reponseJS);
    // Trouver l'id de l'artiste correspondant à l'id de l'url
    const item = reponseJS.find((a) => a.id == id);
    // Je rappelle la fonction createArticle afin de créer tout les éléments de l'artiste
    createArtist(item);
  } catch (error) {
    console.log(error, "erreur");
  }
}
//Je rappelle la fonction updateData afin d'afficher les données de l'artiste
updateData();
