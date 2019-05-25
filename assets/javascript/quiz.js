//TODO:
//x add start img button
//+ style 'generateQuestions' output
//+ style 'end of quiz' results
//+ style 'Win/Loss/Timed-Out' results
//x fix timer which continues to tick down in background after 'alerts'
//- Replace 60 sec timers on win/loss functions

$(document).ready(function() {
   // create initial start button for game.
   function startPage () {
      startButton = 
      "<p>Click the DHD below to begin</p>"+
      "<img src='assets/images/SG-dhd.png' alt='start button' id='start-button' height='150' width='150'>";
      $("#game-box").append(startButton);
   }
   startPage();

   // on-click event for start button to hide initial page and start showing quiz
   $("#game-box").on("click", "#start-button", function(event) {
      $("header p").hide();

      generateQuestions();
   }); // close #start-button click

   // on-click event for main body
   $("body").on("click", ".answer", function(event) {
      selectedAnswer = $(this).text();
      correctAnswer = questions[id].answer;

      if (selectedAnswer === correctAnswer) {
         clearInterval(theClock);
         id++;
         wins++;
         generateWin();
      }
      else {
         clearInterval(theClock);
         id++;
         losses++;
         generateLoss();
      }

   }); // close .answer click

}); // end of main process


// ~~~ FUNCTIONS ~~~
function generateQuestions() {
   if (id >= questions.length) {
      generateResults();
   } 
   else {
      gameHTML = 
      "<p class='timer-p'>Time Remaining: <span class='timer'>30</span></p>"+
      "<p class='question'>" + questions[id].question + "</p>"+
      "<p class='answer'>" + questions[id].choices[0] + "</p>"+
      "<p class='answer'>" + questions[id].choices[1] + "</p>"+
      "<p class='answer'>" + questions[id].choices[2] + "</p>"+
      "<p class='answer'>" + questions[id].choices[3] + "</p>";

      $("#game-box").html(gameHTML);
      
      counter = 30;
      startTimer();
   }
} // end of generateQuestions

function generateResults() {
   restartButton = "<button id='restart-game'> Restart Game </button>";
   gameHTML = 
   "<h1>Here are your results</h1>"+
   "<h3>WINS: " +wins+ "</h3>"+
   "<h3>LOSSES: " +losses+ "</h3>";

   $("#game-box").html(gameHTML);   
   $("#game-box").append(restartButton);

   $("#game-box").on("click", "#restart-game", function(event) {resetGame();}); // restart game
} // end of generateResults
function resetGame() {
   id = 0;
   wins = 0;
   losses = 0;

   generateQuestions();
} // end of resetGame

function startTimer() {
   theClock = setInterval(myTimer, 1000);
   function myTimer() {
       if (counter === 0) {
           clearInterval(theClock);
           id++;
           losses++;
           timeoutLoss();
       }
       if (counter > 0) {
           counter--;
       }
       $(".timer").html(counter);
   }
} // end of startTimer

function generateWin() {
   $(".answer, .question").remove();
   gameHTML = 
   "<h3>You got it Correct!</h3>"+
   "<img src='https://via.placeholder.com/150' alt='correct' height='150' width='150'>";

   $("p").append(gameHTML);
   setTimeout(generateQuestions, 1000 * 60);
} // end of generateWin

function generateLoss() {
   $(".answer, .question").remove();
   gameHTML = 
   "<h3><b>You got it Wrong!</b></h3>"+
   "<p>The correct answer was</p>"+
   "<p>"+correctAnswer+"</p>"+
   "<img src='https://via.placeholder.com/150' alt='wrong' height='150' width='150'>";
   
   $("p").append(gameHTML);
   setTimeout(generateQuestions, 1000 * 60);
} // end of generateLoss

function timeoutLoss() {
   $(".answer, .question").remove();
   gameHTML = 
   "<h3>You ran out of <b>TIME</b>!</h3>"+
   "<img src='https://via.placeholder.com/150' alt='time-up' height='150' width='150'>";
   
   $("p").append(gameHTML);
   setTimeout(generateQuestions, 1000 * 60);
} // end of timeoutLoss


// ~~~ Global Variables ~~~
var counter = 30;
var id = 0;
var selectedAnswer;
var correctAnswer;
var theClock;
var wins = 0;
var losses = 0;
var questions = [
   {
      question : "How would you rate this game?",
      choices : ["The Best", "Its Ok", "Its Garbage", "What Game"],
      answer : "The Best"
   },
   {
      question : "What is PIE equal to in Mathematics?",
      choices : ["31.4", "3.14", "4.16", "4.20"],
      answer : "3.14"
   },
   {
      question : "Is the world flat?",
      choices : ["YES", "NO", "MAYBE", "IDK"],
      answer : "NO"
   }
];