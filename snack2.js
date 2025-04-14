// #### Snack2

// Creare un array di oggetti di squadre di calcio.
// Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l'unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà "punti" fatti e "falli subiti".
// Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
const serieASquad = [
  {
    name: "napoli",
    points: 0,
    reicevedfaouls: 0,
  },
  {
    name: "inter",
    points: 0,
    reicevedfaouls: 0,
  },
  {
    name: "juventus-gabinetto",
    points: 0,
    reicevedfaouls: 0,
  },
  {
    name: "milan",
    points: 0,
    reicevedfaouls: 0,
  },
  {
    name: "roma",
    points: 0,
    reicevedfaouls: 0,
  },
  {
    name: "lazio",
    points: 0,
    reicevedfaouls: 0,
  },
  {
    name: "parma",
    points: 0,
    reicevedfaouls: 0,
  },
  {
    name: "empoli",
    points: 0,
    reicevedfaouls: 0,
  },
  {
    name: "bologna",
    points: 0,
    reicevedfaouls: 0,
  },
];

const randomNumber = Math.floor(Math.random() * 100) + 1;
console.log(randomNumber, "numero randomico");

for (let i = 0; i < serieASquad; i++) {
  const currentSquad = serieASquad[i];
  currentSquad.points.push(randomNumber);
  currentSquad.reicevedfaouls.push(randomNumber);
  console.log(currentSquad);
}
