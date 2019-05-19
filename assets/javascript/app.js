var questions = [
   {
      question : "How would you rate this game?",
      choices : ["The Best", "Its Ok", "Its garbage", "What Game?"],
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


// MAIN PROCESS
      // Loop through questions in array
for (var i = 0; i < questions.length; i++) {
   $("#current-question").text(questions[i].question);
   $("#current-choices").text(questions[i].choices);
   console.log(questions[i].question);
   console.log(questions[i].choices);
}