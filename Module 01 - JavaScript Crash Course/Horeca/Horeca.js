const dranken = {"bier": 3.50, "fris": 3.20 , "wijn": 4.75};
const bonnetje = {};

let totale_prijs = 0;
let stop = false;
let userInput;
let productAmount = NaN;
let amountNaN = true;

while (!stop) {
    userInput = prompt(`Wat zou u willen bestellen? (Type 'stop' om de bestelling te beëndigen.) Deze dranken zijn op voorraad: ${Object.keys(dranken)}`);

    if (userInput === "stop") {
        stop = true;
    }
    else {
        if (!(userInput in dranken)) {
            alert(`Momenteel is ${userInput} uitverkocht. Sorry voor dit ongemak.`);
        }
        else {
            while (amountNaN) {
                productAmount = parseInt(prompt(`Hoeveel ${userInput} wilt u bestellen?`));
                if (!isNaN(productAmount)) {
                    amountNaN = false;
                }
            }

            amountNaN = true;

            if (userInput in bonnetje) {
                bonnetje[userInput] += productAmount;
            }
            else {
                bonnetje[userInput] = productAmount;
            }

            totale_prijs += productAmount * dranken[userInput];
        }
    }
}

for (const [key, value] of Object.entries(bonnetje)) {
    const display = `${value}x ${key} - €${(value * dranken[key]).toFixed(2)}`
    document.getElementById("Bonnetje").innerText = "Uw Bonnetje - Bedankt voor het bestellen!";
    document.getElementById("Dranken").innerText += display + '\n';
}

if (totale_prijs > 0) {
    document.getElementById("Totale_prijs").innerText = "Totaal: €" + totale_prijs.toFixed(2);
}




