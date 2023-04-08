// // Wait for the DOM to finish loading before running the game
// // Add event listeners to the button

// const beginQuizBtn = document.getElementById("begin");
// const questionContainer = document.getElementById("question-container");
// const introSection = document.getElementById("welcome-message");
// const displayButtons = document.getElementsByClassName("answer-btn")
// // const nextQuestion = document.getElementById("next");


// beginQuizBtn.addEventListener("click", startQuiz);


// function startQuiz() {
//     alert("Let's begin the quiz! Remember to answer all the questions, even if you don't know the answer - take a guess!")
//     beginQuizBtn.classList.add("hide")
//     introSection.classList.add("hide")
//     questionContainer.classList.remove("hide")
//     displayQuestion(questions)
//     displayChoices(questions)
// };

// function displayQuestion(q) {
//     console.log(q)
//     let quizQuestion = document.getElementById("question");
//     quizQuestion.innerText = q[0].question
//     console.log(q[0].question)
//     // create if statement for the next button to show??
// };


// function displayChoices(c) {
//     console.log(c)
//     let quizAnswers = document.getElementById("options")
//     quizAnswers.innerText = c[0].choices
//     console.log(c[0].choices)
    
  
//     displayButtons.innerHTML = c[0].choices
//     console.log(displayButtons)

//     // let choices = displayChoices.choices;
//     // console.log(choices)

//     questions.choices.forEach(answer => {
//         const button = document.createElement("button")
//         button.innerText = answer.text
//         button.classList.add("answer-btn")
//         if (answer.correctAnswer) {
//             button.dataset.correctAnswer = answer.correctAnswer
//         }
//         displayButtons.appendChild(button)
//     });
    
// }


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

