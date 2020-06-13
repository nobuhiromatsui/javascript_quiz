// set of Questions
var Question = [
    ["How to display 'Hello World' with JavaScript",
        "1. document.write('Hello World');",
        "2. document.write(Hello World);",
        "3. document.write('Hello World')",
        "4. document.write('Hello World')",
        "1"],
    ["What would you see the result of document.write(5 + 4); in a browser？",
        "1. (5 + 4) ;",
        "2. error ",
        "3. 9 ",
        "4. 20 ",
        "3"],
    ["Which character do you use to multiply numbers?",
        "1. 9 ",
        "2. % ",
        "3. @ ",
        "4. * ",
        "4"],
    ["how to declair variables in Javascript",
        "1. der ",
        "2. lar ",
        "3. var ",
        "4. ver ",
        "3"],
    ["How to select id by javascript?",
        "1. selectElementBy ",
        "2. getlementBy() ",
        "3.getlementById() ",
        "4. GetElementBy() ",
        "3"],
    ["How do you write 'Hello World' in an alert box? ",
        "1. alert('Hello World'); ",
        "2. prompt('Hello World')  ",
        "3. document.innerHTML ",
        "4. box('Hello World') ",
        "1"],
    ["How to call out function in javascript?",
        "1. function myFunction (){} ",
        "2. var function(); ",
        "3. call = function; ",
        "4. function(); ",
        "4"],
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
    choice0.textContent = Question[currentQ][0];
    choice1.textContent = Question[currentQ][1];
    choice2.textContent = Question[currentQ][2];
    choice3.textContent = Question[currentQ][3];
    choice4.textContent = Question[currentQ][4];
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



//  Answer check and Display function
function answerCheck(event) {
    var qAnswer = Question[currentQ][5];
    console.log(Question[currentQ][qAnswer]);
    console.log(event.target.innerHTML);

    if (Question[currentQ][qAnswer] != event.target.innerHTML) {
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



