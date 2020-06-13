// set of Questions
var Question = [
        {
        question: "How to display 'Hello World' with JavaScript",
        ans1: "1. document.write('Hello World');",
        ans2: "2. document.write(Hello World);",
        ans3: "3. document.write('Hello World')",
        ans4: "4. document.write('Hello World')",
        correct: "ans1"
    },
    {
        question: "What would you see the result of document.write(5 + 4); in a browser？",
        ans1: "(5 + 4) ",
        ans2: "9",
        ans3: "20",
        ans4: "1')",
        correct: "ans2"
    },
    {
        question: "Which character do you use to multiply numbers?",
        ans1: "9;",
        ans2: "@",
        ans3: "*",
        ans4: "/",
        correct: "ans3"
    },
    {
        question: "Whow to declair variables in Javascript",
        ans1: "der",
        ans2: "lar",
        ans3: "var",
        ans4: "ver",
        correct: "ans3"
    },
    {
        question: "How to select id by javascript?",
        ans1: "selectElementBy ",
        ans2: "getlementBy()",
        ans3: "getElmentById()",
        ans4: "GetElementBy()",
        correct: "ans3"
    },
    {
        question: "How do you write 'Hello World' in an alert box?",
        ans1: "alert('Hello World'); ",
        ans2: "prompt('Hello World') ",
        ans3: "document.innerHTML ",
        ans4: "Gbox('Hello World')",
        correct: "ans1"
    },
    {
        question: "How to call out function in javascript?",
        ans1: "function myFunction (){}  ",
        ans2: "var function(); ",
        ans3: "call = function; ",
        ans4: "function(); ",
        correct: "ans4"
    },
];



// timer function
var secondsLeft = 50;

// var Counter = setTimer();
var timeHolder = document.querySelector(".time");



function setTimer() {
    var timeInterval = setInterval(function () {
        secondsLeft--;
        timeHolder.textContent = secondsLeft;
        if (secondsLeft === 0) {

            clearInterval(timeInterval);
            // Write Game Over Text here
            var message = document.getElementById("message");
            message.innerHTML = "Time is up!";

            lastScreenCall();

        }
    }, 1000);
}




// Count correct answer
var count = 0;

// Current Question
var currentQ = 0;

var choice0 = document.getElementById("choice0");
var choice1 = document.getElementById("choice1");
var choice2 = document.getElementById("choice2");
var choice3 = document.getElementById("choice3");
var choice4 = document.getElementById("choice4");

var buttons1 = document.getElementById("answer1");
var buttons2 = document.getElementById("answer2");
var buttons3 = document.getElementById("answer3");
var buttons4 = document.getElementById("answer4");

var restart = document.getElementById("reload");
var checkScore = document.getElementById("checkScore");


// Buttons variables
var startBtn = document.getElementById("startBtn");
var startText = document.getElementById("startText");
var endbutton = document.createElement("button");
var restart = document.createElement("button");

// Answer option Button Event
buttons1.addEventListener("click", answerCheck);
buttons2.addEventListener("click", answerCheck);
buttons3.addEventListener("click", answerCheck);
buttons4.addEventListener("click", answerCheck);

restart.addEventListener("click", endScreen);
checkScore.addEventListener("click", endScreen);



var event = startBtn.addEventListener("click", questionLoad);
var event = startBtn.addEventListener("click", setTimer);

// Start Button Event
startBtn.addEventListener("click", questionLoad);




// Hide Answers 
document.getElementById("questionHolder").style.display = "none";

// Last input display setting
document.getElementById("myText").style.display = "none";
document.getElementById("scoreCheckContainer").style.display = "none";





// Display Answers
function display() {
    document.getElementById("questionHolder").style.display = "block";
}



// Question diplay 
function questionLoad() {
    display();
    choice0.textContent = Question[currentQ].question;
    choice1.textContent = Question[currentQ].ans1;
    choice2.textContent = Question[currentQ].ans2;
    choice3.textContent = Question[currentQ].ans3;
    choice4.textContent = Question[currentQ].ans4;
    startBtn.remove();
    startText.remove();
}



// Current Question position
function loadNextQuestion() {
    if (currentQ < 6) {
        currentQ++;
        questionLoad();
        console.log(currentQ);
    }
    else {
        lastScreenCall();
    }
}


// Dispaly score output
function endScreen() {
    var output = document.getElementById("myText").value;
    document.getElementById("message").innerHTML = output + "'s" + " score is" + " " + count;
}

// function ansCheck() {
//     var ans = document.getElementsByName("btn");
//     console.log(ans);
//     for(var i = 0; i < ans.length; i++){
//       if(ans[i].target) {
//         console.log( ans[i].value);
//       }
//     }
// }

//  Answer check and Display function
function answerCheck(event) {
    var qAnswer = Question[count].correct;
    var ansChecker = event.target.value;
    // Question[count].ans1
    console.log(qAnswer);
    console.log(ansChecker);

    if (ansChecker != qAnswer) {
        secondsLeft -= 5;

        // Print message 
        var message = document.getElementById("message");
        message.textContent = "Your choice was wrong!";
    }
    else {
        // Print message       
        var message = document.getElementById("message");
        message.innerHTML = "Your answer was correct!";
        count++;
    }

    loadNextQuestion();
}


// Page relaod function
function reloadpage() {
    location.reload(true);
}

function lastScreenCall() {
    document.getElementById("questionHolder").style.display = "none";
    document.getElementById("scoreCheckContainer").style.display = "block";
    document.getElementById("myText").style.display = "block";

    // // reload page to restart quiz
    restart.innerHTML = "Start again";
    document.body.appendChild(restart);
    restart.addEventListener("click", reloadpage);
}



