class AnimeDAO{
  constructor(){
    /*
  this.listeAnime = [
    {nom:"Overlord II", nbrepisodes:"13", description:"Isekai: après un début mouvementé dans ce nouveau monde, Ainz décide de tester ses sous-fifres.", id:0},
    {nom:"Shingeki No Kyojin Saison 3", nbrepisodes:"11", description:"Le bataillon a réussi à récupérer Eren, mais le titan colossal et le titan cuirassé sont parvenus à leur échapper. De plus, les pertes sont colossales et Erwin doit faire face à de nouvelles accusations.", id:1},
    {nom:"Kimi no Suizo wo Tabetai", nbrepisodes:"1", description:"Shiga est un lycéen introverti qui ne semble trouver du réconfort que dans la littérature. Sa vie monotone bascule le jour où, en se rendant à l'hôpital, il découvre dans la salle d'attente le journal intime de Yamauchi Sakura, sa camarade de classe. Cette dernière lui révèle alors qu'elle est atteinte d'une rare déficience du pancréas et que ses jours sont comptés. Etant la seule personne du lycée au courant pour la maladie de la jeune fille, Shiga décide de garder le secret et d'en rester là avec elle. Mais sans qu'il ne s'en rende compte, Sakura et lui multiplient le temps passé ensemble ; et bien que leurs personnalités soient comme le jour et la nuit, chacun trouve en l'autre un précieux soutien. Ainsi Shiga décide de s'ouvrir à elle pour l'accompagner dans ses derniers jours.", id:2}];
  */
  this.listeAnime = [];
}

  lister(){
    if(localStorage['anime']){
      this.listeAnime = JSON.parse(localStorage['anime']);
    }

    for(let position in this.listeAnime){
      let anime = new Anime(this.listeAnime[position].nom,
                              this.listeAnime[position].nbrepisodes,
                              this.listeAnime[position].description,
                              this.listeAnime[position].id);
      this.listeAnime[anime.id] = anime;
    }
    return this.listeAnime;
  }

  ajouter(anime){
    if(this.listeAnime.length > 0)
     anime.id = this.listeAnime[this.listeAnime.length-1].id + 1;
    else
     anime.id = 0;

    this.listeAnime[anime.id] = anime;

    localStorage['anime'] = JSON.stringify(this.listeAnime);
    console.log("JSON.stringify(this.listeAnime) : " + JSON.stringify(this.listeAnime));
  }
}
