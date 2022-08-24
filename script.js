var correctAnswer= true;
var inCorrectAnswer= false;
var secondsLeft = 75;
var timeEl = document.getElementById("timer");
var startGame= document.getElementById("startGame");
var question= document.getElementById("quizQuestions");

startGame.addEventListener("click", playGame);
    

function questionDisplay () {
    console.log("questionDisplay is running");
    //Julian: write the code for one question and then see if you can cut out everything that makes it unique. 
    //i.e. a function with properties(question, correctAnswer, etc.) and then feed it the necessary properties.
    
}

function startTimer() {
  // Sets interval in variable
  //console.log(document.getElementById("timer"));
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = "Time Remaining" + " " + secondsLeft;

    if(secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
    }

  }, 1000);
}


function playGame() {
    question.innerHTML= "test question?";
    console.log("function playGame is running");
    questionDisplay ();
    startTimer ();

}
