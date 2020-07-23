var villes = ['nantes', 'paris', 'saint-nazaire', 'angers', 'le mans'];


// A l’aide de la fonction forEach(), afficher tous les éléments du tableau dans la console.
villes.forEach(function(element){
    console.log(element);
});

// A l’aide de la fonction every(), déterminer si toutes les villes de la variables villes contiennent la lettre a.
lettreADansToutesLesVilles = villes.every(function(element){
    return element.includes("a");
})

console.log("lettreADansToutesLesVilles = " + lettreADansToutesLesVilles);

//A l’aide de la fonction some(), déterminer si au moins une ville de la variables villes contient le caractère '-'.
auMoinsUneVilleAvecUnTiret = villes.some(function(element){
    return element.includes("-");
})

console.log("auMoinsUneVilleAvecUnTiret = " + auMoinsUneVilleAvecUnTiret);

//A l’aide de la fonction filter(), créer une variable villesSansTiretSansEspace qui contient un tableau dont les villes n’ont ni tiret, ni espace.
villesSansTiretSansEspace = villes.filter(function(element){
    return !(element.includes("-") || element.includes(" "));
})

console.log("villesSansTiretSansEspace = " + villesSansTiretSansEspace);


//Chainer les Fonctions 
villesSeTerminantParS = villes.filter(function(element){
    return element.slice(-1) == "s";
})

console.log("villesSeTerminantParS = " + villesSeTerminantParS);

villesMajusculeSeTerminantParS = new Array();

for(elt in villesSeTerminantParS){
    str = villesSeTerminantParS[elt].toUpperCase();
    villesMajusculeSeTerminantParS.push(str);
}

console.log(villesMajusculeSeTerminantParS);
