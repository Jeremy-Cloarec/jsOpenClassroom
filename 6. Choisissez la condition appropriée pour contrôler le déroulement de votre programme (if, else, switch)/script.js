// Choisissez la condition appropriée pour contrôler le déroulement de votre programme (if, else, switch)

// Notion de déroulement de programme. Terme général qui décrit l’ordre dans lequel s’exécutent les lignes de code. Certaines lignes lues une fois, d’autres plusieurs fois, d’autres ignorées, selon la situation. 

// Appréhendez les instructions if/else

// Instruction conditionnelle : vérifie si certaines condition sont réunies et réagit en conséquence.

// Utiliser des valeurs boolean


if (myBoolean){
//réaction à la valeur vraie de myBoolean
} else {
//réaction à la valeur faux de myBoolean
}



let UserLoggedIn = true;
if (UserLoggedIn) {
	console.log("Utilisateur connecté!");
} else {
		console.log("Alerte, intrus !");
}


// Utilisez des expressions

// On peut utiliser des **expressions de comparaison** qui comparent des valeurs entre elles. 

// Les expressions de comparaison permettent de comparer deux valeurs par les opérateurs suivants : 

// - < inférieur à ;
// - < = inférieur ou égale ;
// - = = égal à ;
// - > supérieur à ;
// - ! = différent de.

const numberOfSeats = 30;
const numberOfGuest = 25;
if (numberOfGuests < numberOfSeats) {
//autoriser plus d'invités
} else {
// ne pas autoriser de nouveaux invités
}


// On peut **chaîner** les instructions **if** / **else** pour réagir à des conditions potentielles multiples : 


if (numberOfGuests == numberOfSeats) {
// tous les sieges sont occupés
} else if (numberOfGuests < numberOfSeats) {
//autoriser plus d'invités
} else {
    // ne pas autoriser de nouveaux invités
}

// Le chaînage d’instruction permet de prévoir différents résultats en fonction des différentes situations. 

// Pratiquer les conditions if/else

// Dans cet exercice, nous allons mettre en place un contrôle de l'âge pour afficher un contenu. Sur notre page, il y a un input text qui demande de saisir votre âge, et un bouton pour valider. Si on est majeur, donc 18 ans et plus, on affiche le message autorisé, sinon on affiche une alerte disant que l’on n’est pas autorisé.


// Pour réaliser cet exercice, voici comment vous allez procéder :

// 1. Vous allez lire le code JavaScript, qui est intégralement commenté, pour bien comprendre à quoi sert chaque élément, et surtout les variables à votre disposition. Il y a sûrement des éléments que vous ne comprenez pas car vous n’avez pas encore vu comment manipuler du HTML en JavaScript, mais ici vous n’avez qu’à exploiter les variables et fonctions déjà codées.2. Vous allez écrire une condition if/else entre les lignes 34 et 38 qui appellera la fonction refuser() si l'âge saisi correspond à un mineur, et la fonction valider() s’il est majeur.
// 3. Attention, l'âge de la majorité a été stocké dans la variable ageMajorite, donc il faut utiliser cette variable dans la condition.

// Une fois que vous aurez codé la bonne condition, vous pourrez enchaîner les tests en saisissant différents âges et en validant.


// [https://codepen.io/quentin-laurent/pen/ExNdMQb](https://codepen.io/quentin-laurent/pen/ExNdMQb)

// Découvrez l’égalité : == ou ===

// En JS, deux façon de vérifier si deux valeurs sont égales : 

// - égalité **simple** vérifie la **valeur** mais pas le type. Donc ceci renvoie la valeur true :


5 == "5"


// - par contre l’égalité **stricte** renvoie à la fois la **valeur** et le **type**. Donc ceci renvoie la valeur false car on compare un number à une string.


5 === "5"

// De même, il y a deux opérateurs d’inégalité : =! et ==! avec la même distinction. 

// Comprenez les conditions multiples

// Dans certaines situations, vous souhaitez vérifier plusieurs conditions pour un même résultats : par ex dans la même instruction if. Pour cela il existe des opérateurs logiques. 

// - && - ET logique - pour vérifier si  deux conditions sont **toutes les deux vraie** ;
// - || - OU logique - pour vérifier **si au moins une condition** est vraie ;
// - ! - NON logique - pour vérifier **si une condition n’est pas vraie.**