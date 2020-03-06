
var numberOfDices = prompt("Combien de dés voulez vous lancer?");
var index = 0;
function play() {
    
    // création du dé
    var diva = document.createElement("div");
    var divp = document.querySelector("div > #player");
    var div = document.querySelector("div");
    diva.classList.add("dice");
    divp.appendChild(diva);
    

    //fonction lancer le dé
    function getRandom() {  
        return Math.round(Math.random() * (6-1)) + 1;
    }

    function roll() {
        var randomNumber = getRandom();
        if (randomNumber===2) {
        diva.style.backgroundPosition = "500px";
    }
    else if (randomNumber===3) {
    diva.style.backgroundPosition = "400px";
    }
    else if (randomNumber===4) {
    diva.style.backgroundPosition = "300px";
    }
    else if (randomNumber===5) {
    diva.style.backgroundPosition = "200px";
    }
    else if (randomNumber===6) {
    diva.style.backgroundPosition = "100px";
    }
    }

    roll();
    index++;
   
}
 while (index != numberOfDices) {
        play();
    }
