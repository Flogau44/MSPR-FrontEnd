//Sélection de la div où tous les artistes vont être chargés
let postsContainer = document.querySelector("#artistes");

// Changer le format de date
function formateDate(maDate) {
  const event = new Date(maDate);
  const options = { year: "numeric", month: "numeric", day: "numeric" };
  return event.toLocaleDateString("fr-FR", options);
}

//Créer tout le contenu pour un artiste
function artistes(item) {
  let artiste = document.createElement("article");
  artiste.classList.add("artiste");
  postsContainer.appendChild(artiste);

  let link = document.createElement("a");
  link.href = `artiste.html?id=${item.id}`;
  artiste.appendChild(link);

  let image = document.createElement("img");
  image.src = `${item["_embedded"]["wp:featuredmedia"][0]["source_url"]}`;
  link.appendChild(image);

  let descriptionArtiste = document.createElement("div");
  descriptionArtiste.classList.add("descriptionArtiste");
  link.appendChild(descriptionArtiste);

  let name = document.createElement("h2");
  name.innerText = `${item.title.rendered}`;
  name.classList.add("nameArtiste");
  descriptionArtiste.appendChild(name);

  let date = document.createElement("p");
  date.classList.add("dateArtistes");
  date.innerText = `${formateDate(item.date)}`;
  descriptionArtiste.appendChild(date);
}

// Récupérer les données de l'API WP et ensuite afficher ces données sur la page information

const restUrl = "http://localhost:10004/wp-json/wp/v2/posts?_embed";

data();

async function data() {
  try {
    const reponseJSON = await fetch(restUrl);
    // code à exécuter après réception de la réponse
    // conversion de la réponse au format Javascript
    const reponseJS = await reponseJSON.json();
    console.log(reponseJS);
    let artisteCategory = reponseJS.filter(
      (a) => a.class_list[7] === "category-artiste"
    );
    artisteCategory.forEach(function (a) {
      artistes(a);
      console.log(artisteCategory);
    });
  } catch (error) {
    console.log(error, "erreur");
  }
}
