
// Left to add:
//  - Timer for when user begins quiz - if adding timer feature
//  - fix the score count so that it works correctly snd that function that checks the answers are correct in the quiz at the end show users scores - amount of correct answers out of 10
//   - question must be answered, otherwise if left blank an alert will pop up saying "No answer selected, please select an answer even if it's a guess"
//   - possibly add a progress bar for how far along in the quiz the user is, maybe with a percentage?? - if have time
//   - timer will stop as soon as last question and then show the user the time it took them to answer the question - if adding timer feature



// const variables for quiz
const beginQuizBtn = document.getElementById("begin");
const introSection = document.getElementById("welcome-message");
const questionContainer = document.getElementById("question-container");
const quizQuestions = document.getElementById("question");
const quizAnswers = document.getElementById("options");
const nextBtn = document.getElementById("next");
const backBtn = document.getElementById("back");
const endBtn = document.getElementById("end");
const restartQuiz = document.getElementById("restart");
const scoreBoard = document.getElementById("score-area");

// begin quiz event listener
beginQuizBtn.addEventListener("click", beginQuiz);

// next button event listener
nextBtn.addEventListener("click", () => {
    currentQuestion++;
    nextQuestion();
});


// back button event listener - need to add
backBtn.addEventListener("click", btnUnavailable);

// end button event listener 
endBtn.addEventListener("click", endQuiz);


// displays questions in random order
let randomQuestion, currentQuestion;

/**
 * function to begin the quiz
 */
function beginQuiz() {
    console.log("Start quiz");
    alert("Let's begin the quiz! Remember to answer all the questions, even if you don't know the answer - take a guess!");
    beginQuizBtn.classList.add("hide");
    introSection.classList.add("hide") ;
    scoreBoard.classList.add("hide");
    randomQuestion = questions.sort(() => Math.random() - .5);
    currentQuestion = 0;
    questionContainer.classList.remove("hide");
    nextQuestion();
}

/**
 * function to go to next question
 */
function nextQuestion() {
    resetDisplay();
    displayQuestion(randomQuestion[currentQuestion]);
}

/**
 * function to display the question and answer choices
 */
function displayQuestion(question) {
    console.log(question);
    quizQuestions.innerText = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add("answer-btn");
        button.classList.add("btn-spacing");
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", chooseOption);
        quizAnswers.appendChild(button);
    });
}

/**
 * function to reset display after each question
 */
function resetDisplay() {
    nextBtn.classList.add("hide")
    while (quizAnswers.firstChild) {
        quizAnswers.removeChild
        (quizAnswers.firstChild);
    }
    backBtn.classList.add("hide")
    while (quizAnswers.firstChild) {
        quizAnswers.removeChild
        (quizAnswers.firstChild);
    }
}

/**
 * function for back button error message
 */
function btnUnavailable () {
    console.log("Not Implemeneted")
    alert("ERROR: This button has not yet been implemeneted, please try again another time")
}

/**
 * function to select an answer
 */
function chooseOption(co) {
    const selectedAnswer = co.target;
    const correct = selectedAnswer.dataset.correct;
    scoreCount(document.body, correct);
    Array.from(quizAnswers.children).forEach(button => {
        scoreCount(button, button.dataset.correct);
    });
    if (randomQuestion.length > currentQuestion + 1) {
        nextBtn.classList.remove("hide");
        backBtn.classList.remove("hide")
    } else {
        endBtn.innerText = "Go to Score" 
        endBtn.classList.remove("hide") 
    }
}

// function answerSelected () {
//     console.log(answerSelected)
//     if (nextBtn == 0) {
//         alert("please select an answer") }
// }

/**
 * score counter function - to fix
 */
function scoreCount(element, correct) {
    if (correct) {
        addCorrectScore();
    } else {
        addIncorrectScore();
    }
}

/**
 * function for score counter  - to fix currently logging both when clicked on answer
 */
function addCorrectScore() {
    let oldScore = parseInt(document.getElementById("correct").innerText);
    document.getElementById("correct").innerText = ++oldScore;
    console.log(addCorrectScore);
}

