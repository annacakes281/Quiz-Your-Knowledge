// const variables for quiz
const beginQuizBtn = document.getElementById("begin");
const introSection = document.getElementById("welcome-message");
const questionContainer = document.getElementById("question-container");
const timerContainer = document.getElementById("timer-container")
const timeLeft = document.querySelector(".timer");
const finalTime = document.getElementById("final-time");
const quizQuestions = document.getElementById("question");
const quizAnswers = document.getElementById("options");
const nextBtn = document.getElementById("next");
const homeBtn = document.getElementById("home");
const endBtn = document.getElementById("end");
const restartQuiz = document.getElementById("restart");
const showTime = document.getElementById("show-time");
const clickAlbert = document.getElementById("albert");
const learnMore = document.getElementById("click-me");


//variables for timer
let count = 0;
let timerCounter;

// intro image is clickable
clickAlbert.addEventListener("click", clickMe);

/**
 * function for clickable intro image
 */
function clickMe() {
    alert("My name is Albert Einstein, I was born on the 14th of March 1879.\nI was a scientist specialising in theoretical physics and I was best known for my theory of relativity.\nI died on the 18th of April 1955");
} // string is long but jshint returned incorrect use of EOL when I attempted to formart over seperate lines

// begin quiz event listener
beginQuizBtn.addEventListener("click", beginQuiz);

// next button event listener
nextBtn.addEventListener("click", () => {
    currentQuestion++;
    nextQuestion();
});

// back button event listener - need to add
homeBtn.addEventListener("click", btnUnavailable);

// end button event listener 
endBtn.addEventListener("click", endQuiz);


// displays questions in random order
let randomQuestion, currentQuestion;

/**
 * function to begin the quiz
 */
// several statements needed in order to display quiz correctly
function beginQuiz() {
    console.log("Start quiz");
    alert("Let's begin the quiz! Remember to answer all the questions, even if you don't know the answer - take a guess!");
    beginQuizBtn.classList.add("hide");
    introSection.classList.add("hide");
    showTime.classList.add("hide");
    learnMore.classList.add("hide");
    clickAlbert.removeEventListener("click", clickMe);
    timerContainer.classList.remove("hide");
    randomQuestion = questions.sort(() => Math.random() - ".5");
    currentQuestion = 0;
    questionContainer.classList.remove("hide");
    nextQuestion();
    timerDisplay();
}

/**
 * function to go to next question
 */
function nextQuestion() {
    resetDisplay();
    displayQuestion(randomQuestion[currentQuestion]);
}

// quiz timer feature
let timerDisplay = () => {
    timerCounter = setInterval(() => {
        count++;
        timeLeft.innerText = `${count}s`;
    }, 1000);

    startTime = new Date();
};

/**
 * function to stop timer when quiz ends
 */
function stopTimer() {
    clearInterval(timerCounter);
    timeLeft.classList.add("hide");
    finalTime.classList.remove("hide");

    endTime = new Date();
    var timeDiff = endTime - startTime;
    timeDiff /= 1000;

    var seconds = Math.round(timeDiff);
    console.log(seconds + "seconds");

    finalTime.innerText = "It took you " + seconds + " seconds to complete the quiz";
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
    nextBtn.classList.add("hide");
    while (quizAnswers.firstChild) {
        quizAnswers.removeChild(quizAnswers.firstChild);
    }
    homeBtn.classList.remove("hide");
    while (quizAnswers.firstChild) {
        quizAnswers.removeChild(quizAnswers.firstChild);
    }
}

/**
 * function for back button error message
 */
function btnUnavailable() {
    console.log("Not Implemeneted");
    alert("ERROR: This button has not yet been implemeneted, please try again another time");
    // window.location.reload(); this feature will not be implemented yet for design purposes
}

/**
 * function to select an answer
 */
function chooseOption(co) {
    const selectedAnswer = co.target;
    const correct = selectedAnswer.dataset.correct;
    checkAnswer(document.body, correct);
    Array.from(quizAnswers.children).forEach(button => {
        checkAnswer(button, button.dataset.correct);
    });
    if (randomQuestion.length > currentQuestion + 1) {
        nextBtn.classList.remove("hide");
    } else {
        endBtn.innerText = "Go to Score";
        endBtn.classList.remove("hide");
        homeBtn.classList.add("hide");
    }
}

/**
 * function to check answers and change colour if they are correct or incorrect
 */
function checkAnswer(clearAnswer, correct) {
    clearCheckAnswer(clearAnswer);
    if (correct) {
        clearAnswer.classList.add("correct");
    } else {
        clearAnswer.classList.add("incorrect");
    }
}
/**
 * function to clear answer colours before next question
 */
