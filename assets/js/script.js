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