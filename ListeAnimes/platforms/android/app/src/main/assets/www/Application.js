class Application{
  constructor(window, animeDAO, vueListeAnime, vueAjouterAnime, vueAnime){
    this.window = window;

    this.animeDAO = animeDAO;

    this.vueListeAnime = vueListeAnime;

    this.vueAjouterAnime = vueAjouterAnime;
    this.vueAjouterAnime.initialiserActionAjouterAnime(anime =>this.actionAjouterAnime(anime));

    this.vueAnime = vueAnime;

    //this.window.addEventListener("hashchange", () =>this.naviguer());

    //this.naviguer();
    document.addEventListener('deviceready', () =>this.initialiserNavigation(), false);
  }

  initialiserNavigation(){
    console.log("Application-->initialiserNavigation");
    this.window.addEventListener("hashchange", () =>naviguer());
    setTimeout(() =>this.naviguer(), 3000);
  }

  naviguer(){
    let hash = window.location.hash;

    if(!hash){

      this.vueListeAnime.initialiserListeAnime(this.animeDAO.lister());
      this.vueListeAnime.afficher();

    }else if(hash.match(/^#ajouter-anime/)){

      this.vueAjouterAnime.afficher();

    }else{

      let navigation = hash.match(/^#anime\/([0-9]+)/);
      let idAnime = navigation[1];

      this.vueAnime.initialiserAnime(this.animeDAO.lister()[idAnime]);
      this.vueAnime.afficher();

    }
  }

  actionAjouterAnime(anime){
    this.animeDAO.ajouter(anime);
    this.window.location.hash = "#";
  }
}

new Application(window, new AnimeDAO(), new VueListeAnime(), new VueAjouterAnime(), new VueAnime());
