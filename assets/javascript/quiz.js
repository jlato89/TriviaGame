$(document).ready(function() {
   // create initial start button for game.

   function startPage () {
      startButton = "<button id='start-game'> Start Game </button>";
      $("#game-box").append(startButton);
   }
   startPage();

   // on-click event for start button to hide initial page and start showing quiz

   $("#game-box").on("click", "#start-game", function(event) {
      $("header").hide();

      generateQuestions();
      startTimer();

   }); // close #start-game click

   // on-click event for main body

   $("body").on("click", ".answer", function(event) {
      selectedAnswer = $(this).text();

      if (selectedAnswer === correctAnswers[questionCounter]){
         alert("Correct!");
         clearInterval(theClock);
         generateWin();
      }
      else {
         alert("Incorrect!");
         clearInterval(theClock);
         generateLoss();
      }

   }); // close .answer click

}); // end of main process

// ~~~ FUNCTIONS ~~~
function generateQuestions() {
   gameHTML = 
   "<p>Time Remaining: <span class='timer'>30</span></p>"+
   "<p>" + questions[questionCounter].question + "</p>"+
   "<p class='answer'>" + questions[questionCounter].choices[0] + "</p>"+
   "<p class='answer'>" + questions[questionCounter].choices[1] + "</p>"+
   "<p class='answer'>" + questions[questionCounter].choices[2] + "</p>"+
   "<p class='answer'>" + questions[questionCounter].choices[3] + "</p>";

   $("#game-box").html(gameHTML);
} // end of generateQuestions

function startTimer() {
   theClock = setInterval(thirtySeconds, 1000);
   function thirtySeconds() {
       if (counter === 0) {
           clearInterval(theClock);
           timeoutLoss();
       }
       if (counter > 0) {
           counter--;
       }
       $(".timer").html(counter);
   }
} // end of startTimer

function generateWin() {
   alert("Correct");

} // end of generateWin

function generateLoss() {
   alert("Wrong");

} // end of generateLoss

function timeoutLoss() {
   alert("Out of Time");

} // end of timeoutLoss

// ~~~ Global Variables ~~~
var counter = 30;
var questionCounter = 0;
var selectedAnswer;
var theClock;
var questions = [
   {
      question : "How would you rate this game?",
      choices : ["The Best", "Its Ok", "Its Garbage", "What Game"],
      answer : 0
   },
   {
      question : "What is PIE equal to in Mathematics?",
      choices : ["31.4", "3.14", "4.16", "4.20"],
      answer : 1
   },
   {
      question : "Is the world flat?",
      choices : ["YES", "NO", "MAYBE", "IDK"],
      answer : 1
   }
];