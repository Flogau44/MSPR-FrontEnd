const item = document.querySelector(".tickets");
console.log(item);

data();
// data();
async function data() {
  try {
    const reponseJSON = await fetch(
      "http://localhost:10004/wp-json/wp/v2/tribe_rsvp_tickets"
    );
    // code à exécuter après réception de la réponse
    // conversion de la réponse au format Javascript
    const reponseJS = await reponseJSON.json();
    console.log(reponseJS, "objet Javascript");
  } catch (error) {
    console.log(error, "erreur");
  }
}
