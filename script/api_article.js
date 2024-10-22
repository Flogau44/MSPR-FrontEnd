//Sélection de la div où toutes les données de l'article seront chargées
let postsContainer = document.querySelector("#article");

// Créer la fonction pour Changer le format de date, elle permet de passer la date en JJ/MM/YYYY
const formateDate = (maDate) => {
  const event = new Date(maDate);
  const options = { year: "numeric", month: "numeric", day: "numeric" };
  return event.toLocaleDateString("fr-FR", options);
};

//Créer la fonction qui permet de créer toute la mise en forme d'un article (éléments et attributs)
const createArticle = (item) => {
  //Je crée l'élement img pour récupérer dans wordpress l'image de l'article
  let image = document.createElement("img");
  image.src = `${item["_embedded"]["wp:featuredmedia"][0]["source_url"]}`;
  image.classList.add("imgArticle");
  postsContainer.appendChild(image);

  //Je crée l'élement div pour afficher correctement les informations de l'article
  let informationArticle = document.createElement("div");
  informationArticle.classList.add("informationArticle");
  postsContainer.appendChild(informationArticle);

  //Je crée l'élement div pour afficher correctement la partie en tête de l'article
  let headerArticle = document.createElement("div");
  headerArticle.classList.add("headerArticle");
  informationArticle.appendChild(headerArticle);

  //Je crée l'élement div pour récupérer dans wordpres le résumé de l'article
  let resumeArticle = document.createElement("div");
  resumeArticle.innerHTML = `${item.excerpt.rendered}`;
  resumeArticle.classList.add("resumeArticle");
  informationArticle.appendChild(resumeArticle);

  //Je crée l'élement h2 pour récupérer dans wordpress le titre de l'article
  let title = document.createElement("h2");
  title.innerText = `${item.title.rendered}`;
  title.classList.add("titleArticle");
  headerArticle.appendChild(title);

  //Je crée l'élement p pour récupérer dans wordpress la date de l'article
  let date = document.createElement("p");
  date.innerText = `${formateDate(item.date)}`;
  date.classList.add("dateArticle");
  headerArticle.appendChild(date);
};

// Récupérer l'ID de l'article dans l'url
// Récupérer la chaine de requête dans l'url
const queryString_url_id = window.location.search;
// Extraire le n°ID
const urlSearchParams = new URLSearchParams(queryString_url_id);
const id = urlSearchParams.get("id");

// Récupérer les données de l'API WordPress et ensuite afficher ces données sur la page article suivant l'id
//Sélection de l'url WP-JSON
const restUrl = "http://localhost:10004/wp-json/wp/v2/posts?per_page=60&_embed";

async function updateData() {
  try {
    const reponseJSON = await fetch(restUrl);
    // code à exécuter après réception de la réponse
    // conversion de la réponse au format Javascript
    const reponseJS = await reponseJSON.json();
    // Trouver l'id de l'article correspondant à l'id de l'url
    const item = reponseJS.find((news) => news.id == id);
    // Je rappelle la fonction createArticle afin de créer tout les éléments de l'article
    createArticle(item);
  } catch (error) {
    console.log(error, "erreur");
  }
}
//Je rappelle la fonction  updateData afin d'afficher les données de l'article
updateData();
