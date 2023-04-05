// Wait for the DOM to finish loading before running the game
// Add event listeners to the button

// Plan:
// - Function for when user clicks the Let's begin button, it takes user to the first question
// - alert for clicking 'let's begin' reminding user that there will be a stopwatch, to answer even if they dont know the answer and no penalities for going back
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

//possible questions:

//science
// What is the correct equation for Einstein's theory of relativity? E=MC^2 wrong answers: E=MC^3, E=MC^4, E=MC^6
// What is the correct chemical formula for water? H20, wrong answers: H202, HO2, H2S

//coding
// What is the correct syntax for adding italics to HTML code? <em> </em>  wrong answers: <i></i> <italics></italics> <emphasis></emphasis>
// What does HTML stand for? Hypertext Markup Language, wrong answers: Hyperlink Text Making Language, Hypertext Making Links, Hypertext Markup Language

//spelling/english
//What is the correct spelling: unnecessary, wrong answers: unecessary, unnecasary, unnesicary
//Fill in the blank: Seldom ____ anything funnier: have I seen, wrong answers: i have seen, i see, i saw

//geography
//What is the capital of Ukraine? Kiev, wrong answers: Lvov, Kharkiv, Warsaw
//What is the largest body of water in the world? Pacific ocean, wrong answers: atlantic ocean, indian, arctic

//History
//What year did WW2 end? 1945, wrong answer: 1944, 1946, 1940, 1941
//How long was Queen Elizabeth II on the throne? 70 years, wrong answer: 65 years, 75 years, current