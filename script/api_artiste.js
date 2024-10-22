//Sélection de la div où tous les articles vont être chargés
let postsContainer = document.querySelector("#artist");

//Créer tout le contenu pour un artiste
function createArtist(item) {
  let image = document.createElement("img");
  image.src = `${item["_embedded"]["wp:featuredmedia"][0]["source_url"]}`;
  image.setAttribute(
    "alt",
    `${item["_embedded"]["wp:featuredmedia"][0]["slug"]}`
  );
  image.classList.add("imgArtiste");
  postsContainer.appendChild(image);

  let informationArtist = document.createElement("div");
  informationArtist.classList.add("informationArtist");
  postsContainer.appendChild(informationArtist);

  let headerArtist = document.createElement("div");
  headerArtist.classList.add("headerArtist");
  informationArtist.appendChild(headerArtist);

  let resumeArtist = document.createElement("div");
  resumeArtist.innerHTML = `${item.excerpt.rendered.slice(13)}`;
  resumeArtist.classList.add("resumeArtist");
  informationArtist.appendChild(resumeArtist);

  let name = document.createElement("h2");
  name.innerText = `${item.title.rendered}`;
  name.classList.add("nameArtist");
  headerArtist.appendChild(name);

  let date = document.createElement("p");
  date.innerText = `${item.excerpt.rendered.slice(3, 13)}`;
  date.classList.add("dateArtist");
  headerArtist.appendChild(date);

  let horaire = document.createElement("p");
  horaire.innerText = `${item.class_list[9].slice(11)}`;
  horaire.classList.add("horaireArtist");
  headerArtist.appendChild(horaire);

  let scene = document.createElement("p");
  scene.innerText = `${item.class_list[8].slice(9)}`;
  scene.classList.add("sceneArtist");
  headerArtist.appendChild(scene);
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
    const item = reponseJS.find((a) => a.id == id);
    // Afficher les données de l'article
    createArtist(item);
  } catch (error) {
    console.log(error, "erreur");
  }
}
updateData();
