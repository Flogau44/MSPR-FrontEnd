//Sélection de la div où tous les articles vont être chargés
let postsContainer = document.querySelector("#artiste");

// Changer le format de date
function formateDate(maDate) {
  const event = new Date(maDate);
  const options = { year: "numeric", month: "numeric", day: "numeric" };
  return event.toLocaleDateString("fr-FR", options);
}

//Créer tout le contenu pour un artiste
function articles(item) {
  let image = document.createElement("img");
  image.src = `${item["_embedded"]["wp:featuredmedia"][0]["source_url"]}`;
  image.classList.add("imgArtiste");
  postsContainer.appendChild(image);

  let informationArtiste = document.createElement("div");
  informationArtiste.classList.add("informationArtiste");
  postsContainer.appendChild(informationArtiste);

  let headerArtiste = document.createElement("div");
  headerArtiste.classList.add("headerArtiste");
  informationArtiste.appendChild(headerArtiste);

  let resumeArtiste = document.createElement("div");
  resumeArtiste.innerHTML = `${item.excerpt.rendered}`;
  resumeArtiste.classList.add("resumeArtiste");
  informationArtiste.appendChild(resumeArtiste);

  let name = document.createElement("h2");
  name.innerText = `${item.title.rendered}`;
  name.classList.add("nameArtiste");
  headerArtiste.appendChild(name);

  let date = document.createElement("p");
  date.innerText = `${formateDate(item.date)}`;
  date.classList.add("dateArtiste");
  headerArtiste.appendChild(date);
}

// Récupérer l'ID article dans l'url
// Récupérer la chaine de requête dans l'url
const queryString_url_id = window.location.search;
// Extraire l'ID
const urlSearchParams = new URLSearchParams(queryString_url_id);
const id = urlSearchParams.get("id");

// Récupérer les données de l'API WP et ensuite afficher ces données sur la page article suivant l'id

const restUrl = "http://localhost:10004/wp-json/wp/v2/posts?_embed";

data();

async function data() {
  try {
    const reponseJSON = await fetch(restUrl);
    // code à exécuter après réception de la réponse
    // conversion de la réponse au format Javascript
    const reponseJS = await reponseJSON.json();
    console.log(reponseJS);
    // Trouver l'id de l'objet correspondant à l'id de l'url
    const item = reponseJS.find((a) => a.id == id);
    // Afficher les données de l'article
    articles(item);
  } catch (error) {
    console.log(error, "erreur");
  }
}
