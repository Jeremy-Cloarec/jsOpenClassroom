console.log("Salut")

//Comprenez les fonctions

//Une fonction est un bloc de code auquel vous attribuez un nom. Quand on l'appelle on exécute le code qu'elle contient. 

//EX

//On définit la fonction

function afficherDeuxValeurs (valeur1, valeur2) {
    console.log(`Première valeur : ` +  valeur1)
    console.log(`Deuxième valeur : ` + valeur2)
}

//On exécute la fonction

afficherDeuxValeurs (12, `Bonjour`)

//Lorsqu'on crée une fonction on indique la liste des variables dont elle a besoin pour effectuer son travail : on définit les paramètres de la fonction.

//Ensuite, à l'appelle de la fonction, on attribue des valeurs pour ses paramètres. Les valeurs sont les arguments d'appel. 

//Enfin la fonction peut donner une valeur de retour. Ex une fonction qui compte le nombre de mot dans une chaîne : 
// - le paramètre sera une chaîne dont on va compter les mots ;
// - l'argument sera toute chaîne attribuée à votre fonction quand vous l'appelez ; 
// - la valeur de retour sera le nombre de mots. 

//Pratiquer la note moyenne

//Calcul : 

//on fait la somme de toutes les valeurs (sommeValeurs) ;
//on compte le nombre de valeur que l'on a (nombreValeur) ;
//on calcule la moyenne : moyenne = sommeValeurs / nombreValeurs

//Parcourir un tableau : boucle for of

monTableau = ['1', '2', '3']

for (let elementDeTableau of monTableau) {
    console.log(elementDeTableau);
}

// Etapes

//1) choisir un nom pour le paramètre de la fonction. 

//2) créer une variable qui stockera la somme de tous les nombres du tableau. l'initier avec la valeur 0. 

//3) Sachant que le paramètre reçu est un tableau de nombre, il faut utiliser une boucle for pour ajouter chaque nombre du tableau à la variable somme.

//4) Créer une constante qui contient les résultats de la somme finale divisée par le nombre de valeurs dans le tableau reu en argument. 

//5) Faire en sorte ue la fonction retourne le résultat final.

//6) BONUS : La troisème série ne fonctionne pas car elle n'a pas encore reçu de notes.

//Correction : https://codepen.io/nicolaspatschkowski/pen/MWwxpvg

//EXPLICATION

const calculateAverageRating = (ratings) => {


if(ratings.length === 0){
    return 0;
}
// On souhaite faire la moyenne des valeurs présentes dans le tableau ratings. Mais dans le cas ou le tableau est vid, on retourne la valeur 0. La ppté length de rating permet de connaître la longueur du tableau. 

let sum = 0; 
    for (let rating of ratings) {
        sum += ratings
    }

//Ce code a pour objectif de faire la somme de tous les éléments du tableau. Pour cela on crée une variable sum avec comme valeur iniiale 0. Ensuite on parcourt le tableau ratings et pour chaque élément on aditionne la valeur avec la valeur de sum et le résultat est stocké dans sum. Une fois l'ensemble de ce code exécuté sum contient donc la somme de toutes les valeurs du tableau. 

return sum / ratings.length;

//sum : contient la somme de tous les éléments du tableau
//ratings.length : le nombre d'élément du tableau


}
