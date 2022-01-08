document.addEventListener("DOMContentLoaded", () => {
  //tell js every time we say grid that we are referring to any html element w/ the class of grid
  const gridWidth = 10
  const gridHeight = 20
  const gridSize = gridWidth * gridHeight

  const grid = document.querySelector(".grid");
  //select all divs in the grid, make an array from them so they each have a unique index # to refer to
  let squares = Array.from(document.querySelectorAll(".grid div"));
  console.log(squares);
  const width = 10;
  const startBtn = document.querySelector('start-button');
  const scoreDisplay = document.querySelector('#score');

//need to know every shape and every rotation of each
 //The Tetrominoes
 const lTetromino = [
    [1, gridWidth + 1, gridWidth * 2 + 1, 2],
    [gridWidth, gridWidth + 1, gridWidth + 2, gridWidth * 2 + 2],
    [1, gridWidth + 1, gridWidth * 2 + 1, gridWidth * 2],
    [gridWidth, gridWidth * 2, gridWidth * 2 + 1, gridWidth * 2 + 2]
  ]

  const zTetromino = [
    [0, gridWidth, gridWidth + 1, gridWidth * 2 + 1],
    [gridWidth + 1, gridWidth + 2, gridWidth * 2, gridWidth * 2 + 1],
    [0, gridWidth, gridWidth + 1, gridWidth * 2 + 1],
    [gridWidth + 1, gridWidth + 2, gridWidth * 2, gridWidth * 2 + 1]
  ]

  const tTetromino = [
    [1, gridWidth, gridWidth + 1, gridWidth + 2],
    [1, gridWidth + 1, gridWidth + 2, gridWidth * 2 + 1],
    [gridWidth, gridWidth + 1, gridWidth + 2, gridWidth * 2 + 1],
    [1, gridWidth, gridWidth + 1, gridWidth * 2 + 1]
  ]

  const oTetromino = [
    [0, 1, gridWidth, gridWidth + 1],
    [0, 1, gridWidth, gridWidth + 1],
    [0, 1, gridWidth, gridWidth + 1],
    [0, 1, gridWidth, gridWidth + 1]
  ]

  const iTetromino = [
    [1, gridWidth + 1, gridWidth * 2 + 1, gridWidth * 3 + 1],
    [gridWidth, gridWidth + 1, gridWidth + 2, gridWidth + 3],
    [1, gridWidth + 1, gridWidth * 2 + 1, gridWidth * 3 + 1],
    [gridWidth, gridWidth + 1, gridWidth + 2, gridWidth + 3]
  ]

  //Array to hold the tetromino collection. Each tetromino is an array of four arrays.
  const theTetrominoes = [lTetromino, zTetromino, tTetromino, oTetromino, iTetromino]

  //randomly choose a tetromino and its first position:
  let random = Math.floor(Math.random()*theTetrominoes.length);
  let currentPosition = 4;
  let currentRotation = 0;
  let currentTetromino = theTetrominoes[random][currentRotation] 
  
  //color in each square of the current tetromino 
  function draw() {
    currentTetromino.forEach(index => {
            squares[currentPosition + index].classList.add('tetromino');
      })
  }

  //remove
  function undraw() {
    currentTetromino.forEach(index => {
            squares[currentPosition + index].classList.remove('tetromino');
      })
  }

//we want the current tetromino to move down the grid one square every second. Use setinternal method
timerId = setInterval(moveDown, 1000)

function moveDown() {
    undraw()
    currentPosition += width;
    draw()
}




});

