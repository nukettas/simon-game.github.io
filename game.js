var userClickedPattern = [];
var gamePattern = [];
var buttonColours = ["red", "blue", "green", "yellow"];

function nextSequence(randomChosenColour) {
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);

}

nextSequence();

buttonColours.forEach((sound) => {
  //const button = document.querySelectorAll(".btn");
  const btn = document.createElement("audio");
  btn.setAttribute(
    "src",
    "/Users/Mac/Desktop/Simon Game Challenge Starting Files/sounds"
  );

  btn.addEventListener("click", () => {
    document.getElementById(sound).play();
  });
});


$(".btn").click(function () {
  var userChosenColour = $(this).attr("id");

  userClickedPattern.push(userChosenColour);

});
