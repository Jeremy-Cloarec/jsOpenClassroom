// Découvrez les objets

// Les objets en JS sont écrits en **JSON (JavaScript Object Notation**). Ce sont des séries de **paires clés-valeurs** séparées par des virgules, entre des accolades. Les objets peuvent être enregistrées dans une variables. 


let myBook = {
	title: 'The Story of Tau',
	author: 'Will Alexander',
	numberOfPages:250,
	isAvailable:true
};


// Chaque clé est une chaîne (title, author, numberOfPages…) et les valeurs associées peuvent avoir tout types de données (nombre, chaînes, etc). 

// Avantage de construire des objets ⇒ permet de regrouper les attributs d’une *chose* unique à un même emplacement (livre, profil utilisateur ou configuration d’une application par ex. 

// Pratiquer la création d’un objet

// [https://codepen.io/nicolaspatschkowski/pen/qBdvRdw](https://codepen.io/nicolaspatschkowski/pen/qBdvRdw)

// ## Accéder aux données d’un objet

// Notation pointée (dot notation) :

// Une fois qu’un objet est enregistré dans une variable, on peut accéder à ses données : 


myBook = {
	title : "L'histoire de Tao",
	author : "Will Alexander", 
	numberOfPages : 250, 
	isAvailable : true
};

let bookTitle = myBook.title; //"L'Histoire de Tao"
let bookPages = myBook.numberOfPages // 250


// Il faut utiliser le nom de la variable qui contient l’objet, un point ( . ), puis le nom de la clé dont on souhaite récupérer la valeur. 

// La notation bracket (bracket notation)

// Pour accéder à un sous élément, on peut utiliser les brackets avec la valeur du sous élément : 


myBook = {
	title : "L'histoire de Tao",
	author : "Will Alexander", 
	numberOfPages : 250, 
	isAvailable : true
};
bookTitle = myBook["title"] ; //"L'Histoire de Tao"
bookPages = myBook["numberOfPages"] // 250


// On va pouvoir mettre entre bracket une variable qui contient en string le nom de la propriété que l’on souhaite atteindre : 


myBook = {
	title : "L'histoire de Tao",
	author : "Will Alexander", 
	numberOfPages : 250, 
	isAvailable : true
};
let propertyToAcess = "title";
bookTitle = myBook[propertyToAccess]//L'Histoire de Tao


// Pratiquer la récupération de valeurs depuis un objet

// [https://codepen.io/nicolaspatschkowski/pen/WNvmRRZ](https://codepen.io/nicolaspatschkowski/pen/WNvmRRZ)

// Manipulez des classes

// La classe est un modèle pour un objet dans le code. Elle permet de construire plusieurs objets du même type (appelés instances de la même classe).

// Il faut utiliser le mot clé class suivi par un nom, puis entourer le code par une  accolade.

// Pour cette classe, chaque Book doit avoir un titre, un auteur et un nombre de page. Pour cela on utilise un constructor.

// ⇒ Le constructor d’une classe est la fonction qui est appelée quand on crée une nouvelle instance avec le mot clé new.

// Il y a un un ensemble d’instruction à suivre à l’intérieur du constructor pour créé une instance de la classe **Book.** Pour attribuer le titre, l’auteur et le nombre de pages reçus à cette instance, utiliser le mot clé this et la notaton dot. 

// Ici le mot clé this fait référence à la nouvelle instance. Donc il utilise la notation dot pour attribuer les valeurs reçues aux clés correspondantes. 


class Book {
	constructor(title, author, pages) {
		this.title=title;
		this.author = author;
		this.pages = pages;
	}
}


// Maintenant que la classe est terminée, on peut créer des instances par le mot clé new. 


myBook = new Book("L'Histoire de Tao", "Will Alexander", 250);
//Cette ligne crée l'objet suivant :

// {
// 		title :"L'Histoire de Tao",
// 		author:"Will Alexander",
// 		pages:250
// }


// Avec une classe Book, on peut facilement créer de nouveaux objets Book. 

// Exo

// Consigne

// Maintenant que vous savez créer des classes, il est temps d'en profiter pour notre composant épisode. Cette fois-ci, il y a trois composants épisodes, donc la manière logique de procéder serait de créer une classe   `Episode`  , et puis en créer trois instances – une pour chaque épisode.
//  
//  1. Créez une classe `Episode` avec le mot clé `class` .
//  2. Créez un constructor pour votre classe `Episode` qui devra accepter trois arguments :
//  - `title` : le titre de l'épisode (string) ;
//  - `duration` : la durée de l'épisode (number) ;
//  - `hasBeenWatched` : si l'épisode a été regardé ou non (boolean).
//  
//  En utilisant le mot clé   `this`  , assignez les propriétés  `title`  ,  `duration`  et  `hasBeenWatched`  via un constructor .
//  
//  Avec le mot clé   `new`  , créez trois instances de la classe   `Episode`  :
//  
//  - `firstEpisode` ;
//  - `secondEpisode` ;
//  - `thirdEpisode` .
//  
// N'oubliez pas de passer des arguments appropriés à chaque instance.


// [https://codepen.io/nicolaspatschkowski/pen/qBdvRVW](https://codepen.io/nicolaspatschkowski/pen/qBdvRVW)