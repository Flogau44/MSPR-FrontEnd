// Configuration selon le site splide

// Carousel
document.addEventListener("DOMContentLoaded", function () {
  const splide1 = new Splide("#slider1", {
    type: "fade",
    rewind: true,
    arrows: false,
    height: 500,
  });
  splide1.mount();
});

//Carousel programmation
document.addEventListener("DOMContentLoaded", function () {
  const splide2 = new Splide("#slider2", {
    type: "loop",
    focus: 0,
    pagination: false,
    perPage: 6,
    gap: "20px",
    breakpoints: {
      1280: {
        perPage: 5,
        gap: "10px",
      },
      1024: {
        perPage: 4,
      },
      768: {
        perPage: 3,
      },
      640: {
        perPage: 2,
      },
      480: {
        perPage: 1,
      },
    },
  });
  splide2.mount();

  //Créer la fonction qui permet de créer toute la mise en forme d'un artistes (éléments et attributs)
  const createArtists = (item) => {
    //Je crée l'élement article pour afficher correctement les informations de chaque artistes
    let slide = document.createElement("li");
    slide.classList.add("splide__slide");
    splide2.add(slide);

    //Je crée l'élement a pour générer un lien qui permettra d'aller sur la page détaillée de l'artiste
    let link = document.createElement("a");
    link.href = `artiste.html?id=${item.id}`;
    link.classList.add("artistProg");
    link.setAttribute(
      "title",
      `${item["_embedded"]["wp:featuredmedia"][0]["slug"]}`
    );
    slide.appendChild(link);

    //Je crée l'élement img pour récupérer dans wordpress l'image de chaque artistes
    let image = document.createElement("img");
    image.src = `${item["_embedded"]["wp:featuredmedia"][0]["source_url"]}`;
    image.classList.add("imgArtistsProg");
    image.setAttribute(
      "alt",
      `${item["_embedded"]["wp:featuredmedia"][0]["slug"]}`
    );
    link.appendChild(image);

    //Je crée l'élement div pour afficher correctement la partie description pour chaque artiste
    let descriptionArtist = document.createElement("div");
    descriptionArtist.classList.add("descriptionArtist");
    link.appendChild(descriptionArtist);

    //Je crée l'élement h2 pour récupérer dans wordpress le nom de l'artiste
    let name = document.createElement("h2");
    name.innerText = `${item.title.rendered}`;
    name.classList.add("nameArtist");
    descriptionArtist.appendChild(name);

    //Je crée l'élement p pour récupérer dans wordpress la date pour chaque artistes
    let date = document.createElement("p");
    date.classList.add("dateArtists");
    date.innerText = `${item.class_list[11].slice(11)}`;
    descriptionArtist.appendChild(date);
  };

  // Récupérer les données de l'API WP et ensuite afficher tous les artistes sur la page information
  //Sélection de l'url WP-JSON
  const restUrl =
    "https://flo-perso.alwaysdata.net/nationsound/wordpress/wp-json/wp/v2/posts?_embed&categories=4&per_page=12";

  async function updateData() {
    try {
      const reponseJSON = await fetch(restUrl);
      // code à exécuter après réception de la réponse
      // conversion de la réponse au format Javascript
      const reponseJS = await reponseJSON.json();
      //Récupérer la liste complète des artistes au chargement de la page
      reponseJS.forEach((a) => {
        createArtists(a);
        // Je rappelle la fonction createArtists et createArtistsHours afin de créer tout les éléments de chaque artistes
      });
    } catch (error) {
      console.log(error, "erreur");
    }
  }
  //Je rappelle la fonction updateData afin d'afficher les données de l'artiste
  updateData();
});
