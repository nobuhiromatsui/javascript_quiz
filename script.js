// Creating time counter


// creating element
// var timerPlace = document.createElement("p");
// timerPlace.textContent = "timer here";
// document.body.children[0].children[0].appendChild(timerPlace);

// Question text holder 
var questionPlace = document.createElement("hi");
questionPlace.textContent = "questions here";
document.body.children[0].children[1].appendChild(questionPlace);

// Answer list holder
var answersPlace = document.createElement("p");
answersPlace.textContent = "answers here";
document.body.children[0].children[2].appendChild(answersPlace);

// timer function
var secondsLeft = 10;
var Counter = setTimer();
var timeHolder = document.querySelector(".time");


function setTimer (){
    var timeInterval = setInterval(function() {
        secondsLeft--;
        timeHolder.textContent = secondsLeft;
        if (secondsLeft === 0){
            clearInterval (timeInterval);
        }
    }, 1000);
}

// Answers function

// function questions (){
    var answersQ1 = ["1", "2", "3", "4"];
    for (var i = 0; i < answersQ1.length ; i++){
        console.log(answersQ1[i]);

    var li = document.createElement("li");
    li.textContent = answersQ1[i];
    document.body.children[0].children[2].appendChild(li);

    li.addEventListener("click", function(){
        console.log("clicked");
    });



// questions ();

