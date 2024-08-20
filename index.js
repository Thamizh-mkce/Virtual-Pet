let hunger = 5;
let happiness = 5;

const hungerElement = document.getElementById("hunger");
const happinessElement = document.getElementById("happiness");
const petElement = document.getElementById("pet");
const feedButton = document.getElementById("feed");
const playButton = document.getElementById("play");
const resetButton = document.getElementById("reset");

feedButton.addEventListener("click", feedPet);
playButton.addEventListener("click", playWithPet);
resetButton.addEventListener("click", resetPet);
setInterval(updateStats, 3000);

function feedPet() {
  hunger = Math.max(0, hunger - 1);
  updatePetMood();
}

function playWithPet() {
  happiness = Math.min(10, happiness + 1);
  updatePetMood();
}

function resetPet() {
  hunger = 5;
  happiness = 5;
  updatePetMood();
}

function updateStats() {
  hunger = Math.min(10, hunger + 1);
  happiness = Math.max(0, happiness - 1);
  updatePetMood();
}

function updatePetMood() {
  hungerElement.textContent = hunger;
  happinessElement.textContent = happiness;

  if (hunger >= 8 || happiness <= 2) {
    petElement.classList.remove("happy");
    petElement.classList.add("sad");
  } else {
    petElement.classList.remove("sad");
    petElement.classList.add("happy");
  }
}
