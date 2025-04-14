// #### Snack 1

// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore.
const bicycleRunning = [
  {
    // i = 0
    name: "colnago",
    weight: 30,
  },
  {
    // i = 1
    name: "triban",
    weight: 27,
  },
  {
    name: "rockrider",
    weight: 23,
  },
];
console.log(bicycleRunning[2]);

// Oggetto che mi memorizzerà la bici con il peso minore
let bicycleWeightMin = bicycleRunning[0];

for (let i = 1; i < bicycleRunning.length; i++) {
  const currentBicycleRunning = bicycleRunning[i];
  if (currentBicycleRunning.weight < bicycleWeightMin.weight) {
    bicycleWeightMin = currentBicycleRunning;
  }
}

console.log(bicycleWeightMin);
