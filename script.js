var correctAnswer= true;
var inCorrectAnswer= false;
var secondsLeft = 75;
var timeEl = document.getElementById("timer");
var startGame= document.getElementById("startGame");
var question= document.getElementById("quizQuestions");
var instructions= document.getElementById("gameInstructions");
var title= document.getElementById("title");

var permanent_div_for_housing_questino_and_button = document.getElementById("specific-name")

startGame.addEventListener("click", playGame);


var questions = [
  {
    q: "How are you doing today ?",
    a: [
      "one",
      "answer 2",
      "anwer 3",
      "aner4"
    ]
  },
  {
    q: "Question2?",
    a: [
      "one",
      "answer 2",
      "anwer 3",
      "aner4"
    ],
    correct: 0,
  },
  {
    q: "Question3?",
    a: [
      "one",
      "answer 2",
      "anwer 3",
      "aner4"
    ]
  }
]
 

function handle(event) {
    console.log("sanity log")
    var buttonClicked=event.target;     
    console.log(buttonClicked)
    var buttonId=buttonClicked.getAttribute("id");
    var buttonData = buttonClicked.getAttribute("data")

    console.log(buttonId);
    
    if (buttonId == "correctAnswer") {
        var responseEl=document.createElement("p");
        console.log(responseEl);
        responseEl.innerHTML="Correct!";
        console.log(responseEl);
        document.getElementById("questionResult").appendChild(responseEl);

    } else {
        var responseEl=document.createElement("p");
        console.log(responseEl);
        responseEl.innerHTML="Wrong...";
        console.log(responseEl);
        document.getElementById("questionResult").appendChild(responseEl);
        secondsLeft=secondsLeft-10;

    }

    console.log(buttonData)

    if (buttonData == "q1") {
      //repopulate with q2
      genericQuestionDisplay(questions[1].q, questions[1].a)
      questionDisplay2()
    }

    /*if buttondata == q2 {
      //move on to q3
      question3()
    }

    if buttondata == q3 {

    }*/
     destroy();
}

function destroy(elem_to_destroy) {
    
}

function questionDisplay () {
    title.remove();
    startGame.remove ();
    instructions.remove ();
    var question1=document.createElement("h1");
    question1.setAttribute("id", "quiz");
    question1.innerHTML= "Commonly used data types do not include________";
    document.getElementById("quiz").appendChild(question1);
    
    var answer1=document.createElement("button");
    answer1.innerHTML="1. Strings"
    answer1.setAttribute("data", "q1");
    answer1.onclick = handle;
    document.getElementById("quiz").appendChild(answer1);
    
    var answer2=document.createElement("button");
    answer2.innerHTML="2. Booleans"
    answer2.setAttribute("data", "q1");
    answer2.onclick = handle;
    document.getElementById("quiz").appendChild(answer2);
    
    var answer3=document.createElement("button");
    answer3.innerHTML="3. Numbers"
    answer3.setAttribute("data", "q1");
    answer3.onclick = handle;
    document.getElementById("quiz").appendChild(answer3);
    
    var answer4=document.createElement("button");
    answer4.innerHTML="4. Alerts"
    document.getElementById("quiz").appendChild(answer4);
    answer4.setAttribute("id", "correctAnswer");
    answer4.setAttribute("data", "q1");
    answer4.onclick = handle;

    return {q: question1, button: [answer1, answer2, answer3, answer4]}
}



function genericQuestionDisplay (question_param, answers) {
  
  var question1=document.createElement("h1");
  question1.setAttribute("id", "quiz");
  question1.innerHTML= question_param;
  document.getElementById("quiz").appendChild(question1);
  
  var answer1=document.createElement("button");
  answer1.innerHTML=answers[0];
  answer1.onclick = handle;
  document.getElementById("quiz").appendChild(answer1);
  
  var answer2=document.createElement("button");
  answer2.innerHTML=answers[1];
  answer2.onclick = handle;
  document.getElementById("quiz").appendChild(answer2);
  
  var answer3=document.createElement("button");
  answer3.innerHTML=answers[2];
  answer3.onclick = handle;
  document.getElementById("quiz").appendChild(answer3);
  
  var answer4=document.createElement("button");
  answer4.innerHTML=answers[3];
  document.getElementById("quiz").appendChild(answer4);
  answer4.setAttribute("id", "correctAnswer");
  answer4.setAttribute("data", "q1")
  answer4.onclick = handle;

  return {q: question1, button: [answer1, answer2, answer3, answer4]}
}


function questionDisplay2() {
  console.log("new func 2")
}




    /*var addLi=document.createElement("li");
    document.getElementById("possibleAnswers").appendChild(addLi);
    var addButton=document.createElement("button");
    addButton.setAttribute("id", "button1");
    //document.getElementById("button1").appendChild(addButton);*/




    //Julian: write the code for one question and then see if you can cut out everything that makes it unique. 
    //i.e. a function with properties(question, correctAnswer, etc.) and then feed it the necessary properties.
    


function startTimer() {
  // Sets interval in variable
  //console.log(document.getElementById("timer"));
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = "Time Remaining:" + " " + secondsLeft;

    if(secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
    }

  }, 1000);
}


function playGame() {
    startTimer ();
    q1 = questionDisplay ();
    console.log("hello s", q1)
    destroy(q1)
    /*displayQuestion2()
    destroy()
    displayQuestion3()
    destopy()*/
    

}
