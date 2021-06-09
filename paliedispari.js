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

function pariDispari(pari, input) {
    var generated = Math.floor(Math.random() *5) +1;
    output.innerHTML += "<br> Il tuo numero: " + input + "<br> Numero del computer: " + generated;
    if((input + generated) % 2 == 0){
        output.innerHTML += "<br> La somma è PARI";
        if(pari){
            return output.innerHTML += "<br> Hai vinto!";
        }   else{
            return output.innerHTML += "<br> Ha vinto il computer. Peccato!";
        }
    }   else{
        output.innerHTML += "<br> La somma è DISPARI";
        if(!pari){
            return output.innerHTML += "<br> Hai vinto!";
        }   else{
            return output.innerHTML += "<br> Ha vinto il computer. Peccato!";
        }
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

pariDispari(pariBool, numInput);