//Création de la liste des artistes
//Sélection de la div où tous les artistes seront chargées
const postsContainerArtists = document.getElementById("artists");

//Créer la fonction qui permet de créer toute la mise en forme d'un artistes (éléments et attributs)
const createArtists = (item) => {
  //Je crée l'élement article pour afficher correctement les informations de chaque artistes
  const artist = document.createElement("article");
  artist.classList.add("artist");
  artist.setAttribute("data-name", `${item.class_list[10].slice(9)}`);
  postsContainerArtists.appendChild(artist);

  //Je crée l'élement a pour générer un lien qui permettra d'aller sur la page détaillée de l'artiste
  const link = document.createElement("a");
  link.href = `artiste.html?id=${item.id}`;
  link.classList.add("linkArtist");
  link.setAttribute(
    "title",
    `${item["_embedded"]["wp:featuredmedia"][0]["slug"]}`
  );
  artist.appendChild(link);

  //Je crée l'élement img pour récupérer dans wordpress l'image de chaque artistes
  const image = document.createElement("img");
  image.src = `${item["_embedded"]["wp:featuredmedia"][0]["source_url"]}`;
  image.classList.add("imgArtists");
  image.setAttribute(
    "alt",
    `${item["_embedded"]["wp:featuredmedia"][0]["slug"]}`
  );
  link.appendChild(image);

  //Je crée l'élement div pour afficher correctement la partie description pour chaque artiste
  const descriptionArtist = document.createElement("div");
  descriptionArtist.classList.add("descriptionArtist");
  link.appendChild(descriptionArtist);

  //Je crée l'élement h2 pour récupérer dans wordpress le nom de l'artiste
  const name = document.createElement("h2");
  name.innerText = `${item.title.rendered}`;
  name.classList.add("nameArtist");
  descriptionArtist.appendChild(name);

  //Je crée l'élement p pour récupérer dans wordpress la date pour chaque artistes
  const date = document.createElement("p");
  date.classList.add("dateArtists");
  date.innerText = `${item.class_list[11].slice(11)}`;
  descriptionArtist.appendChild(date);
};

//Création de la liste des artistes pour le planning
//Sélection de la div où toutes les artistes seront chargées
const postsContainerPlanning = document.getElementById("planning");

function displaySceneArtists(sceneName, artists) {
  const sceneContainer = document.createElement("div");
  sceneContainer.classList.add("sceneContainer");
  postsContainerPlanning.appendChild(sceneContainer);

  const nameScene = document.createElement("h1");
  nameScene.classList.add("nameScene");
  nameScene.innerText = `${sceneName.toUpperCase()}`;
  sceneContainer.appendChild(nameScene);

  const sceneAllartists = document.createElement("div");
  sceneAllartists.classList.add("sceneArtists");
  sceneContainer.appendChild(sceneAllartists);

  artists.forEach((artist) => {
    //Je crée l'élement article pour afficher correctement les informations de chaque artistes
    const artistHour = document.createElement("article");
    artistHour.classList.add("artistHour");
    artistHour.setAttribute("data-scene", `${artist.class_list[8].slice(9)}`);
    sceneAllartists.appendChild(artistHour);

    //Je crée l'élement a pour générer un lien qui permettra d'aller sur la page détaillée de l'artiste
    const linkArtistHour = document.createElement("a");
    linkArtistHour.href = `artiste.html?id=${artist.id}`;
    linkArtistHour.classList.add("linkArtistHour");
    linkArtistHour.setAttribute(
      "title",
      `${artist["_embedded"]["wp:featuredmedia"][0]["slug"]}`
    );
    artistHour.appendChild(linkArtistHour);

    //Je crée l'élement img pour récupérer dans wordpress l'image de chaque artistes
    const imgArtistHour = document.createElement("img");
    imgArtistHour.src = `${artist["_embedded"]["wp:featuredmedia"][0]["source_url"]}`;
    imgArtistHour.classList.add("imgArtistHour");
    imgArtistHour.setAttribute(
      "alt",
      `${artist["_embedded"]["wp:featuredmedia"][0]["slug"]}`
    );
    linkArtistHour.appendChild(imgArtistHour);

    //Je crée l'élement div pour afficher correctement la partie description pour chaque artiste
    const descriptionArtistHour = document.createElement("div");
    descriptionArtistHour.classList.add("descriptionArtistHour");
    linkArtistHour.appendChild(descriptionArtistHour);

    //Je crée l'élement h2 pour récupérer dans wordpress le nom de l'artiste
    const nameArtistHour = document.createElement("h2");
    nameArtistHour.innerText = `${artist.title.rendered}`;
    nameArtistHour.classList.add("nameArtistHour");
    descriptionArtistHour.appendChild(nameArtistHour);

    //Je crée l'élement p pour récupérer dans wordpress l'heure pour chaque artistes
    const horaireArtistHour = document.createElement("p");
    horaireArtistHour.classList.add("horaireArtistHour");
    horaireArtistHour.innerText = `${artist.class_list[9].slice(11)}`;
    descriptionArtistHour.appendChild(horaireArtistHour);
  });
}

