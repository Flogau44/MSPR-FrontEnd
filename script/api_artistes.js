//Sélection de la div où tous les artistes vont être chargés
let postsContainer = document.querySelector("#artists");

//Créer tout le contenu pour un artiste
function createArtists(item) {
  let artist = document.createElement("artist");
  artist.classList.add("artist");
  postsContainer.appendChild(artist);

  let link = document.createElement("a");
  link.href = `artiste.html?id=${item.id}`;
  link.setAttribute(
    "title",
    `${item["_embedded"]["wp:featuredmedia"][0]["slug"]}`
  );
  artist.appendChild(link);

  let image = document.createElement("img");
  image.src = `${item["_embedded"]["wp:featuredmedia"][0]["source_url"]}`;
  image.classList.add("imgArtists");
  image.setAttribute(
    "alt",
    `${item["_embedded"]["wp:featuredmedia"][0]["slug"]}`
  );
  link.appendChild(image);

  let descriptionArtist = document.createElement("div");
  descriptionArtist.classList.add("descriptionArtist");
  link.appendChild(descriptionArtist);

  let name = document.createElement("h2");
  name.innerText = `${item.title.rendered}`;
  name.classList.add("nameArtist");
  descriptionArtist.appendChild(name);

  let date = document.createElement("p");
  date.classList.add("dateArtists");
  date.innerText = `${item.excerpt.rendered.slice(3, 13)}`;
  descriptionArtist.appendChild(date);
}

// Récupérer les données de l'API WP et ensuite afficher tous les artistes sur la page information

const restUrl = "http://localhost:10004/wp-json/wp/v2/posts?per_page=60&_embed";

async function updateData() {
  try {
    const reponseJSON = await fetch(restUrl);
    // code à exécuter après réception de la réponse
    // conversion de la réponse au format Javascript
    const reponseJS = await reponseJSON.json();

    //Récupérer la liste complète des artistes au chargement de la page
    let allArtist = reponseJS.filter(
      (a) => a.class_list[7] === "category-artiste"
    );
    allArtist.forEach(function (a) {
      createArtists(a);
      console.log(allArtist);
    });
  } catch (error) {
    console.log(error, "erreur");
  }
}

updateData();

//Filtrer les artistes suivant la date sélectionée
const firstDate = document.getElementById("firstDate");
firstDate.addEventListener("click", () => {
  return updateData();
});

const secondDate = document.getElementById("secondDate");
secondDate.addEventListener("click", () => {
  return updateData();
});

const thirdDate = document.getElementById("thirdDate");
thirdDate.addEventListener("click", () => {
  return updateData();
});
