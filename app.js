/**
 * Example store structure
 */
// eslint-disable-next-line strict
const STORE = {
  // 5 or more questions are required
  questions: [
    {
      question: 'What color is broccoli?',
      answers: [
        'red',
        'orange',
        'pink',
        'green'
      ],
      correctAnswer: 'green'
    },
    {
      question: 'What is the current year?',
      answers: [
        '1970',
        '2015',
        '2019',
        '2005'
      ],
      correctAnswer: '2019'
    }
  ],
  quizStarted: false,
  questionNumber: 0,
  score: 0,
  wrong: 0,
  submitAnswer:false
};

/**
   *
   * Technical requirements:
   *
   * Your app should include a render() function, that regenerates the view each time the store is updated.
   * See your course material, consult your instructor, and reference the slides for more details.
   *
   * NO additional HTML elements should be added to the index.html file.
   *
   * You may add attributes (classes, ids, etc) to the existing HTML elements, or link stylesheets or additional scripts if necessary
   *
   * SEE BELOW FOR THE CATEGORIES OF THE TYPES OF FUNCTIONS YOU WILL BE CREATING 👇
   *
   */
/** ******** TEMPLATE GENERATION FUNCTIONS **********/
// These functions return HTML templates

// fuction that choices which template
// functions that writes the template---startpg, questionpg, resultspg, finalpg
// function that render the pg

function renderTemplate () {
  console.log('`renderTemplate` ran');
  $('main').html(choiceTemplate());
}

function choiceTemplate () {
  if (STORE.quizStarted === false) {
    return startQuizTemplate();
  }
  else if (STORE.questionNumber <=STORE.questions.length && STORE.submitAnswer===false) {
    return questionTemplate ();
  }else if (STORE.questionNumber <=STORE.questions.length && STORE.submitAnswer===true) {
    return correctResultsTemplate ();
  }
  
}

function startQuizTemplate () {
  return `
  <section class="quiz-explanation">
    <p class="quiz-description">anything can go here this is just a example</p>
  <section>
  <section class="button-section">
    <button id="start-button" class="js-button">
    <span class="button-label">yes</span>
    </section>`;
}

function questionTemplate () {
  return `<section class="question">
  <h2> ${STORE.questions[STORE.questionNumber].question}</h2>
  <form class="questionForm">
    <fieldset class="radio">
    <input type ="radio" value= "${STORE.questions[STORE.questionNumber].answers[0]}" name="answer" required>
    <label for= "question1">${STORE.questions[STORE.questionNumber].answers[0]}</label>
  <br>
    <input type ="radio" value= "${STORE.questions[STORE.questionNumber].answers[1]}" name="answer" required>
    <label for= "question1">${STORE.questions[STORE.questionNumber].answers[1]}</label>
  <br>
    <input type ="radio" value= "${STORE.questions[STORE.questionNumber].answers[2]}" name="answer" required>
    <label for= "question1">${STORE.questions[STORE.questionNumber].answers[2]}</label>
  <br>
    <input type ="radio" value= "${STORE.questions[STORE.questionNumber].answers[3]}" name="answer" required>
    <label for= "question1">${STORE.questions[STORE.questionNumber].answers[3]}</label>
  <br>
    <button type= "submit" id="submitQuestion-button" class="js-button">Submit</button>
  </form>
  </section>
  `;
}

function correctResultsTemplate () {
  return `
  <section class="quiz-results">
    <h2 class="result">Your anwser is correct</h2>
  <section>
  <section class="result-details">
  <p>Score: ${STORE.score} out ${STORE.questions.length}</p>
  <p>Correct: ${STORE.score}</p>
  <p>Incorrect: ${STORE.wrong}</p>
  </section>
  <section class="result-button">
    <button id="nextQuestion-button" class="js-button">
    <span class="button-label">Next</span>
  </section>`;
}

function wrongResultsTemplate () {
  return `
  <section class="quiz-results">
    <h2 class="result">Your anwser is Wrong</h2>
  <section>
  <section class="result-details">
  <p>Correct answer: this is the right answear<p>
  <p>Score: # out 5</p>
  <p>Correct: #</p>
  <p>Incorrect: #</p>
  </section>
  <section class="result-button">
    <button id="nextQuestion-button" class="js-button">
    <span class="button-label">Next</span>
  </section>`;
}

function endQuizTemplate () {
  return ` <section class="quiz-results">
  <h2> You got a #%  </h2>
  <section>
  <section class="result-details">
  <p>Score: # out 5</p>
  <p>Correct: #</p>
  <p>Incorrect: #</p>
  </section>
  <section class="result-button">
    <button id="restartQuiz-button" class="js-button">
    <span class="button-label">Try Again</span>
  </section>`;
}

/** ******** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store
function nextViewTrigger() {
  console.log("nextViewTrigger ran");
  $('main').on('click','.js-button', function (event){
    event.preventDefault();
    switch(event.currentTarget.id) {
    case 'start-button':
      STORE.quizStarted = true;
      console.log(STORE.submitAnswer );
      console.log("start-button ran");
      renderTemplate ();
      break;
    case 'submitQuestion-button':
      console.log("submitQuestion-button ran");
      STORE.submitAnswer=true;
      console.log(STORE.submitAnswer );
      renderTemplate ();
      break;
    case 'nextQuestion-button':
      console.log("nextQuestion-button");
      STORE.submitAnswer = false;
      console.log(STORE.submitAnswer );
      renderTemplate ();
      break;
    }
    
  });
}


function checkQuentionResults() {
  $('main').on('submit', 'form',function(event){
    console.log('checkQuentionResults()');
    event.preventDefault();
    let userAnswear=$('input:checked').val();
    let correctAnswer = STORE.questions[STORE.questionNumber].correctAnswer;
    if (userAnswear === correctAnswer) {
      STORE.score++;
    }
    else {
      STORE.wrong++;
    }
    STORE.submitAnswer=true;
    renderTemplate();
  });
}

// STORE.questions[STORE.questionNumber].question == curent quention
///STORE.questions[STORE.questionNumber].answers[1]== answear #1
//$('input:checked').val();= user input


/** ******** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)

function handleQuizapp () {
  renderTemplate();
  nextViewTrigger();
}

$(handleQuizapp);