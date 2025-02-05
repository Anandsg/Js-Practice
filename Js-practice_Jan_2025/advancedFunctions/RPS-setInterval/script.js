// getting score from local storage
// console.log(JSON.parse(localStorage.getItem("score")));
// JSON.parse used to convert string back to objects

let score = JSON.parse(localStorage.getItem("score")) || {
  wins: 0,
  losses: 0,
  ties: 0,
};

updateScoreElement();

// to avoid null error when we load the page after clearing from local storage
/* if (!score) {
        score = {
          wins: 0,
          losses: 0,
          ties: 0,
        };
      } */

// SetInterval
let isAutoPlaying = false;
let intervalId;

function autoPlay() {
  if (!isAutoPlaying) {
    // setinterval returns a number like an id and we are storing it in variable intervalId
    intervalId = setInterval(function () {
      // console.log(intervalId);
      const playerMove = pickComputerMove();
      // console.log(playerMove);
      playGame(playerMove);
    }, 2000);
    isAutoPlaying = true;
  } else {
    // console.log(intervalId);
    clearInterval(intervalId);
    isAutoPlaying = false;
  }
}

// event listener
document.querySelector(".js-rock-button").addEventListener("click", () => {
  playGame("rock");
});

document.querySelector(".js-paper-button").addEventListener("click", () => {
  playGame("paper");
});

document.querySelector(".js-scissor-button").addEventListener("click", () => {
  playGame("scissor");
});

document.querySelector(".js-reset-button").addEventListener("click", () => {
  diplayScore();
  updateScoreElement();
});

document.querySelector(".js-auto-play-button").addEventListener("click", () => {
  autoPlay();
});

function playGame(playerMove) {
  const computerMove = pickComputerMove();
  let result = "";

  if (playerMove === "rock") {
    if (computerMove === "rock") {
      result = "Tie.";
    } else if (computerMove === "paper") {
      result = "You lose. play again!";
    } else if (computerMove === "scissor") {
      result = "You win 🎉";
    }
  } else if (playerMove === "paper") {
    if (computerMove === "paper") {
      result = "Tie.";
    } else if (computerMove === "scissor") {
      result = "You lose. play again!";
    } else if (computerMove === "rock") {
      result = "You win 🎉";
    }
  } else if (playerMove === "scissor") {
    if (computerMove === "scissor") {
      result = "Tie.";
    } else if (computerMove === "rock") {
      result = "You lose. play again!";
    } else if (computerMove === "paper") {
      result = "You win 🎉";
    }
  }
  if (result === "You win 🎉") {
    score.wins = score.wins + 1;
  } else if (result === "You lose. play again!") {
    score.losses = score.losses + 1;
  } else if ("Tie.") {
    score.ties = score.ties + 1;
  }

  document.querySelector(".js-result").innerHTML = result;

  // storing score into the local storage
  // JSON.stringify is used to convert objects into the strings
  localStorage.setItem("score", JSON.stringify(score));

  updateScoreElement();

  /*  alert(
          `You picked ${playerMove} and computer picked ${computerMove}, ${result}
        Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`
        ); */

  document.querySelector(
    ".js-move"
  ).innerHTML = `You <img src="images/${playerMove}-emoji.png" alt="" class="move-icon" />
        <img src="images/${computerMove}-emoji.png" alt="" class="move-icon" />
        Computer`;
  // console.log(computerMove);
}

function pickComputerMove() {
  const randomNum = Math.random();
  let computerMove = "";
  if (randomNum >= 0 && randomNum < 1 / 3) {
    computerMove = "rock";
  } else if (randomNum >= 1 / 3 && randomNum < 2 / 3) {
    computerMove = "paper";
  } else {
    computerMove = "scissor";
  }
  return computerMove;
}

function updateScoreElement() {
  document.querySelector(
    ".js-score"
  ).innerHTML = ` Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

function diplayScore() {
  // clearing the local storage
  localStorage.removeItem("score");
}

// handle key press(r, p, s)

document.body.addEventListener("keydown", (event) => {
  // console.log(event.key);

  if (event.key === "r") {
    playGame("rock");
  } else if (event.key === "p") {
    playGame("paper");
  } else if (event.key === "s") {
    playGame("scissor");
  }
});
