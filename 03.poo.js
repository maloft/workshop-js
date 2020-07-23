//Création de la function constructeur Personne
function Personne(nom, prenom, pseudo){
    this.nom = nom;
    this.prenom = prenom;
    this.pseudo = pseudo;

    this.getNomComplet = function(){
        return this.nom + " " + this.prenom + " " + this.pseudo;
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

// Affichage des données de l'objet paul en utilisant une fonction réutilisable
afficherPersonne = function(personne){
    console.log(personne.nom + " " + personne.prenom + " " + personne.pseudo + "\n" + personne.getNomComplet());
}

afficherPersonne(paul);

//Modifier le pseudo de l’objet jules en jules44
jules.pseudo = "jules44";
console.log(jules.getNomComplet());

//Ajouter une propriété à Personne
console.log(jules.age); //undefined

Personne.prototype.age = "NON RENSEIGNE";

console.log(jules.age); //NON RENSEIGNE

jules.age = 30;

console.log(jules.age); //30

//Ajouter une méthode à Personne
Personne.prototype.getInitiales = function(){
    return this.nom.charAt(0) + "." + this.prenom.charAt(0);
}

console.log(jules.getInitiales());

//Objet sans fonction constructeur
var robert = {nom: "LEPREFET", prenom: "Robert", pseudo: "robert77", getNomComplet: function(){
    return this.nom + " " + this.prenom + " " + this.pseudo;
}}
afficherPersonne(robert);

//Héritage via une fonction constructeur
function Client(nom, prenom, pseudo, numeroClient){
    Personne.call(this, nom, prenom, pseudo);
    this.numeroClient = numeroClient;
    this.getInfos = function(){
        return this.numeroClient + " " + this.nom + " " + this.prenom;
    }

}

var steve = new Client("LUCAS", "Steve", "steve44", "A01");
afficherPersonne(steve);
console.log(steve.numeroClient);
console.log(steve.getInfos());