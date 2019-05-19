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
console.log('Global Questions: ', questions);
console.log("-----------------");


// FUNCTIONS
      // Start Buttons Hide Function
$( "#start-game" ).on( "click", function() {
   $("#start-game").hide();
});

function timer() {
   setTimeout(function(){ alert("Hello"); }, 10000);
}


// MAIN PROCESS
   // Loop through questions in array
for (var i = 0; i < questions.length; i++) {
   var wait = true;
   var choices = questions[i].choices;

   $("#current-question").text(questions[i].question);
   $("#current-choices").empty();

   console.log(questions[i].question);
   console.log(questions[i].choices);

      // wait and loop choices, one choice per line
   if (wait) {
      for (var x = 0; x < choices.length; x++) {
         $("#current-choices").append("<ul>" + choices[x] + "</ul>");
      }

         // on click, change var wait to false
      $("#time-remaining").on("click", function() {
         wait = false;
       });   
   }
   else if (!wait) {}
}