function addIncorrectScore() {
    let oldScore = parseInt(document.getElementById("incorrect").innerText);
    document.getElementById("incorrect").innerText = ++oldScore;
    console.log(addIncorrectScore);
}


/**
 * function to end quiz and show scores
 */
function endQuiz() {
    console.log("End Quiz");
    alert("The quiz has ended, let's go to the scores to see how you did");
    quizQuestions.classList.add("hide");
    quizAnswers.classList.add("hide");
    endBtn.classList.add("hide")
    restartQuiz.classList.remove("hide")
    scoreBoard.classList.remove("hide")
}

/**
 * function that takes user back to main page
 */
function reloadThePage () {
    window.location.reload()
}

// quiz questions

const questions = [
    {
        question: "What is the correct equation for Einstein's theory of relativity?",
        answers: [
            {text: "E=MC^4", correct: false},
            {text: "E=MC^2", correct: true},
            {text: "E=MC", correct: false},
            {text: "E=MC^3", correct: false},
            {text: "MC=E", correct: false}
        ]
    },
    {
        question: "What is the correct chemical formula for water?",
        answers: [
            {text: "H20", correct: true},
            {text: "H02", correct: false},
            {text: "H202", correct: false},
            {text: "H2S", correct: false},
            {text:"02", correct: false}
        ]
    },
    {
        question: "What does HTML stand for?",
        answers: [
            {text:"Hyperlink Test Marking Language", correct: false},
            {text:"Hypertext Making Links", correct: false},
            {text:"Hypertext Markup Language", correct: true},
            {text:"Hyper Test Marking Links", correct: false},
            {text:"Hypertext Markup Links", correct: false}
        ]
    },
    {
        question:"What is the correct syntax for adding italics to HTML code",
        answers: [
            {text:"<i></i>", correct: false},
            {text:"<emphasis></emphasis>", correct: false},
            {text:"<italics></italics>", correct: false},
            {text:"<em></em>", correct: true},
            {text:"<it></it>", correct: false}
        ]
    },
    {
        question:"What is the correct spelling for the below word",
        answers: [
            {text:"Unecessary", correct: false},
            {text:"Unnecasary", correct: false},
            {text:"Unnesicary", correct: false},
            {text:"Unecisary", correct: false},
            {text:"Unnecessary", correct: true}
        ]
    },
    {
        question:"Fill in the blank: 'Seldom ________ anything funnier'",
        answers: [
            {text:"have I seen", correct: true},
            {text:"I see", correct: false},
            {text:"I have seen", correct: false},
            {text:"I saw", correct: false},
            {text:"I've seen", correct: false}
        ]
    },
    {
        question:"What is the captial of Ukraine?",
        answers: [
            {text:"Lvov", correct: false},
            {text:"Kiev/Kyiv", correct: true},
            {text:"Kharkiv", correct: false},
            {text:"Warsaw", correct: false},
            {text:"Odessa", correct: false}
        ]
    },
    {
        question:"What is the largest body of water in the world?",
        answers: [
            {text:"Indian Ocean", correct: false},
            {text:"Atlantic Ocean", correct:false},
            {text:"Pacific Ocean", correct: true},
            {text:"Arctic Ocean", correct: false},
            {text:"Southern Ocean", correct: false}
        ]
    },
    {
        question:"When did World War II end?",
        answers: [
            {text:"1943", correct: false},
            {text:"1947", correct: false},
            {text:"1944", correct: false},
            {text:"1948", correct: false},
            {text:"1945", correct: true}
        ]
    },
    {
        question:"How long was Queen Elizabeth II on the throne?",
        answers: [
            {text:"80 years", correct: false},
            {text:"Currently", correct: false},
            {text:"75 years", correct: false},
            {text:"77 years", correct: true},
            {text:"65 years", correct: false}
        ]
    },
];

var noOfQuestions = questions.length; 
console.log("Number of questions:" + noOfQuestions);