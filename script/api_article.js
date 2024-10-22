//Sélection de la div où tous les articles vont être chargés
let postsContainer = document.querySelector("#article");

// Changer le format de date
function formateDate(maDate) {
  const event = new Date(maDate);
  const options = { year: "numeric", month: "numeric", day: "numeric" };
  return event.toLocaleDateString("fr-FR", options);
}

//Créer tout le contenu pour un article
function createArticle(item) {
  let image = document.createElement("img");
  image.src = `${item["_embedded"]["wp:featuredmedia"][0]["source_url"]}`;
  image.classList.add("imgArticle");
  postsContainer.appendChild(image);

  let informationArticle = document.createElement("div");
  informationArticle.classList.add("informationArticle");
  postsContainer.appendChild(informationArticle);

  let headerArticle = document.createElement("div");
  headerArticle.classList.add("headerArticle");
  informationArticle.appendChild(headerArticle);

  let resumeArticle = document.createElement("div");
  resumeArticle.innerHTML = `${item.excerpt.rendered}`;
  resumeArticle.classList.add("resumeArticle");
  informationArticle.appendChild(resumeArticle);

  let title = document.createElement("h2");
  title.innerText = `${item.title.rendered}`;
  title.classList.add("titleArticle");
  headerArticle.appendChild(title);

  let date = document.createElement("p");
  date.innerText = `${formateDate(item.date)}`;
  date.classList.add("dateArticle");
  headerArticle.appendChild(date);
}

// Récupérer l'ID article dans l'url
// Récupérer la chaine de requête dans l'url
const queryString_url_id = window.location.search;
// Extraire l'ID
const urlSearchParams = new URLSearchParams(queryString_url_id);
const id = urlSearchParams.get("id");

// Récupérer les données de l'API WP et ensuite afficher ces données sur la page article suivant l'id

const restUrl = "http://localhost:10004/wp-json/wp/v2/posts?_embed";

async function updateData() {
  try {
    const reponseJSON = await fetch(restUrl);
    // code à exécuter après réception de la réponse
    // conversion de la réponse au format Javascript
    const reponseJS = await reponseJSON.json();
    console.log(reponseJS);
    // Trouver l'id de l'objet correspondant à l'id de l'url
    const item = reponseJS.find((news) => news.id == id);
    // Afficher les données de l'article
    createArticle(item);
  } catch (error) {
    console.log(error, "erreur");
  }
}

updateData();
