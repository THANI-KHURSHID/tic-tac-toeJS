var squares = document.querySelectorAll(".block");
let Game = (function () {
  var count = 0;
  function putYourMark() {
    for (let j = 0; j < squares.length; j++) {
      squares[j].addEventListener("click", () => {
        count++;
        if (count % 2 === 0 && count <= 9) {
          squares[j].textContent = "X";
        } if(count % 2 !== 0 && count <= 9) {
          squares[j].textContent = "O";
        }
      });
    }
  }
  function start() {
    putYourMark();
  }
  return { start };
})();
let gameBoard = (function () {
  var board = ["X", "O", "O", "O", "X", "O", "O", "O", "X"];
  function print() {
    for (let i = 0; i < squares.length; i++) {
      squares[i].textContent = board[i];
    }
  }
  return { print };
})();
//gameBoard.print();
Game.start();
//Making player factory RN.
//CAn check for textContent to check for already placed mark.
function Player() {}
