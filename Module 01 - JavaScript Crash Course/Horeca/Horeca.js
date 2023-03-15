let drankjes = ["fris", "bier", "wijn"];
let bestelling = {};
let kosten = {};
let totaalPrijs = 0;
let vraag;
let aantal;
let meer = true;

const prijzen = {
    fris: 3.20,
    bier: 3.50,
    wijn: 4.75
};

function drankjeToevoegen(drankje, aantal){
    if (Object.keys(bestelling).includes(drankje)){
        bestelling[drankje] += aantal;
    } else{
        bestelling[drankje] = aantal;
        
    }   
    return bestelling;
}

function bon(){
    let bon = "";
    for (let drank in bestelling) {
        if (bestelling[drank] > 0) {
        let prijsSoortDrank = bestelling[drank]*prijzen[drank];
        bon += bestelling[drank] + "x " + drank + " | " + "€" + prijsSoortDrank.toFixed(2) + "<br>" 
        totaalPrijs += prijsSoortDrank
        }
    }
    document.getElementById("Bonnetje_tekst").innerHTML = "Producten:";  
    document.getElementById("Dranken").innerHTML = bon;
}
  
while(meer){
    vraag = prompt("Wat wilt u bestellen? Type 'Stop' om te stoppen. U heeft keuze tussen bier, fris en een wijntje").toLowerCase()
    if (vraag == "stop"){
        meer = false;
    }else if (drankjes.includes(vraag)){
        aantal = parseInt(prompt("Hoeveel van " + vraag + " wilt u hebben?"));
        if (isFinite(aantal)){
            drankjeToevoegen(vraag, aantal);
        } else{
            alert("Dat is geen getal! ");
        }
    } else{
        alert("Die ken ik niet! ");
    }
}
if (!meer){
    bon();
    document.getElementById("Bonnetje").innerHTML = "<b>Totaal prijs: " + "€" + totaalPrijs.toFixed(2);
    document.getElementById("Groet").innerText = "Graag tot ziens, en een fijne dag verder!";
}