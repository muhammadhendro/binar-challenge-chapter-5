let playerbatu = document.getElementById("player-batu");
let playerkertas = document.getElementById("player-kertas");
let playergunting = document.getElementById("player-gunting");
let combatu = document.getElementById("com-batu");
let comkertas = document.getElementById("com-kertas");
let comgunting = document.getElementById("com-gunting");
let el2 = document.getElementById("vs");
function pick(id) {
  let el = document.getElementById(id);

  el.classList.add("player-select");

  playerbatu.style.pointerEvents = "none";
  playerkertas.style.pointerEvents = "none";
  playergunting.style.pointerEvents = "none";
  console.log(id);
  com = Math.floor(Math.random() * (3 - 1 + 1) + 1);
  if (com == 1) {
    let el = document.getElementById("com-batu");
    el.classList.add("com-select");
  } else if (com == 2) {
    let el = document.getElementById("com-kertas");
    el.classList.add("com-select");
  } else {
    let el = document.getElementById("com-gunting");
    el.classList.add("com-select");
  }

  console.log("com pick " + com);
  if (id == "player-batu") {
    if (com == 1) {
      el2.classList.add("result");
      el2.innerHTML = "DRAW";
    } else if (com == 2) {
      el2.classList.add("result");
      el2.innerHTML = "COM WIN";
    } else {
      el2.classList.add("result");
      el2.innerHTML = "PLAYER WIN";
    }
  } else if (id == "player-kertas") {
    if (com == 1) {
      el2.classList.add("result");
      el2.innerHTML = "PLAYER WIN";
    } else if (com == 2) {
      el2.classList.add("result");
      el2.innerHTML = "DRAW";
    } else {
      el2.classList.add("result");
      el2.innerHTML = "COM WIN";
    }
  } else {
    if (com == 1) {
      el2.classList.add("result");
      el2.innerHTML = "COM WIN";
    } else if (com == 2) {
      el2.classList.add("result");
      el2.innerHTML = "PLAYER WIN";
    } else {
      el2.classList.add("result");
      el2.innerHTML = "DRAW";
    }
  }
}

function again() {
  playerbatu.style.pointerEvents = "auto";
  playerkertas.style.pointerEvents = "auto";
  playergunting.style.pointerEvents = "auto";
  playerbatu.classList.remove("player-select");
  playerkertas.classList.remove("player-select");
  playergunting.classList.remove("player-select");
  combatu.classList.remove("com-select");
  comkertas.classList.remove("com-select");
  comgunting.classList.remove("com-select");
  el2.classList.remove("result");
  el2.classList.add("result-reset");
  el2.innerHTML = "VS";
}
