var output= document.getElementById("output");

// Check se una parola è Palindroma

function palindroma(word) {
    for(var i=0; i< word.length/2; i++){

        if(word[i] != word[word.length - 1 - i]){
            return output.innerHTML = "La parola " + word + " NON è palindroma";
        }      
    }
    return output.innerHTML = "La parola " + word + " è palindroma!";
}

var parola = prompt("Inserisci una parola");
palindroma(parola);

// Gioco a pari o dispari 

function getRandomNumber(min, max) {
    if(max >= min){
        var randomNumber = Math.floor(Math.random() * (max - min + 1)+min);
        return randomNumber;
    }   else{
        console.log("Il massimo è minore del minimo, scambio i numeri");
        return getRandomNumber(max, min);
    }
    
}

function pariDispari(input) {
    var generated = getRandomNumber(1,5);
    output.innerHTML += "<br> Il tuo numero: " + input + "<br> Numero del computer: " + generated;
    if((input + generated) % 2 == 0){
        output.innerHTML += "<br> La somma è PARI";
        return true;
    }   else{
        output.innerHTML += "<br> La somma è DISPARI";
        return false;
    }
}


var pari = prompt("Pari o Dispari?");
while(pari != "pari" && pari!="dispari"){
    pari = prompt("Non ho capito. Pari o Dispari?");
}

if(pari == "pari"){
    var pariBool = true;
}   else if(pari=="dispari"){
    var pariBool = false;
}

var numInput = parseInt(prompt("Inserisci un numero da 1 a 5."));
while(numInput < 1 || numInput > 5){
    numInput = parseInt(prompt("Numero non valido. Inserisci un numero da 1 a 5!"));
}

if(pariDispari(numInput) == pariBool){
    output.innerHTML += "<br> Hai vinto!";
}   else{
    output.innerHTML +="<br> Hai perso. Peccato!";
}