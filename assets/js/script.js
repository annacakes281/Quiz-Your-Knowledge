
// // Plan:
// // - Function for when the first question page has loaded, timer starts and user must answer the question, timer will be continous when clicking 
// //  previous and next buttons, no penalty for going back, but this will make users score increase
// //   - radio buttons to be used
// //   - question must be answered, otherwise if left blank an alert will pop up saying "No answer selected, please select an answer even if it's a guess"
// //   and then a continue with quiz selector, during this alert the timer should pause
// //   - possibly add a progress bar for how far along in the quiz the user is, maybe with a percentage??
// //   - function that checks the answers are correct in the quiz
// //   - mix of different questions - decide a max number of questions
// //   - at the end of the quiz it will show user number of correct questions and number of incorrect questions, maybe separate by category? 
// //   - timer will stop as soon as last question/end button is clicked (need to add this button in) and then show the user the time it took them to answer the question
// //   - function to start quiz over, this will take users to the main page, questions will remain the same


// // Define the object for the questions
// var questions = [{
//     question: "What is the correct equation for Einstein's theory of relativity?",
//     choices: ["E=MC^4", "E=MC", "E=MC^2", "E=MC^3", "MC=E"],
//     correctAnswer: 2
// }, {
//     question: "What is the correct chemical formula for water?",
//     choices: ["H20", "H02", "H202", "H2S", "02"],
//     correctAnswer: 0
// }, {
//     question: "What does HTML stand for?",
//     choices: ["Hyperlink Test Marking Language", "Hypertext Making Links", "Hypertext Markup Language", "Hyper Test Marking Links", "Hypertext Markup Language"],
//     correctAnswer: 4
// }, {
//     question: "What is the correct syntac for adding italics to HTML code?",
//     choices: ["<i></i>", "<emphasis></emphasis>", "<italics></italics>", "<em></em>", "<it></it>"],
//     correctAnswer: 3
// }, {
//     question: "What is the correct spelling for the below word:",
//     choices: ["Unecessary", "Unnecessary", "unnecasary", "Unnesicary", "Unecisary"],
//     correctAnswer: 1
// }, {
//     question: "Fill in the blank: 'Seldom ________ anything funnier'",
//     choices: ["I see", "have I seen", "I have seen", "I saw", "I've seen"],
//     correctAnswer: 1
// }, {
//     question: "What is the captial of Ukraine?",
//     choices: ["Kiev", "Lvov", "Kharkiv", "Warsaw", "Odessa"],
//     correctAnswer: 0
// }, {
//     question: "What is the largest body of water in the world?",
//     choices: ["Indian Ocean", "Atlantic Ocean", "Pacific Ocean", "Arctic Ocean", "Southern Ocean"],
//     correctAnswer: 2
// }, {
//     question: "When did World War II end?",
//     choices: ["1943", "1947", "1944", "1948", "1945"],
//     correctAnswer: 4
// }, {
//     question: "How long was Queen Elizabrth II on the throne?",
//     choices: ["80 years", "Currently", "75 years", "77 years", "65 years"],
//     correctAnswer: 3
// }];


// var noOfQuestions = questions.length; 
// console.log("Number of questions:" + noOfQuestions)


// const variables for quiz // 
const beginQuizBtn = document.getElementById("begin");
const introSection = document.getElementById("welcome-message");
const scoreSection = document.getElementById("scores")
const questionContainer = document.getElementById("question-container")
const quizQuestions = document.getElementById("question")
const quizAnswers = document.getElementById("options")
const nextBtn = document.getElementById("next")

// begin quiz event listener //
beginQuizBtn.addEventListener("click", beginQuiz);
nextBtn.addEventListener("click", () => {
    currentQuestion++
    nextQuestion()
})

// possible random selector, to test this option out
let randomQuestion, currentQuestion

/**
 * function to begin the quiz
 */
function beginQuiz() {
    console.log("Start quiz")
    alert("Let's begin the quiz! Remember to answer all the questions, even if you don't know the answer - take a guess!")
    beginQuizBtn.classList.add("hide")
    introSection.classList.add("hide") 
    nextBtn.classList.remove("hide") // add an alert if button not select then cant move on
    randomQuestion = questions.sort(() => Math.random() - .5)
    currentQuestion = 0
    questionContainer.classList.remove("hide")
    nextQuestion()
};

/**
 * function to go to next question
 */
function nextQuestion() {
    resetDisplay()
    displayQuestion(randomQuestion[currentQuestion])
}

/**
 * function to display the question and answer choices
 */
function displayQuestion(question) {
    quizQuestions.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement("button")
        button.innerText = answer.text
        button.classList.add("answer-btn")
        button.classList.add("btn-spacing")
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click", chooseOption)
        quizAnswers.appendChild(button)
    });
}

/**
 * function to reset display after each question
 */
function resetDisplay() {
    while (quizAnswers.firstChild) {
        quizAnswers.removeChild
        (quizAnswers.firstChild)
    }
}

/**
 * function to select an answer
 */
function chooseOption(co) {
    const selectedAnswer = co.target
    const correct = selectedAnswer.dataset.correct
    scoreCount(document.body, correct)
    Array.from(quizAnswers.children).forEach(button => {
        scoreCount(button, button.dataset.correct)
    })
    // nextBtn.classList.remove("hide") if you want button to display once answer selected
}


/**
 * score counter function - to fix
 */
function scoreCount(element, correct) {
    clearScoreCount(element)
    if (correct) {
        addCorrectScore()
    } else {
        addIncorrectScore()
    }
}



/**
 * function for score counter - to check if works - to fix
 */
function addCorrectScore() {
    let oldScore = parseInt(document.getElementById("correct").innerText);
    document.getElementById("correct").innerText = ++oldScore
    console.log(addCorrectScore)
}

function addIncorrectScore() {
    let oldScore = parseInt(document.getElementById("incorrect").innerText);
    document.getElementById("incorrect").innerText = ++oldScore
}

// quiz questions - still need to add more

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
]

