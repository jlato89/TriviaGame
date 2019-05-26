$(document).ready(function() {
   // create initial start button for game.
   function startPage () {
      startButton = 
      "<p id='button-text'>Click the DHD below to begin</p>"+
      "<img src='assets/images/SG-dhd.png' alt='start button' id='start-button' height='30%' width='30%'>";
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
   "<img src='assets/images/yes.gif' alt='correct' height='30%' width='30%'>";

   $("p").append(gameHTML);
   setTimeout(generateQuestions, 1000 * 5);
} // end of generateWin

function generateLoss() {
   $(".answer, .question").remove();
   gameHTML = 
   "<h3><b>You got it Wrong!</b></h3>"+
   "<p>The correct answer was</p>"+
   "<p>"+correctAnswer+"</p>"+
   "<img src='assets/images/no.gif' alt='wrong' height='30%' width='30%'>";
   
   $("p").append(gameHTML);
   setTimeout(generateQuestions, 1000 * 5);
} // end of generateLoss

function timeoutLoss() {
   $(".answer, .question").remove();
   gameHTML = 
   "<h3>You ran out of <b>TIME</b>!</h3>"+
   "<img src='assets/images/timesup.gif' alt='time-up' height='30%' width='30%'>";
   
   $("p").append(gameHTML);
   setTimeout(generateQuestions, 1000 * 5);
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
      question : "How many seasons did Stargate Atlantis have",
      choices : ["3", "6", "9", "5"],
      answer : "5"
   },
   {
      question : "Who built the Stargates?",
      choices : ["The Wraith", "The Ancients", "The Asgard", "The Goa'uld"],
      answer : "The Ancients"
   },
   {
      question : "Which character played Jack O'Neill?",
      choices : ["James Spader", "Richard Dean Anderson", "Kurt Russell", "Joe Flanigan"],
      answer : "Richard Dean Anderson"
   },
   {
      question : "Who is the Jaffa member of the 'Stargate SG-1' team?",
      choices : ["Ba'al", "Teal'c", "Bra'tac", "Selmak"],
      answer : "Teal'c"
   },
   {
      question : "Which part of the U.S. military is Stargate Command a part of?",
      choices : ["Navy", "Air Force", "Army", "Marines"],
      answer : "Air Force"
   }
];