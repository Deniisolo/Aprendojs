let Rock = "Rock";
let Paper = "Paper";
let Scissors = "Scissors";

function game(player, pc) {
  if (player === pc) {
    console.log("empate");
  } else if (
    (player === Paper && pc === Rock) ||
    (player === Rock && pc === Scissors) ||
    (player === Scissors && pc === Paper)
  ) {
    console.log(" Player Gananasteeeeesss");
  } else if (
    (pc === Paper && player === Rock) ||
    (pc === Rock && player === Scissors) ||
    (pc === Scissors && player === Paper)
  ) {
    console.log(" PC Gananasteeeeesss");
  } else {
    console.log("no valido :c");
  }
}
let player = Paper;
let pc = Scissors;
game(player, pc);
