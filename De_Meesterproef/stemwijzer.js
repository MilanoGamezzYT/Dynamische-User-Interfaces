const stemgedeelte = document.getElementById("stemgedeelte");
const partijen = [];

stemgedeelte.addEventListener("click", function(event) {
  if (event.target.classList.contains("partij-button")) {
    const partijNaam = event.target.textContent;
    const partijIndex = partijen.findIndex(partij => partij.naam === partijNaam);
    partijen[partijIndex].stemmen++;
  }
});

document.getElementById("stemmen-tellen").addEventListener("click", function() {
  stemgedeelte.innerHTML = "";
  partijen.sort((a, b) => b.stemmen - a.stemmen);

  const partijenMetMeesteStemmen = partijen.filter(partij => partij.stemmen === partijen[0].stemmen);

  let uitslagTekst = "<h2>Uitslag:</h2>";
  partijen.forEach(partij => {
    uitslagTekst += `<p>${partij.naam}: ${partij.stemmen} stemmen</p>`;
  });
  uitslagTekst += `<p>Partij met de meeste stemmen: ${partijenMetMeesteStemmen.map(partij => partij.naam).join(", ")}</p>`;

  const uitslagDiv = document.createElement("div");
  uitslagDiv.innerHTML = uitslagTekst;
  stemgedeelte.appendChild(uitslagDiv);
});

function addPartij(naam) {
  const partij = {
    naam: naam,
    stemmen: 0
  };
  partijen.push(partij);

  const button = document.createElement("button");
  button.classList.add("partij-button");
  button.textContent = naam;
  stemgedeelte.appendChild(button);
}

addPartij("VVD");
addPartij("D66");
addPartij("PVV");
addPartij("CDA");
addPartij("SP")
addPartij("PvdA")
addPartij("BBB")
