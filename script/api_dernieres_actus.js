//Sélection de la div où toutes les articles seront chargées
let postsContainer = document.getElementById("articles");

// Créer la fonction pour Changer le format de date, elle permet de passer la date en JJ/MM/YYYY
const formateDate = (maDate) => {
  const event = new Date(maDate);
  const options = { year: "numeric", month: "numeric", day: "numeric" };
  return event.toLocaleDateString("fr-FR", options);
};

//Créer la fonction qui permet de créer toute la mise en forme d'un article (éléments et attributs)
const createArticles = (item) => {
  //Je crée l'élement article pour afficher correctement les informations de chaque article
  let article = document.createElement("article");
  article.classList.add("article");
  postsContainer.appendChild(article);

  //Je crée l'élement a pour générer un lien qui permettra d'aller sur la page détaillée de l'article
  let link = document.createElement("a");
  link.href = `article.html?id=${item.id}`;
  link.setAttribute(
    "title",
    `${item["_embedded"]["wp:featuredmedia"][0]["slug"]}`
  );
  article.appendChild(link);

  //Je crée l'élement img pour récupérer dans wordpress l'image de chaque articles
  let image = document.createElement("img");
  image.src = `${item["_embedded"]["wp:featuredmedia"][0]["source_url"]}`;
  image.classList.add("imgArticles");
  image.setAttribute(
    "alt",
    `${item["_embedded"]["wp:featuredmedia"][0]["slug"]}`
  );
  link.appendChild(image);

  //Je crée l'élement div pour afficher correctement la partie description pour chaque article
  let descriptionArticle = document.createElement("div");
  descriptionArticle.classList.add("descriptionArticle");
  link.appendChild(descriptionArticle);

  //Je crée l'élement h2 pour récupérer dans wordpress le titre de l'article
  let title = document.createElement("h2");
  title.innerText = `${item.title.rendered}`;
  title.classList.add("titleArticle");
  descriptionArticle.appendChild(title);

  //Je crée l'élement p pour récupérer dans wordpress la date pour chaque articles
  let date = document.createElement("p");
  date.classList.add("dateArticle");
  date.innerText = `${formateDate(item.date)}`;
  descriptionArticle.appendChild(date);
};

// Récupérer les données de l'API WordPress et ensuite afficher ces données sur la page d'accueil (affichage des 3 derniers articles)

//Sélection de l'url WP-JSON (la catégorie article et nombre d'article à afficher sont filtré directement via l'url)
const restUrl2 =
  "https://flo-perso.alwaysdata.net/nationsound/wordpress/wp-json/wp/v2/posts?_embed&categories=5&per_page=3";

async function updateData2() {
  try {
    const reponseJSON2 = await fetch(restUrl2);
    // code à exécuter après réception de la réponse
    // conversion de la réponse au format Javascript
    const reponseJS2 = await reponseJSON2.json();
    reponseJS2.forEach((n) => {
      // Je rappelle la fonction createArticles afin de créer tout les éléments de chaque articles
      createArticles(n);
      console.log(reponseJS2);
    });
  } catch (error) {
    console.log(error, "erreur");
  }
}
//Je rappelle la fonction updateData afin d'afficher les données de l'article
updateData2();
