let cijfer = prompt("Voer een cijfer in voor de ruit");
let lijstje = "";
for (let getallen = 1; getallen <= cijfer; getallen++){
    lijstje += getallen;
    document.getElementById("antwoord").innerText += lijstje +'\n';
    lijstje = getallen === parseInt(cijfer) ? lijstje += "" : lijstje += "-";
}
for (let getallen = cijfer; getallen >= 1; getallen--) {
    lijstje = lijstje.replace(getallen, '').split("").reverse().join("").replace('-', '').split("").reverse().join("");
    document.getElementById("antwoord").innerText += lijstje + '\n';
}
