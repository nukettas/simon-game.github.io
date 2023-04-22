var userClickedPattern = [];
var gamePattern = [];
var buttonColours = ["red", "blue", "green", "yellow"];
const insert = document.getElementById("level-title");
var level = 0;

function nextSequence(randomChosenColour) {
  userClickedPattern = [];
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);

  playSound(randomChosenColour);

  function updateLevel() {
    level++;
    insert.innerHTML = `<h1 id="level-title">Level ${level}</h1>`;
  }
  updateLevel();
}

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();

  buttonColours.forEach((sound) => {
    const btn = document.createElement("audio");
    btn.setAttribute(
      "src",
      "/Users/Mac/Desktop/Simon Game Challenge Starting Files/sounds"
    );

    btn.addEventListener("click", () => {
      document.getElementById(sound).play();
    });
  });
}

function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");

  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}

$(".btn").click(function () {
  var userChosenColour = $(this).attr("id");

  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour);
  animatePress(userChosenColour);
  checkAnswer(userClickedPattern.length - 1);
});

window.addEventListener("keydown", () => {
  insert.innerHTML = `<h1 id="level-title">Level ${level}</h1>`;

  nextSequence();
});

function checkAnswer(currentLevel) {
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
  } else {
    $("body").addClass("game-over");
    playSound("wrong");
    setTimeout(function () {
      $("body").removeClass("game-over");
    }, 200);
    insert.innerHTML = `<h1 id="level-title">Game Over, Press Any Key to Restart</h1>`;
    startOver();
  }

  if (userClickedPattern.length === gamePattern.length) {
    setTimeout(function () {
      nextSequence();
    }, 1000);
  } 
}

function startOver() {
  level = 0;
  gamePattern = [];
}
