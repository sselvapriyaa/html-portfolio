const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
//const questionCounterText = document.getElementById("questionCounter");
const progressText = document.getElementById("progressText");
const scoreText = document.getElementById("score");
//const progressBarFull = document.getElementById("progressBarFull");
//console.log(choices);

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions  = [];

let questions = [
    {
        question: "Inside which HTML element do we put the JavaScript??",
        choice1: "<script>",
        choice2: "<javascript>",
        choice3: "<js>",
        choice4: "<scripting>",
        answer: 1
    },
    {
        question: "What is the correct syntax for referring to an external script called 'xxx.js'?",          
        choice1: "<script href = 'xxx.js>",
        choice2: "<script name = 'xxx.js'>",
        choice3: "<script src = 'xxx.js'>",
        choice4: "<script file  = 'xxx.js>",
        answer: 3
    },
    {
        question: "How do you write 'Hello World' in an alert box?",
        choice1: "msgBox('Hello World')",
        choice2: "alertBox('Hello World')",
        choice3: "msg('Hello World')",
        choice4: "alert('Hello World')",
        answer: 4
    }

];

// CONSTANTS
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 3;

startGame = () =>{
    questionCounter = 0;
    score = 0;
    availableQuestions =[...questions];
    //console.log(availableQuestions);
    getNewQuestion();

};

getNewQuestion =() =>{
    if(availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS){
        localStorage.setItem("mostRecentScore", score);
        // go to the end page
        return window.location.assign("./end.html");

    }
    questionCounter++;
    //questionCounterText.innerText = questionCounter + "/" + MAX_QUESTIONS;
    //questionCounterText.innerText = `${questionCounter}/ ${MAX_QUESTIONS}`;
    progressText.innerText = `Question ${questionCounter}/ ${MAX_QUESTIONS}`;
    // Update the progress bar
    //console.log((questionCounter / MAX_QUESTIONS) *100);
    progressBarFull.style.width = `${(questionCounter / MAX_QUESTIONS) *100} px`;
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach(choice =>{
        const number = choice.dataset["number"];
        choice.innerText = currentQuestion["choice" + number];
    });

    availableQuestions.splice(questionIndex, 1);
    //console.log(availableQuestions);
    acceptingAnswers = true;
};
choices.forEach(choice => {
    choice.addEventListener("click", e =>{
        //console.log(e.target);
        if(!acceptingAnswers) return;
        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset["number"];

        /*const classToApply = "incorrect";
        if(selectedAnswer == currentQuestion.answer){
            classToApply = "correct";
        }*/
        const classToApply = selectedAnswer == currentQuestion.answer ? 'correct'
        : 'incorrect';

        if(classToApply === "correct"){
            incrementScore(CORRECT_BONUS);
        }
        
        //console.log(classToApply);
        //console.log(selectedAnswer == currentQuestion.answer);
        //selectedChoice.parentElement.classList.add(classToApply);

        //selectedChoice.parentElement.classList.remove(classToApply);
        selectedChoice.classList.add(classToApply);
        setTimeout (() =>{
            selectedChoice.classList.remove(classToApply);
            getNewQuestion();
        }, 1000);     
       
    });
});
incrementScore = num => {
    score += num;
    scoreText.innerText = score;
} 

startGame();





