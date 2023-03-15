let cijfer = parseInt(prompt("Voer een cijfer in"));
let ruit = "";

for(let i = 0; i < cijfer; i++){
    let rij = "";
    for(let x = 1; x <= i; x++){
        rij += x + "-";
    }
    ruit += rij.slice(0, -1) + "\n";
}

for(let i = cijfer; i > 0; i--){
    let rij = "";
    for(let x = 1; x <= i; x++){
        rij += x + "-";
    }
    ruit += rij.slice(0, -1) + "\n";
}

element = document.getElementById("antwoord")
element.innerText = ruit;