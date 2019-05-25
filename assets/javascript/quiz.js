//TODO:
//+ add 'end of quiz' results
//+ add 'Win/Loss/Timed-Out' results

$(document).ready(function() {
   // create initial start button for game.

   function startPage () {
      startButton = "<button id='start-game'> Start Game </button>";
      $("#game-box").append(startButton);
   }
   startPage();

   // on-click event for start button to hide initial page and start showing quiz

   $("#game-box").on("click", "#start-game", function(event) {
      $("header p").hide();

      generateQuestions();
   }); // close #start-game click

   // on-click event for main body

   $("body").on("click", ".answer", function(event) {
      selectedAnswer = $(this).text();
      correctAnswer = questions[id].answer;

      if (selectedAnswer === correctAnswer) {
         clearInterval(theClock);
         id++
         generateWin();
      }
      else {
         clearInterval(theClock);
         id++
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
      "<p>Time Remaining: <span class='timer'>30</span></p>"+
      "<p>" + questions[id].question + "</p>"+
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
   alert("End of Quiz! Show Results");
} // end of generateQuestions

function startTimer() {
   theClock = setInterval(myTimer, 1000);
   function myTimer() {
       if (counter === 0) {
           clearInterval(theClock);
           id++;
           timeoutLoss();
       }
       if (counter > 0) {
           counter--;
       }
       $(".timer").html(counter);
   }
} // end of startTimer

function generateWin() {
   alert("Generate Win Page");
   generateQuestions();
} // end of generateWin

function generateLoss() {
   alert("Generate Loss Page");
   generateQuestions();
} // end of generateLoss

function timeoutLoss() {
   alert("Generate Out of Time Page");
   generateQuestions();
} // end of timeoutLoss


// ~~~ Global Variables ~~~
var counter = 30;
var id = 0;
var selectedAnswer;
var theClock;
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