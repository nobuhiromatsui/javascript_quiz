// timer function
var secondsLeft = 20;

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

        }
    }, 1000);
}




// var Question = [
//     {
//         question: "How to display 'Hello World' with JavaScript",
//         ans1: "1. document.write('Hello World');",
//         ans2: "2. document.write(Hello World);",
//         ans3: "3. document.write('Hello World')",
//         ans4: "4. document.write('Hello World')",
//         correct: "ans1"
//     },
//     ["What would you see the result of document.write(5 + 4); in a browser？",
//         "1. 5 + 4);",
//         "2. error",
//         "3. 9",
//         "4. 20",
//         "3"],
//     ["Which character do you use to multiply numbers?",
//         "1. 9",
//         "2. %",
//         "3. @",
//         "4. *",
//         "4"],
//     ["Which character do you use to divide numbers?",
//         "1. =",
//         "2. /",
//         "3. $",
//         "4. %",
//         "2"],
// ];

// Question[count][correct]; Question[count].ans1;


var Question = [
    ["How to display 'Hello World' with JavaScript",
        "1. document.write('Hello World');",
        "2. document.write(Hello World);",
        "3. document.write('Hello World')",
        "4. document.write('Hello World')",
        "1"],
    ["What would you see the result of document.write(5 + 4); in a browser？",
        "1. 5 + 4);",
        "2. error",
        "3. 9",
        "4. 20",
        "3"],
    ["Which character do you use to multiply numbers?",
        "1. 9",
        "2. %",
        "3. @",
        "4. *",
        "4"],
    ["Which character do you use to divide numbers?",
        "1. =",
        "2. /",
        "3. $",
        "4. %",
        "2"],
];
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

// var timer = setTimer();

// Hide Answers 
document.getElementById("answer1").style.display = "none";
document.getElementById("answer2").style.display = "none";
document.getElementById("answer3").style.display = "none";
document.getElementById("answer4").style.display = "none";

document.getElementById("myText").style.display = "none";




// Display Answers
function display() {
    document.getElementById("answer1").style.display = "block";
    document.getElementById("answer2").style.display = "block";
    document.getElementById("answer3").style.display = "block";
    document.getElementById("answer4").style.display = "block";
}




var startBtn = document.getElementById("startBtn");
var startText = document.getElementById("startText");
var end = document.getElementById("wrapper");
var endbutton = document.createElement("button");


// function outPut() {
//     document.getElementById("myText").style.display = "block";
//     var output = document.querySelectorAll("input").value;
//     document.getElementById("message").innerHTML = output;
// }

// setTimer();


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
    if (currentQ < 3) {
        currentQ++;
        questionLoad();
        console.log(currentQ);
    }
    else {
        console.log("last question");
        var message = document.getElementById("message");
        message.innerHTML = "your score is" + " " + count;


        endbutton.innerHTML = "click here";
        document.body.appendChild(endbutton);

        endbutton.addEventListener("click", endScreen);
        document.getElementById("myText").style.display = "block";


    }
}

function endScreen() {
    var output = document.getElementById("myText").value;
    document.getElementById("message").innerHTML = output + "'s" + " score is" + " " + count;
}




//  Answer check and Display
function answerCheck(event) {
    var qAnswer = Question[currentQ][5];
    console.log(Question[currentQ][qAnswer]);
    console.log(event.target.innerHTML);



    if ( Question[currentQ][qAnswer] != event.target.innerHTML ){
        secondsLeft -= 5;
    }

    loadNextQuestion();

    // if (data == qAnswer) {
    //     console.log(data);
    //     // alert("Corect");
    //     var message = document.getElementById("message");
    //     message.innerHTML = "CORRECT!";
    //     count++;
    //     currentNum();
    //     console.log("Answer Check");
    // }
    // else {
    //     // alert("inCorect");
    //     var message = document.getElementById("message");
    //     message.textContent = "INCORRECT!";
    //     secondsLeft -= 20;
    //     currentNum();
    // }
}



// Answer option Button Event
buttons1.addEventListener("click", answerCheck);
buttons2.addEventListener("click", answerCheck);
buttons3.addEventListener("click", answerCheck);
buttons4.addEventListener("click", answerCheck);



// Start Button Event
startBtn.addEventListener("click", questionLoad);

var event = startBtn.addEventListener("click", questionLoad);
var event = startBtn.addEventListener("click", setTimer);