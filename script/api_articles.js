//Sélection de la div où tous les articles vont être chargés
let postsContainer = document.querySelector("#articles");

// Changer le format de date
function formateDate(maDate) {
  const event = new Date(maDate);
  const options = { year: "numeric", month: "numeric", day: "numeric" };
  return event.toLocaleDateString("fr-FR", options);
}

//Créer tout le contenu pour un article
function articles(item) {
  let article = document.createElement("article");
  article.classList.add("article");
  postsContainer.appendChild(article);

  let link = document.createElement("a");
  link.href = `article.html?id=${item.id}`;
  article.appendChild(link);

  let image = document.createElement("img");
  image.src = `${item["_embedded"]["wp:featuredmedia"][0]["source_url"]}`;
  link.appendChild(image);

  let descriptionArticle = document.createElement("div");
  descriptionArticle.classList.add("descriptionArticle");
  link.appendChild(descriptionArticle);

  let title = document.createElement("h2");
  title.innerText = `${item.title.rendered}`;
  title.classList.add("titleArticle");
  descriptionArticle.appendChild(title);

  let date = document.createElement("p");
  date.classList.add("dateArticle");
  date.innerText = `${formateDate(item.date)}`;
  descriptionArticle.appendChild(date);
}

// Sélectionner l'index catégorie

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
    let newsCategory = reponseJS.filter(
      (news) => news.class_list[7] === "category-news"
    );
    newsCategory.forEach(function (news) {
      articles(news);
      console.log(newsCategory);
    });
  } catch (error) {
    console.log(error, "erreur");
  }
}
