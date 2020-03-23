/**
 * Example store structure
 */
// eslint-disable-next-line strict
const STORE = {
  questions: [
    {
      question: 'Who Was The First U.S President?',
      answers: [
        'Abraham Lincoln',
        'Benjamin Franklin',
        'Barack Obama',
        'George Washington'
      ],
      correctAnswer: 'George Washington'
    },
    {
      question: 'What Year Were Women Allowed To Vote?',
      answers: [
        '1920',
        '1942',
        '2019',
        '1970'
      ],
      correctAnswer: '1920'
    },
    {
      question: 'What Amendment Free The Slaves?',
      answers: [
        'Amendment IX',
        'Amendment XIII',
        'Amendment XIV',
        'Amendment I'
      ],
      correctAnswer: 'Amendment XIII'
    },
    {
      question: 'What Territory Did The US Acquire From Russia In 1867?',
      answers: [
        'Australia',
        'Puerto Rico',
        'Alaska',
        'Guam'
      ],
      correctAnswer: 'Alaska'
    },
    {
      question: 'Journalists Who Wrote Problems In Society during the Progressive age were called?',
      answers: [
        'Scribe',
        'Stringer',
        'Acrivener',
        'Muchrakers'
      ],
      correctAnswer: 'Muchrakers'
    }
  ],
  quizStarted: false,
  submitAnswer:false,
  lastAnswear:false,
  questionNumber: 0,
  score: 0,
  wrong: 0
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
function startQuizTemplate () {
  return `
  <header>
    <h2>WANT TO PLAY?</h2>
  </header>
  <section> 
    <p>Test Your knowledge 
    <br>In U.S History
    <br>See How Much You Really Know
    <br>Prove Yourself
    <br> Take This Test
    </p>
  </section>
  <section>
    <button class="start-button purple-button" >
    <span>START</span>
  </section>`;
}

function questionTemplate () {
  return `
  <header>
    <h2> ${STORE.questions[STORE.questionNumber].question}</h2>
  </header>
  <form>
    <p>Q:${STORE.questionNumber + 1} of ${STORE.questions.length}</p>
    <fieldset class="radio">
      <input id="question1" type ="radio" class="question-answer" value= "${STORE.questions[STORE.questionNumber].answers[0]}" name="question" required>
      <label for= "question1" >${STORE.questions[STORE.questionNumber].answers[0]}</label>
      <br>
      <input id="question2" type ="radio" class="question-answer" value= "${STORE.questions[STORE.questionNumber].answers[1]}" name="question" required>
      <label for= "question2">${STORE.questions[STORE.questionNumber].answers[1]}</label>
      <br>
      <input id="question3" type ="radio" class="question-answer" value= "${STORE.questions[STORE.questionNumber].answers[2]}" name="question" required>
      <label for= "question3">${STORE.questions[STORE.questionNumber].answers[2]}</label>
      <br>
      <input id="question4" type ="radio" class="question-answer" value= "${STORE.questions[STORE.questionNumber].answers[3]}" name="question" required>
      <label for= "question4">${STORE.questions[STORE.questionNumber].answers[3]}</label>
      <br>
      <section class="submit-button">
        <button type= "submit" class="purple-button" >Submit</button>
      </section>
    </fieldset>g
  </form>
    `;
}

function correctResultsTemplate () {
  return `
  <header>
    <h2>Your anwser is ${(STORE.lastAnswear)?'Correct':'Wrong'}</h2>
  </header>
  <section>
    <p>Answer: ${STORE.questions[STORE.questionNumber].correctAnswer}
    <br>Score: ${STORE.score} out ${STORE.questions.length}
    <br>Correct: ${STORE.score}
    <br>Incorrect: ${STORE.wrong}</p>
  </section>
  <section>
    <button class="next-button purple-button">
    <span>Next</span>
  </section>`;
}

function endQuizTemplate () {
  return `
  <header>
    <h2> You got a ${(STORE.score/STORE.questions.length)*100}%</h2>
  </header>
  <section>
    <p>Score: ${STORE.score} out ${STORE.questions.length}
    <br>Correct: ${STORE.score}
    <br>Incorrect: ${STORE.wrong}</p>
  </section>
  <section>
    <button class="restart-button purple-button">
    <span>Try Again</span>
  </section>`;
}

/** ******** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store
function render(){
  $('main').html(choiceTemplate());
}

function choiceTemplate () {
  if (STORE.quizStarted === false) {
    return startQuizTemplate();
  }
  else if (STORE.questionNumber <STORE.questions.length && STORE.submitAnswer===false) {
    return questionTemplate ();
  }else if (STORE.questionNumber <=STORE.questions.length && STORE.submitAnswer===true) {
    return correctResultsTemplate ();
  }else{
    return endQuizTemplate ();
  } 
}
/** ******** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)
function handleStartGame() {
  $('main').on('click','.start-button', function (event){
    event.preventDefault();
    STORE.quizStarted = true;
    render();
  });
}

function handleEnterAnswer(){
  $('main').on('submit', 'form',function(event){
    event.preventDefault();
    let userAnswear=$('input:checked').val();
    let correctAnswer = STORE.questions[STORE.questionNumber].correctAnswer;
    if (userAnswear === correctAnswer) {
      STORE.score++;
      STORE.lastAnswear=true;
    }else{
      STORE.wrong++;
      STORE.lastAnswear=false;
    }
    STORE.submitAnswer=true;
    render();
  });
}

function handleNextQuestion(){
  $('main').on('click','.next-button', function (event){
    event.preventDefault();
    STORE.questionNumber += 1;
    STORE.submitAnswer = false;
    render();
  });
}

function handleRestartGame(){
  $('main').on('click','.restart-button', function (event){
    event.preventDefault();
    STORE.quizStarted= false;
    STORE.questionNumber= 0;
    STORE.score= 0;
    STORE.wrong= 0;
    STORE.submitAnswer=false;
    STORE.lastAnswear=false,
    render();
  });
}

function handleQuizapp () {
  render();
  handleStartGame();
  handleEnterAnswer();
  handleNextQuestion();
  handleRestartGame();
}

$(handleQuizapp);