//Sélection de la div où toutes les partenaires seront chargées
let postsContainer = document.querySelector("#partners");

//Créer la fonction qui permet de créer toute la mise en forme d'un partenaire (éléments et attributs)
const createPartners = (item) => {
  //Je crée l'élement article pour afficher correctement les informations de chaque partenaires
  let partner = document.createElement("div");
  partner.classList.add("partner");
  postsContainer.appendChild(partner);

  //Je crée l'élement a pour générer un lien qui permettra d'aller sur la page détaillée du partenaire
  let link = document.createElement("a");
  link.href = `${item.excerpt.rendered.slice(3, -5)}`; //Sélectionner le lien https://
  link.setAttribute(
    "title",
    `${item["_embedded"]["wp:featuredmedia"][0]["slug"]}`
  );
  link.setAttribute("target", "_blank");
  partner.appendChild(link);

  //Je crée l'élement img pour récupérer dans wordpress l'image de chaque partenaires
  let image = document.createElement("img");
  image.src = `${item["_embedded"]["wp:featuredmedia"][0]["source_url"]}`;
  image.classList.add("imgPartner");
  image.setAttribute(
    "alt",
    `${item["_embedded"]["wp:featuredmedia"][0]["slug"]}`
  );
  link.appendChild(image);
};

// Récupérer les données de l'API WordPress et ensuite afficher ces données sur la page information
//Sélection de l'url WP-JSON
const restUrl =
  "https://flo-perso.alwaysdata.net/nationsound/wordpress/wp-json/wp/v2/posts?per_page=60&_embed";

async function updateData() {
  try {
    const reponseJSON = await fetch(restUrl);
    // code à exécuter après réception de la réponse
    // conversion de la réponse au format Javascript
    const reponseJS = await reponseJSON.json();
    let partnersCategory = reponseJS.filter(
      //Afficher que les articles (filtre à appliquer sur la category-news de WordPress)
      (n) => n.class_list[7] === "category-partenaires"
    );
    partnersCategory.forEach(function (n) {
      // Je rappelle la fonction createArticles afin de créer tout les éléments de chaque articles
      createPartners(n);
      console.log(partnersCategory);
    });
  } catch (error) {
    console.log(error, "erreur");
  }
}
//Je rappelle la fonction updateData afin d'afficher les données de l'article
updateData();
