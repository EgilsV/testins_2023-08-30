// banka ar jautājumu kopumu
const jautajumi = [
  {
    jautajums: "Kas ir galvenais zemes satelīts?",
    atbilde: "Mēness"
  },
  {
    jautajums: "Cik ir 2+2?",
    atbilde: "4"
  },
  {
    jautajums: "Kā sauc lielāko okeānu?",
    atbilde: "Klusais okeāns"
  }
];
console.log(jautajumi[0].jautajums);
console.log(Object.keys(jautajumi[0]));
console.log(Object.keys(jautajumi[0])[0]);

// mainīgie, ar kuriem sasaistīt JS ar HTML
const jautajumsElements = document.getElementById("jautajums");
const atbildeInput = document.getElementById("atbilde");
const iesniegtButton = document.getElementById("iesniegt");

let esosaisJautajumsIndex = 0;
// funkcija ar mērķi parādīt jautājumu
function paradiJautajumu () {
  jautajumsElements.textContent = jautajumi[esosaisJautajumsIndex].jautajums;
}

// funkciju, kas pārbauda atbildi!
function parbauditAtbildi () {
  const lietotajaAtbilde = atbildeInput.value.trim().toLowerCase();
  const pareizaAtbilde = jautajumi[esosaisJautajumsIndex].atbilde.toLowerCase();
  if (lietotajaAtbilde === pareizaAtbilde) {
    window.alert(`Malacis, pareizi!`);
  } else {
     window.alert(`Šoreiz nepareizi!`);
  }
  // Šeit būs jādod nākamo jautājumu
  esosaisJautajumsIndex++;
  if(esosaisJautajumsIndex<jautajumi.length) {
    paradiJautajumu();
     atbildeInput.value = "";
   } else {
     jautajumsElements.textContent = "Game over!";
    atbildeInput.disabled = true;
    iesniegtButton.disabled = true;
  }
}

// klausītājs, lai sāktu strādāt
paradiJautajumu();
// parbauditAtbildi();
iesniegtButton.addEventListener("click", parbauditAtbildi);