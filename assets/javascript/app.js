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
var currentQuestion;
var choices;
var answer;

console.log('Global Questions: ', questions);
console.log("-----------------");


// FUNCTIONS
      // Start Button Function
$( "#start-game" ).on( "click", function() {
   $("#start-game").hide();
   $("#game-box").show();
});

function timer() {
   setTimeout(function () { alert(""); }, 1000 * 30);

   if (timer === 0) {
      alert("Times Up!");
      // clearTimeout();
      // getRandomQuestion();
   }
   else if (this.id != answer) {
      alert("Wrong!");
      // clearTimeout();
      // getRandomQuestion();
   }
   else if (this.id == answer) {
      alert("Correct!");
      // clearTimeout();
      // getRandomQuestion();
   }
   // if timer === 0
   // user loses game, call getRandomQuestion();
   // lives--

   // if user guesses correct before timer is up
   // user wins, call getRandomQuestion()
   // lives++

}



function getRandomQuestion() {
   var randomGen = Math.floor(Math.random() * questions.length);
   currentQuestion = questions[randomGen];
   var choices = questions[randomGen].choices;
   var answer = questions[randomGen].answer;
   // questions.splice(randomGen);  broken!! --  breaks above variables

   $("#current-question").text(currentQuestion.question);
   $("#current-choices").empty();

   for (var x = 0; x < choices.length; x++) {
      $("#current-choices").append
      ("<ul class='choice' id='"+x+"'>" + choices[x] + "</ul>");
   }

   console.log(randomGen);
   console.log(currentQuestion.question);
   console.log(choices);
   console.log(answer);
   // get a random question
   // dislau that question to the DOM
   // start timer (timer());
   // splice out the question that was used
   

}
getRandomQuestion();

// MAIN PROCESS



   // var choices = questions[i].choices;
   // var answer = questions[i].answer;

   // $("#current-choices").empty();

   // for (var x = 0; x < choices.length; x++) {
   //    $("#current-choices").append
   //    ("<ul class='choice' id='"+x+"'>" + choices[x] + "</ul>");
   // }


// for (var i = 0; i < questions.length; i++) {
//    if (id === i) {
//       var id = i;
//       var choices = questions[id].choices;
//       var answer = questions[id].answer;
//       console.log('answer: ', answer);

//       $("#current-choices").empty();
//       $("#current-question").text(questions[id].question);
      
//       for (var x = 0; x < choices.length; x++) {
//          $("#current-choices").append
//          ("<ul class='choice' id='"+x+"'>" + choices[x] + "</ul>");
//       }
//       // on click run this
//       $('ul.choice').on('click', function(e){
//          e.preventDefault();
//          console.log(this.id);

//          if (this.id == answer) {
//             alert("Correct!");
//          }
//          else {
//             alert("Wrong!");
//          }
//       });
//    }
// }
//    // Loop through questions in array
// for (var i = 0; i < questions.length; i++) {
//    var wait = true;
//    var choices = questions[i].choices;

//    $("#current-question").text(questions[i].question);
//    $("#current-choices").empty();

//    console.log(questions[i].question);
//    console.log(questions[i].choices);

//       // wait and loop choices, one choice per line
//    if (wait) {
//       for (var x = 0; x < choices.length; x++) {
//          $("#current-choices").append("<ul>" + choices[x] + "</ul>");
//       }

//          // on click, change var wait to false
//       $("#time-remaining").on("click", function() {
//          wait = false;
//        });   
//    }
//    else if (!wait) {}
// }