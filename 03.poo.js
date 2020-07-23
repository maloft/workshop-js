//Création de la function constructeur Personne
function Personne(nom, prenom, pseudo){
    this.nom = nom;
    this.prenom = prenom;
    this.pseudo = pseudo;

    this.getNomComplet = function(){
        return nom + " " + prenom + " " + pseudo;
    }
}

//Création de l'objet jules
var jules = new Personne("LEMAIRE", "Jules", "jules77");

//Création de l'objet paul
var paul = new Personne("LEMAIRE", "Paul", "paul44");

// Affichage des données de l'objet jules
console.log(jules.nom);
console.log(jules.prenom);
console.log(jules.pseudo);
console.log(jules.getNomComplet());

// Affichage des données de l'objet paul
console.log(paul.nom);
console.log(paul.prenom);
console.log(paul.pseudo);
console.log(paul.getNomComplet());