const quantDezenasMania = document.querySelector("#valueMania");
const dezenasMania = document.querySelector("#dezenasMania");
const setValueMania = document.querySelector("#setValueMania");

const quantDezenasMega = document.querySelector("#valueMega");
const dezenasMega = document.querySelector("#dezenasMega");
const setValueMega = document.querySelector("#setValueMega");

const quantDezenasFacil = document.querySelector("#valueFacil");
const dezenasFacil = document.querySelector("#dezenasFacil");
const setValueFacil = document.querySelector("#setValueFacil");

//  Load Local Storage

if (localStorage.getItem("Lt-Mania")) {
  quantDezenasMania.value = localStorage.getItem("Lt-Mania");
  setValueMania.innerHTML = localStorage.getItem("Lt-Mania");
}
if (localStorage.getItem("Lt-Mega")) {
  quantDezenasMega.value = localStorage.getItem("Lt-Mega");
  setValueMega.innerHTML = localStorage.getItem("Lt-Mega");
}
if (localStorage.getItem("Lt-Facil")) {
  quantDezenasFacil.value = localStorage.getItem("Lt-Facil");
  setValueFacil.innerHTML = localStorage.getItem("Lt-Facil");
}

// print value at Dezenas for generate
function setMania() {
  setValueMania.innerHTML = quantDezenasMania.value;
  quantDezenasMania.addEventListener("input", (event) => {
    setValueMania.innerHTML = event.target.value;
  });

  return setValueMania.innerHTML;
}

function setMega() {
  setValueMega.innerHTML = quantDezenasMega.value;
  quantDezenasMega.addEventListener("input", (event) => {
    setValueMega.innerHTML = event.target.value;
  });

  return setValueMega.innerHTML;
}

function setFacil() {
  setValueFacil.innerHTML = quantDezenasFacil.value;
  quantDezenasFacil.addEventListener("input", (event) => {
    setValueFacil.innerHTML = event.target.value;
  });

  return setValueFacil.innerHTML;
}

// generate and print the Dezenas randomly and save in local storage
function generateDezenasMania() {
  let quantDezenas = quantDezenasMania;
  let setValue = setValueMania;
  let dezenas = dezenasMania;

  if (quantDezenas.value === "") {
    alert("Escolha quantas dezenas você quer gerar.");
    return;
  }

  const ltMania = [];
  for (let i = 0; i <= 99; i++) {
    ltMania.push(i);
  }

  let partialDezenas = [];
  while (partialDezenas.length < quantDezenas.value) {
    let verifyDezena = Math.floor(Math.random() * ltMania.length)
    .toString()
    .padStart(2, "0");
  if (verifyDezena) {
    parseInt(verifyDezena);
  }
  if (!partialDezenas.includes(verifyDezena)) {
    partialDezenas.push(verifyDezena);
  }
  sortedDezenas = partialDezenas.sort((a, b) => (a - b))
}
localStorage.setItem("Lt-Mania", setValue.innerHTML);
return (dezenas.value = sortedDezenas.join(" "));
}

function generateDezenasMega() {
  let quantDezenas = quantDezenasMega;
  let setValue = setValueMega;
  let dezenas = dezenasMega;

  if (quantDezenas.value === "") {
    alert("Escolha quantas dezenas você quer gerar.");
    return;
  }

  const ltMega = [];
  for (let i = 1; i <= 60; i++) {
    ltMega.push(i);
  }

  let partialDezenas = [];
  while (partialDezenas.length < quantDezenas.value) {
    let verifyDezena = Math.floor(Math.random() * ltMega.length + 1)
    .toString()
    .padStart(2, "0");
  if (verifyDezena) {
    parseInt(verifyDezena);
  }
  if (!partialDezenas.includes(verifyDezena)) {
    verifyDezena !== "00" ? partialDezenas.push(verifyDezena) : null;
  }
  sortedDezenas = partialDezenas.sort((a, b) => (a - b))
}
localStorage.setItem("Lt-Mega", setValue.innerHTML);
return (dezenas.value = sortedDezenas.join(" "));
}

function generateDezenasFacil() {
  let quantDezenas = quantDezenasFacil;
  let setValue = setValueFacil;
  let dezenas = dezenasFacil;
  console.log(quantDezenasFacil)

  if (quantDezenas.value === "") {
    alert("Escolha quantas dezenas você quer gerar.");
    return;
  }

  const ltFacil = [];
  for (let i = 1; i <= 25; i++) {
    ltFacil.push(i);
  }

  let partialDezenas = [];
  while (partialDezenas.length < quantDezenas.value) {
    let verifyDezena = Math.floor(Math.random() * ltFacil.length + 1)
      .toString()
      .padStart(2, "0");
    if (verifyDezena) {
      parseInt(verifyDezena);
    }
    if (!partialDezenas.includes(verifyDezena)) {
      verifyDezena !== "00" ? partialDezenas.push(verifyDezena) : null;
    }
    sortedDezenas = partialDezenas.sort((a, b) => (a - b))
  }
  localStorage.setItem("Lt-Facil", setValue.innerHTML);
  return (dezenas.value = sortedDezenas.join(" "));
}
