// Qu’est-ce qu’un type ?

// Type : genre de donnée qu’elle enregistre. Il y en a trois :

// - number ;
// - string (chaîne de caractères) ;
// - boolean (valeur logique).

// Type primitif :

// Brique de chaque structure de données 

// Number

// Peuvent être positives ou négatives. Des nombres entiers (1,2,3) ou décimaux(1,4 ; 69,6 etc.). 

// Valeurs logiques (booleans)

// Ne peuvent avoir que 2 valeurs : true / false

let userIsSignedIn = true;
let userIsAdmin = false;

// Chaînes de caractères (string)

// Façon d’enregistrer du texte dans des variables JavaScript. On peut enregistrer n’importe quelle chaîne de caractère, allant d’une seule lettre à un très grand nombre de lettres (plus de 134 millions). 

// Variable de ce type sont encadrées par des guillemets simples ou doubles.

let firstName = "Will";
let lastName = 'Alexander';

// Les chaînes peuvent être concaténées (ajoutées à la fin l’une de l’autre ) par l’opérateur + 

let wholeName = firstName + " " + lastName; // valeur : "Will Alexander"

// Simplification : string interpolation ⇒ On écrit du texte encadrée par le signe ‘ et si on veut injecter une variable dans ce code on utilise l’expression ${maVariable}. 

const myName = 'Alexander';
const salutation = `Bienvenue sur mon site ${myName}!`;
console.log(salutation); //retournera bienvenue sur mon site Alexander

// [https://codepen.io/nicolaspatschkowski/pen/YzXgyOG](https://codepen.io/nicolaspatschkowski/pen/YzXgyOG)

// Techniquement : 3 autres types de données primitifs dans JavaScript : 

// - null
// - undefined
// - symbol (pas dans ce cours)