//Sélection de la div où toutes les partenaires seront chargées
const postsContainer = document.querySelector("#partners");

//Créer la fonction qui permet de créer toute la mise en forme d'un partenaire (éléments et attributs)
const displayPartnerType = (categoryName, partners) => {
  const categoryPartner = document.createElement("div");
  categoryPartner.classList.add("categoryPartner");
  categoryPartner.setAttribute("data-partenaires", categoryName);
  postsContainer.appendChild(categoryPartner);

  const nameCategory = document.createElement("div");
  nameCategory.classList.add("nameCategory");
  categoryPartner.appendChild(nameCategory);

  const nameCategoryPartner = document.createElement("h2");
  nameCategoryPartner.classList.add("categoryTitle");
  nameCategoryPartner.innerText = `${categoryName.toUpperCase()}`;
  nameCategory.appendChild(nameCategoryPartner);

  const categoryAllPartners = document.createElement("div");
  categoryAllPartners.classList.add("categoryPartners");
  categoryPartner.appendChild(categoryAllPartners);

  partners.forEach((partner) => {
    //Je crée l'élement div pour afficher correctement les informations de chaque partenaires
    const namePartner = document.createElement("div");
    namePartner.classList.add("partner");
    categoryAllPartners.appendChild(namePartner);

    //Je crée l'élement a pour générer un lien qui permettra d'aller sur la page détaillée du partenaire
    const link = document.createElement("a");
    link.href = `${partner.excerpt.rendered.slice(3, -5)}`; //Sélectionner le lien https://
    link.classList.add("linkPartner");
    link.setAttribute(
      "title",
      `${partner["_embedded"]["wp:featuredmedia"][0]["slug"]}`
    );
    link.setAttribute("target", "_blank");
    namePartner.appendChild(link);

    //Je crée l'élement img pour récupérer dans wordpress l'image de chaque partenaires
    const image = document.createElement("img");
    image.src = `${partner["_embedded"]["wp:featuredmedia"][0]["source_url"]}`;
    image.classList.add("imgPartner");
    image.setAttribute(
      "alt",
      `${partner["_embedded"]["wp:featuredmedia"][0]["slug"]}`
    );
    link.appendChild(image);
  });
};

// Récupérer les données de l'API WordPress et ensuite afficher ces données sur la page information
//Sélection de l'url WP-JSON
const restUrl =
  "https://flo-perso.alwaysdata.net/nationsound/wordpress/wp-json/wp/v2/posts?_embed&categories=55&per_page=60";

async function updateData() {
  try {
    const reponseJSON = await fetch(restUrl);
    // code à exécuter après réception de la réponse
    // conversion de la réponse au format Javascript
    const reponseJS = await reponseJSON.json();
    // Récupérer la liste complète des types et partenaires au chargement de la page
    // Filtrer les partenaires par type
    const partnerType = ["officiels", "medias"]; //Tableau avec les types de partenaire

    partnerType.forEach((type) => {
      const typePartner = reponseJS.filter(
        (a) => a.class_list[8] === `category-partenaires-${type}`
      );
      displayPartnerType(type, typePartner);
    });
  } catch (error) {
    console.log(error, "erreur");
  }
}
//Je rappelle la fonction updateData afin d'afficher les données de l'article
updateData();
