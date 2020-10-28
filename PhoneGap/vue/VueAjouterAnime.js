class VueAjouterAnime{
  constructor(){
    this.html = document.getElementById("html-vue-ajouter-anime").innerHTML;
    this.actionAjouterAnime = null;
  }

  initialiserActionAjouterAnime(actionAjouterAnime){
    this.actionAjouterAnime = actionAjouterAnime;
  }

  afficher(){
    document.getElementsByTagName("body")[0].innerHTML = this.html;
    document.getElementById("formulaire-ajouter").addEventListener("submit", evenement =>this.enregistrer(evenement));
  }

  enregistrer(evenement){
    evenement.preventDefault();

    let nom = document.getElementById("anime-nom").value;
    let nbrepisodes = document.getElementById("anime-nbr-episodes").value;
    let description = document.getElementById("anime-description").value;

    this.actionAjouterAnime(new Anime(nom, nbrepisodes, description, null));
  }
}
