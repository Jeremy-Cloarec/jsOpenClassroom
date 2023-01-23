console.log("Salut")

//for : pour savoir "combien de fois"

//ex: on doit faire embarquer 10 passagers : on les embarque 1/1 jusqu'à 10. 

const numberOfPassengers = 10;
for (let i = 0; i <numberOfPassengers; i++){
    console.log("Passager embarqué !")
}

// i = variabl d'indice : sert de compteur pour le nombre d'execution de la boucle. Démarre à 0 car on n'a pas encore parcouru la boucle. 

// deuxième commande : condition d'exécution de la boucle. Dès qu'elle s'évalue comme false, on quitte  la boucle. 

//troisième commande : demande à la boucle for d'incrémenter  i (ajouter 1). 

// ! js exécute la boucle avant tout. 

//Travaille sur des tablleaux : for...of et for...in

//Pour parcourir un tableau : 

//Ancienne méthode : 
// - utiliser for avec la propriété lenght. Ex avec un tableau appelé passengers : 

let passengers = [`Tom`,`Eva`,`Claire`,`Scotty`]
console.log(passengers);

for (let i = 0; i < passengers.length; i++){
    console.log("Passagers embarqués");
}
//Mais il y a deux façons de plus facile de parcourir en boucle des tableaux. 

//La boucle for...in

// => plus facile à lire. Effectue le travail d'itération

for (let i in passengers) {
    console.log("" + `Embarquement du passager ${passengers[i]} `);
}

// i démarre à 0 et s'incrémente  à chaque boucle. 

//La boucle for...of

//Pour les cas où l'indice précis d'un élément n'est pas nécessaire pendant l'itération : 

for (let passenger of passengers){
    console.log(`Embarquement du passager ${passenger}`);
}

//Plus lisible, on reçoit les éléts dans l' ordre

const passengersBis = [
    {
        name: "Will Alexander",
        ticketNumber: 209542
    },
    
    {
        name: "Sarah Kate",
        ticketNumber: 169336
    },
    
    {
        name: "Audrey Simon",
        ticketNumber: 779042
    },
    
    {
        name: "Tao Perkington",
        ticketNumber: 703911
    }
]

for (let passenger of passengersBis) {
    console.log('Embarquement du passager ' + passenger.name + ' avec le ticket numéro ' + passenger.ticketNumber);
}

//Pratiquer les boucles for

//Correction : http://127.0.0.1:5502/7.%20Utilisez%20la%20bonne%20boucle%20pour%20r%C3%A9p%C3%A9ter%20les%20t%C3%A2ches%20(for,%20while)/exo%20Code%20Pen/index.html

//La boucle While

//Cette boucle vérifie si une condition est vraie. Si c'est le cas, elle se poursuit, sinon elle s'arrête. 

//Ex : on a des variables représentant le nombre de sièges restants et le nombre de passagers restants. On souhaite continuer l'embarquement juqu'à épuisement du nombre de sièges ou de passagers. 

let seatsLeft = 10;
let passengerStillBoard = 8;
let passengersBoarded = 0;

while (seatsLeft > 0 && passengerStillBoard > 0){
    passengersBoarded++; //un passager embarque
    passengerStillBoard--; //donc il y a un passager de moins à embarquer
    seatsLeft--; // et un siège de moins
}

console.log(passengersBoarded); // 8 car il y a 8 passagers pour 10 sièges

// Cette boucle poursuit son exécution jusqu'à ce que l'un des nombres seatsLeft et passengersStillToBoard atteigne 0, puis elle se termine. 

