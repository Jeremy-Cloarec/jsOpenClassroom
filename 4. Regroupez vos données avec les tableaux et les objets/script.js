// Utiliser un tableau pour enregistrer une liste ordonnée d’éléments

// Pour créer un tableau vide et l’enregistrer dans une variable : utiliser crochets. 


let guests=[];


// On peut créer un tableau en plaçant les élé voulu à l’intérieur


guests = ["Sarah Kate", "Audrey Simon", "Will Alexander"]; 


// On peut ensuite accéder aux élé de ce tableau par leur indice : 

// !! Il faut démarrer l’indice à 0. 


let firstGuest = guests[0]; // "Sarah Kate"
let thirdGuest = guests[2]; //"Will Alexander"
let undefinedGuest = guests[12]//undefined 

// Pratiquer la création d’un array

// Dans un exercice précédent, vous avez créé trois instances de la classe   `Episode`  dans des variables séparées. Dans cet exercice, vous allez regrouper ces variables dans un seul tableau (Array).

// 1. Créez un Array stocké dans une variable episodes, et peuplez-le avec les trois variables `firstEpisode` , `secondEpisode` et `thirdEpisode` .
// 2. Essayez de changer l'ordre dans lequel vous avez ajouté les épisodes, et regardez ce qu'il se passe lorsque vous rafraîchissez.

// N'oubliez pas, votre code ira entre les commentaires "===" sur l'exercice.


// [https://codepen.io/nicolaspatschkowski/pen/NWqJdBy](https://codepen.io/nicolaspatschkowski/pen/NWqJdBy)

// Utiliser des valeurs plutôt que des références

// En JS, les types primitifs tels que nombres, valeurs logiques et chaînes sont passés par **valeur.** Donc quand on fait : 


let numberOfGuest = 20;
let totalNumberofGuests = numberOfGuests; //20 


// c’est la valeur 20 qui est copiée par la nouvelle variable et aucun lien n’est maintenu entre les deux variables. 

// Les objets et tableaux sont passés par référence. Cela peut conduire à des comportements inattendus. Ex : 


let artistProfil = {
		name:"Tao Perkington",
		age:27,
		available:true
};

let allProfiles = [artistProfile];// nouveau tableau contenant l'objet ci-dessus
artistProfile.available = false;// modification de l'objet
console.log(allProfiles)//affiche {nom:"Tao Perkington", âge:27, disponible:false}


// Quand on utilise des tableaux et des objets, on passe des références aux objets plutôt que la valeurs des objets qu’ils contiennent. Les variables artisteProfile et allProfiles contiennent des références à l’objet et au tableau en mémoire. 

// cf :

// [Explaining Value vs. Reference in Javascript](https://codeburst.io/explaining-value-vs-reference-in-javascript-647a975e12a0)

// Travailler sur les tableaux

// Le comptage d’éléments

// La propriété lenghtd’un tableau indique le nombre d’élément qu’il contient : 


let guest = ["Will Alexander", "Sarah Kate", "Audrey Simon"];
let howManyGuests = guests.lenght; //3


// Il faut utiliser la notation dot pour accéder à la propriété lenght du tableau.  Dans bcp de cas on ne sait pas combien il y a d’élé dans le tableau. 

// L’ajout et la suppression d’éléments

// Pour ajouter un élé à la fin d’un tableau, utiliser sa méthode push :


guests.push("Tao Perkington"); // ajoute "Tao Perkington" à la fin du tableau guests


// Pour ajouter un élé au début : appliquer la méthode unshift : 


guests.unshift("Tao Perkington"); // "Tao Perkington" est ajouté au début du tableau guests


// Pour supprimer le dernier élé d’un tableau : méthode pop : 


guests.pop(); // supprime le dernier élé du tableau


// Pratiquer le travail avec les arrays

// Dans cet exercice, un Array vide   `episodes`  a déjà été créé.

// 1. En utilisant la méthode `push` du tableau `episodes` , ajoutez les épisodes un par un. Ajoutez deux fois le troisième épisode.
// 2. Avec la méthode `pop` , retirez l'épisode superflu du tableau `episodes` .
// 3. Créez une variable appelée `numberOfEpisodes` qui contient la `length` du tableau `episodes` .
// 4. Amusez-vous à ajouter et retirer des épisodes, et vérifiez que tout fonctionne correctement.

// [https://codepen.io/nicolaspatschkowski/pen/QWbodVr](https://codepen.io/nicolaspatschkowski/pen/QWbodVr)

