console.log("Salut")

//Rappel de la notion de propriété de classe

//C'est une variable interne à cette classe que l'on peut définir par défaut et faire évoluer au fur et à mesure de l'exécution de notre code. On peut utiliser "attribut" au lieu de "propriété"

//EX d'une classe qui représenterait un compte bancaire et que l'on appellerait BankAccount. On trouve comme ppté owner (permettant d'identifier le propriétaire du compte) et balance (connaître le montant disponible). Ainsi lorsqu'on crée une instance de BankAccount avec un propriétaire et un montant inital en argument, on pourra exploiter ces pptés pour afficher leurs valeurs, les utiliser pour des calculs, les modifier etc. 

//Tirer parti des classes avec des méthodes d'instance

//C'est une fonction faisant partie d'une classe, et qui agit sur une instance de cette classe. Reprenons BankAccount


class BankAccount {
    constructor (owner, balance) {
        this.owner = owner;
        this.balance = balance ; 
    }

    //On ajoute une méthode à la classe

    showBalance(){
        console.log(`Soldes ${this.balance} Eur`);
    }

    //Cette méthode utilise le mot clé this pour accéder à la propriété balance de l'instance et l'afficher sur la console avec une mise en forme suplémentaire. Donc on peut utiliser la notation dot sur l'instance newAccount pour appeler sa méthode showBalance() 

    //On peut aussi ajouter des méthodes capables de modifier les propriétés de l'instance.Dans ce cas, ajouter les méthode deposit() et withdraw() à la classe. Les deux ont besoin d'un paramètre amount. 


    deposit(amount){
        console.log(`Dépot de ${amount}€`);
        this.balance += amount;
        this.showBalance();
    }

    withdraw(amount) {
        if  (amount > this.balance){
            console.log("retrait refusé");
        } else {
            console.log(`Retrait de ${amount}`);
            this.balance -= amount;
            this.showBalance();
        }
    }

    //La methode deposit() affiche le montant du dépot sur la console, ajoute le montant au solde de l'instance, puis appelle la méthode showBalance() de l'instance, imprimant ainsi le nouveau solde sur la console. 

    //La methode withdraw() vérifie si le montant demandé est supérieurau solde actuel. Si c'est le cas, il refuse le retrait ; sinon il l'autorise, en soustrayant le montant du solde et en affichant le nouuveau solde sur la console.
    
}


//On peut à présent créer une instance de cette classe appelée newAccount

const newAccount = new BankAccount ("Will Alexander", 600); 

newAccount.showBalance();

//Pratiquez les méthodes instance

// Plutôt que d'utiliser une fonction pour calculer la note moyenne pour une série, on a décidé que la classe Show (ou "Série") devrait gérer les nouvelles notes automatiquement.

// Comme vous pouvez le constater, la classe   Show  contient un  Array  ratings  , pour les notes, qui est initialisé vide, et une propriété   averageRating  (note moyenne) de zéro.

// Déclarez une méthode instance dans la classe   Show  appelée addRating()  . Elle prendra une   rating  (la note), qui sera un nombre entre 1 et 5, comme paramètre.

// La méthode   addRating()  doit :

// ajouter la note reçue au tableau  ratings  de l'instance ;

// recalculer la valeur averageRating  de l'instance.


//Correction : https://codepen.io/nicolaspatschkowski/pen/poJYedM?editors=0110


//Découvrez les méthodes statiques

//Type spécial de méthode. Différente car elle n'est pas liée à une instance particulière de classe, mais à la classe elle-même. Il faut l'utiliser pour créer des méthodes utilitaires (helper) où on n'a pas besoin 'une instance d'une classe pour les utiliser. On peut s'en servir comme boite à outil de fonctions qu'on utilisera souvent. 

//Ex object Math : 

const randomNumber = Math.random(); //crée un  nombre aléatoire sur l'intervale [0,1]

const roundMeDown = Math.floor(495.996); // arrondit vers le bas  l'entier le plus proche : 495

//On n'a pas besoin de créer par new une instance de l'objet math : il suffit de les appeler sur l'objet Math global. 

//On peut créer nos propres méthodes statiques par le mot clé static !

class BePolite{
    
    static sayHello() {
        console.log("Hello!");
    }

    static sayHelloTo(namme) {
        console.log("Hello!" + namme + "!");
    }

    static add(firstNumber, secondNumber) {
        return firstNumber + secondNumber;
    }
}

BePolite.sayHello(); //imprime "Hello !"
BePolite.sayHelloTo("Will"); // imprime "Hello Will !"
const sum = BePolite.add (2,3); //sum = 5

//Cette méthode  : 
// imprime un message générique;
// accepte un argument et l'utilise pour créer un message;
//renvoie une valeur à partir des arguments que vous lui aez envoyez. 







