class VueAnime{
  constructor(){
    this.html = document.getElementById("html-vue-anime").innerHTML;
    this.anime = null;
  }

  initialiserAnime(anime){
    this.anime = anime;
  }

  afficher(){
    document.getElementsByTagName("body")[0].innerHTML = this.html;

    document.getElementById("anime-nom").innerHTML = this.anime.nom;
    document.getElementById("anime-nbr-episodes").innerHTML = this.anime.nbrepisodes;
    document.getElementById("anime-description").innerHTML = this.anime.description;
  }
}