function clearCheckAnswer(clearAnswer) {
    clearAnswer.classList.remove("correct");
    clearAnswer.classList.remove("incorrect");
}


/**
 * function to end quiz and show scores
 */
function endQuiz() {
    console.log("End Quiz");
    quizQuestions.classList.add("hide");
    quizAnswers.classList.add("hide");
    endBtn.classList.add("hide");
    homeBtn.classList.add("hide");
    restartQuiz.classList.remove("hide");
    showTime.classList.remove("hide");
}


/**
 * function that takes user back to main page
 */
function reloadThePage() {
    window.location.reload();
}

// quiz questions

const questions = [{
        question: "What is the correct equation for Einstein's theory of relativity?",
        answers: [{
                text: "E=MC⁴",
                correct: false
            },
            {
                text: "E=MC²",
                correct: true
            },
            {
                text: "E=MC",
                correct: false
            },
            {
                text: "E=MC³",
                correct: false
            },
            {
                text: "MC=E",
                correct: false
            }
        ]
    },
    {
        question: "What is the correct chemical formula for water?",
        answers: [{
                text: "H20",
                correct: true
            },
            {
                text: "H02",
                correct: false
            },
            {
                text: "H202",
                correct: false
            },
            {
                text: "H2S",
                correct: false
            },
            {
                text: "02",
                correct: false
            }
        ]
    },
    {
        question: "What does HTML stand for?",
        answers: [{
                text: "Hyperlink Test Marking Language",
                correct: false
            },
            {
                text: "Hypertext Making Links",
                correct: false
            },
            {
                text: "Hypertext Markup Language",
                correct: true
            },
            {
                text: "Hyper Test Marking Links",
                correct: false
            },
            {
                text: "Hypertext Markup Links",
                correct: false
            }
        ]
    },
    {
        question: "What is the correct syntax for adding italics to HTML code?",
        answers: [{
                text: "<i></i>",
                correct: false
            },
            {
                text: "<emphasis></emphasis>",
                correct: false
            },
            {
                text: "<italics></italics>",
                correct: false
            },
            {
                text: "<em></em>",
                correct: true
            },
            {
                text: "<it></it>",
                correct: false
            }
        ]
    },
    {
        question: "What is the correct spelling for the below word?",
        answers: [{
                text: "Unecessary",
                correct: false
            },
            {
                text: "Unnecasary",
                correct: false
            },
            {
                text: "Unnesicary",
                correct: false
            },
            {
                text: "Unecisary",
                correct: false
            },
            {
                text: "Unnecessary",
                correct: true
            }
        ]
    },
    {
        question: "Fill in the blank: 'Seldom ________ anything funnier'",
        answers: [{
                text: "have I seen",
                correct: true
            },
            {
                text: "I see",
                correct: false
            },
            {
                text: "I have seen",
                correct: false
            },
            {
                text: "I saw",
                correct: false
            },
            {
                text: "I've seen",
                correct: false
            }
        ]
    },
    {
        question: "What is the capital of Ukraine?",
        answers: [{
                text: "Lvov",
                correct: false
            },
            {
                text: "Kiev/Kyiv",
                correct: true
            },
            {
                text: "Kharkiv",
                correct: false
            },
            {
                text: "Warsaw",
                correct: false
            },
            {
                text: "Odessa",
                correct: false
            }
        ]
    },
    {
        question: "What is the largest body of water in the world?",
        answers: [{
                text: "Indian Ocean",
                correct: false
            },
            {
                text: "Atlantic Ocean",
                correct: false
            },
            {
                text: "Pacific Ocean",
                correct: true
            },
            {
                text: "Arctic Ocean",
                correct: false
            },
            {
                text: "Southern Ocean",
                correct: false
            }
        ]
    },
    {
        question: "When did World War II end?",
        answers: [{
                text: "1943",
                correct: false
            },
            {
                text: "1947",
                correct: false
            },
            {
                text: "1944",
                correct: false
            },
            {
                text: "1948",
                correct: false
            },
            {
                text: "1945",
                correct: true
            }
        ]
    },
    {
        question: "How long was Queen Elizabeth II on the throne?",
        answers: [{
                text: "80 years",
                correct: false
            },
            {
                text: "Currently",
                correct: false
            },
            {
                text: "75 years",
                correct: false
            },
            {
                text: "77 years",
                correct: true
            },
            {
                text: "65 years",
                correct: false
            }
        ]
    },
];

// shows number of questions
var noOfQuestions = questions.length;
console.log("Number of questions:" + noOfQuestions);