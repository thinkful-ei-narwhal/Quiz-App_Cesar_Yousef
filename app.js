/**
 * Example store structure
 */
// eslint-disable-next-line strict
const store = {
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
  score: 0
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
/********** TEMPLATE GENERATION FUNCTIONS **********/
// These functions return HTML templates

//fuction that choices which template
//functions that writes the template---startpg, questionpg, resultspg, finalpg
//function that render the pg

function renderTemplate(){
  console.log('`renderTemplate` ran');
  const renderTemplateString = startQuizElement ();
  $('main').html(renderTemplateString);
}

function startQuizElement () {
  return `
  <section class="quiz-explanation">
    <p class="quiz-description">anything can go here this is just a example</p>
  <section>
  <section class="button-section">
    <button class="js-button">
    <span class="button-label">yes</span>
    </section>`;
}

function handleQuizapp(){
  renderTemplate();
  startQuizElement ();
}
  
/********** RENDER FUNCTION(S) **********/
  
// This function conditionally replaces the contents of the <main> tag based on the state of the store
  
/********** EVENT HANDLER FUNCTIONS **********/
  
// These functions handle events (submit, click, etc)

$(handleQuizapp);