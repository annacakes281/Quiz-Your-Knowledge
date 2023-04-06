// Wait for the DOM to finish loading before running the game
// Add event listeners to the button

const beginQuiz = document.getElementById("begin");
const questionContainer = document.getElementById("question-container");


beginQuiz.addEventListener("click", startQuiz);

function startQuiz() {
    alert("Let's begin the quiz! Remember to answer all the questions, even if you don't know the answer - take a guess!")
    beginQuiz.classList.add("hide")
    questionContainer.classList.remove("hide")
    displayQuestion()
};



// Plan:
// - Function for when user clicks the Let's begin button, it takes user to the first question
// - alert for clicking 'let's begin' reminding user that there will be a stopwatch, to answer even if they dont know the answer and no penalities for going back
// possible alert as soon as next page loaded saying timer will begin as soon as you click ok?
// - Function for when the first question page has loaded, timer starts and user must answer the question, timer will be continous when clicking 
//  previous and next buttons, no penalty for going back, but this will make users score increase
//   - radio buttons to be used
//   - question must be answered, otherwise if left blank an alert will pop up saying "No answer selected, please select an answer even if it's a guess"
//   and then a continue with quiz selector, during this alert the timer should pause
//   - possibly add a progress bar for how far along in the quiz the user is, maybe with a percentage??
//   - function that checks the answers are correct in the quiz
//   - mix of different questions - decide a max number of questions
//   - at the end of the quiz it will show user number of correct questions and number of incorrect questions, maybe separate by category? 
//   - timer will stop as soon as last question/end button is clicked (need to add this button in) and then show the user the time it took them to answer the question
//   - function to start quiz over, this will take users to the main page, questions will remain the same


// Define the object for the questions
var questions = [{
    question: "What is the correct equation for Einstein/s theory of relativity?",
    choices: ["E=MC^4", "E=MC", "E=MC^2", "E=MC^3", "MC=E"],
    correctAnswer: 2
}, {
    question: "What is the correct chemical formula for water?",
    choices: ["H20", "H02", "H202", "H2S", "02"],
    correctAnswer: 0
}, {
    question: "What does HTML stand for?",
    choices: ["Hyperlink Test Marking Language", "Hypertext Making Links", "Hypertext Markup Language", "Hyper Test Marking Links", "Hypertext Markup Language"],
    correctAnswer: 4
}, {
    question: "What is the correct syntac for adding italics to HTML code?",
    choices: ["<i></i>", "<emphasis></emphasis>", "<italics></italics>", "<em></em>", "<it></it>"],
    correctAnswer: 3
}, {
    question: "What is the correct spelling for the below word:",
    choices: ["Unecessary", "Unnecessary", "unnecasary", "Unnesicary", "Unecisary"],
    correctAnswer: 1
}, {
    question: "Fill in the blank: 'Seldom ________ anything funnier'",
    choices: ["I see", "have I seen", "I have seen", "I saw", "I've seen"],
    correctAnswer: 1
}, {
    question: "What is the captial of Ukraine?",
    choices: ["Kiev", "Lvov", "Kharkiv", "Warsaw", "Odessa"],
    correctAnswer: 0
}, {
    question: "What is the largest body of water in the world?",
    choices: ["Indian Ocean", "Atlantic Ocean", "Pacific Ocean", "Arctic Ocean", "Southern Ocean"],
    correctAnswer: 2
}, {
    question: "When did World War II end?",
    choices: ["1943", "1947", "1944", "1948", "1945"],
    correctAnswer: 4
}, {
    question: "How long was Queen Elizabrth II on the throne?",
    choices: ["80 years", "Currently", "75 years", "77 years", "65 years"],
    correctAnswer: 3
}];