// Récupérer les données de l'API WP et ensuite afficher tous les artistes sur la page information
//Sélection de l'url WP-JSON
const restUrl =
  "https://flo-perso.alwaysdata.net/nationsound/wordpress/wp-json/wp/v2/posts?per_page=60&_embed";

async function updateData() {
  try {
    const reponseJSON = await fetch(restUrl);
    // code à exécuter après réception de la réponse
    // conversion de la réponse au format Javascript
    const reponseJS = await reponseJSON.json();
    console.log(reponseJS);
    //Récupérer la liste complète des artistes au chargement de la page
    const allArtist = reponseJS.filter(
      //Afficher que les artistes (filtre à appliquer sur la category-artiste de WordPress)
      (a) => a.class_list[7] === "category-artiste"
    );
    allArtist.forEach((a) => {
      createArtists(a);
      // Je rappelle la fonction createArtists et afin de créer tout les éléments de chaque artistes
    });
    // Récupérer la liste complète des scènes et artistes au chargement de la page
    // Filtrer les artistes par scène
    const scenes = ["sonata", "resonance", "pulse", "thunder", "reverb"]; //Tableau avec les noms de scène
    scenes.forEach((scene) => {
      const sceneArtists = reponseJS.filter(
        (a) => a.class_list[8] === `category-scene-${scene}`
      );
      displaySceneArtists(`${scene}`, sceneArtists);
    });
  } catch (error) {
    console.log(error, "erreur");
  }
}
//Je rappelle la fonction updateData afin d'afficher les données des artistes
updateData();

//Filtrer les artistes via des boutons
// Sélectionner les éléments HTML

const artistsOrPlanning = document.querySelectorAll("#artistsOrPlanning");

// Fonction permettant de filtrer les artistes en fonction des boutons de filtrage (artistes ou planning)

const filterArtistsOrPlanning = (e) => {
  document
    .querySelector("#artistsOrPlanning .active")
    .classList.remove("active");
  e.target.classList.add("active");
};
artistsOrPlanning.forEach((button) =>
  button.addEventListener("click", filterArtistsOrPlanning)
);

const filterButtonsArtist = document.getElementById("filterButtonsArtist");
const filterButtonsPlanning = document.getElementById("filterButtonsPlanning");
const filterButtonsSubLevelAll = document.getElementById(
  "filterButtonsSubLevel"
);

// Lors du clique sur le bouton "Artistes", les boutons du dessous s'affichent et les artistes apparaissent
filterButtonsArtist.addEventListener("click", () => {
  if ((filterButtonsSubLevelAll.style.display = "none")) {
    filterButtonsSubLevelAll.style.display = "grid";
    postsContainerArtists.style.display = "grid";
    postsContainerPlanning.style.display = "none";
  }
});

// Lors du clique sur le bouton "Horaires", les boutons du dessous disparaissent et le planning apparait
filterButtonsPlanning.addEventListener("click", () => {
  if (filterButtonsSubLevelAll.style.display != "none") {
    filterButtonsSubLevelAll.style.display = "none";
    postsContainerArtists.style.display = "none";
    postsContainerPlanning.style.display = "grid";
  }
});

//Afficher les artistes en fonction des dates
const filterButtonsSubLevel = document.querySelectorAll(
  "#filterButtonsSubLevel button"
);
const filterArtist = document.getElementById("artists").children;
// Fonction permettant de filtrer les artistes en fonction des boutons de filtrage (boutons date)
const filterArtists = (e) => {
  document
    .querySelector("#filterButtonsSubLevel .active")
    .classList.remove("active");
  e.target.classList.add("active");
  for (let i = 0; i < filterArtist.length; i++) {
    if (
      filterArtist[i].dataset.name === e.target.dataset.filter ||
      e.target.dataset.filter === "lineupArtist"
    ) {
      filterArtist[i].classList.replace("hide", "show");
    } else {
      filterArtist[i].classList.add("hide");
    }
  }
};
filterButtonsSubLevel.forEach((button) =>
  button.addEventListener("click", filterArtists)
);
