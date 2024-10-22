const item = document.querySelector(".tickets");
console.log(item);

const restUrl = "http://localhost:10004/wp-json/wp/v2/pages?_embed";

data();
// data();
async function data() {
  try {
    const reponseJSON = await fetch(restUrl);
    // code à exécuter après réception de la réponse
    // conversion de la réponse au format Javascript
    const reponseJS = await reponseJSON.json();
    console.log(reponseJS);
    reponseJS.forEach((item) => {
      console.log(item.meta._tribe_tickets_list[0]);
    });
  } catch (error) {
    console.log(error, "erreur");
  }
}
