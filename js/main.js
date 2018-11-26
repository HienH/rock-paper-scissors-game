// Generate random number 
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//////  global variables///////
let yourMove = ""
let compMove = ""
let play = 0
let win = 0
let draw = 0
let lose = 0
let suddendeath = 0

///////////YourMove section ///////////////
function clickRock() {
  document.getElementById('yourmove').innerHTML = "Rock";
  document.getElementById('yourImage').src = "https://vignette.wikia.nocookie.net/newdcmovieuniverse/images/6/68/Dwayne_Johnson_-_1.png/revision/latest?cb=20171108223907";
  yourMove = "Rock";
  compSelect();
  results()
}

function clickScissors() {
  document.getElementById('yourmove').innerHTML = "Scissors";
  document.getElementById('yourImage').src = "https://images-na.ssl-images-amazon.com/images/I/41BYN90D0GL.jpg";
  yourMove = "Scissors"

  compSelect();
  results();
}

function clickPaper() {
  document.getElementById('yourmove').innerHTML = "Paper";
  document.getElementById('yourImage').src = "https://i.gifer.com/7XJm.gif";
  yourMove = "Paper"

  compSelect();

  results()
}

//////////compMove function /////////////////////////
function compSelect(yourMove) {
  choice = ["Rock", "Paper", "Scissors"]

  let num = getRandomInt(0, 2)
  compMove = choice[num];
  document.getElementById('compmove').innerHTML = compMove;
  switch (compMove) {
    case "Rock":
      document.getElementById('compImage').src = "https://i.pinimg.com/originals/75/d2/63/75d263a773c7550a49d5c37041b66267.gif";
      break;
    case "Paper":
      document.getElementById('compImage').src = "http://gif-finder.com/wp-content/uploads/2016/11/Piece-of-paper-goes-skydiving.gif";
      break;
    case "Scissors":
      document.getElementById('compImage').src = "https://media.giphy.com/media/M7ZLjbUplnd3q/giphy.gif";
  }
  play++

}

//////////// Comparing and result function //////////////////
function results() {
  verdict = "LOSE"


  if (yourMove == "Paper" && compMove == "Rock") {
    verdict = "WIN"
    win++

  }
  else if (yourMove == "Rock" && compMove == "Scissors") {
    verdict = "WIN"
    win++
  }
  else if (yourMove == "Scissors" && compMove == "Paper") {
    verdict = "WIN"
    win++
  }
  else if (yourMove == compMove) {
    verdict = "DRAW"
    draw++
  }
  else if (verdict == "LOSE") {
    lose++

  }

  document.getElementById('results').innerHTML = "Results:";
  document.getElementById('plays').innerHTML = "PLAYS: " + play;
  document.getElementById('wins').innerHTML = "WINS: " + win;
  document.getElementById('lose').innerHTML = "LOSE: " + lose;
  document.getElementById('draw').innerHTML = "DRAWS: " + draw;
  document.getElementById('verdict').innerHTML = verdict;

  



  if (play == 3) {
    if (win > lose) {
      $('#winModal').modal("show")
    }
    if (win < lose) {
      $('#loserModal').modal('show');
    }
    if (win == lose) {
      $('#drawModal').modal('show');

    }

  }

}

/////////////reset function//////////////////
function reset() {
  play = 0
  win = 0
  lose = 0
  draw = 0
  document.getElementById('plays').innerHTML = "PLAYS: " + 0;
  document.getElementById('wins').innerHTML = "WINS: " + 0;
  document.getElementById('lose').innerHTML = "LOSE: " + 0;
  document.getElementById('draw').innerHTML = "DRAWS: " + 0;
  document.getElementById('verdict').innerHTML = "";

}


// function colorChangeWin(){
//   document.getElementById("verdict").style.backgroundColor = "#228B22	"; // forecolor
//   document.getElementById("verdict").style.color="white";

// }
function colorChangeLose(){
  document.getElementById("verdict").style.backgroundcolor = "##e50000"; // forecolor
}
// }
console.log("hello")