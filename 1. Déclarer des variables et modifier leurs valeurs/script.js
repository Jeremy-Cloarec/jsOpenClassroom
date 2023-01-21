//Créer une variable

//Variable est un contenant utilisé pour enregistrer et manipuler des données (nom d’utilisateur, nombre de billet, disponibilité de certains produits…). 

// Valeur: données placées dans une variable. 

// On attribue un nom à notre variable qui doit indiquer ce qui se trouve à l’intérieur. Convention utilisée : **camel case**. 

// Ex : 

let numberOfDog = 4; 

let nuberOfCats = 2;

// → On crée deux variables auxquelles on attribue une valeur. 

// Modifier la valeur d’une variable

// On peut simplement la réaffecter sans let car la variable a déjà été déclarée. 

// Ex :

let numberOfCat = 3;

numberOfCat= 4;

// Opérateurs arithmétiques - travail sur des nombres

// Addition et soustraction

let totalCDs = 67;
let totalVinyls = 34;
let totalMusic = totalCDs + totalVinyls;


totalCDs = 67;
totalVinyls = 34;
totalMusic = totalCDs - totalVinyls;


// Pour ajouter ou soustraire un nombre d’une variable, vous pouvez utiliser les opérateurs += et -=

let cookieInJar = 10;
cookieInJar -= 2; //il reste 8 cookies
cookieInJar += 12; //Il y a maintenant 20 cookie dans la boite


// On peut utiliser ++ ou - - pour ajouter ou soustraire 1 (incrément / décrément). 


let numberOfLikes = 10;
numberOfLikes++; //= 11
numberOfLikes--;// On revient à 10


// Multiplication et division


let CostPerProduct = 20;
let numberOfProducts = 5;
let totalCost = costPerProduct * numberOfProducts;
let averageCostPerProduct = totalCost / numberOfProduct; 

let numberOfCats = 2;
numberOfCat *= 6; //vaut maintenant 2*6 = 12
numberOfCat /= 3; //vaut maintenant 12/3 = 4


// Exercice CodePen

// https://codepen.io/nicolaspatschkowski/pen/jOPJWJO](https://codepen.io/nicolaspatschkowski/pen/jOPJWJO)

// Mutabilité des valeurs

// Une variable est de base mutable. 

// Les constantes

// Variables qui ne seront pas mutables. On donne une valeur de départ et on ne pourra plus la changer par la suite. Si on change la valeur de cette variable, javascript retournera une erreur. 

// Exercice CodePen

// https://codepen.io/nicolaspatschkowski/pen/XWbGXjb