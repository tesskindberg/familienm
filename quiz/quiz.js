(function(){
  function buildQuiz(){
    // variable to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach(
      (currentQuestion, questionNumber) => {

        // variable to store the list of possible answers
        const answers = [];

        // and for each available answer...
        for(letter in currentQuestion.answers){

          // ...add an HTML radio button
          answers.push(
            `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
          );
        }

        // add this question and its answers to the output
        output.push(
          `<div class="question"> ${currentQuestion.question} </div>
          <div class="answers"> ${answers.join('')} </div>`
        );
      }
    );

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join('');
  }

  function showResults(){

    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll('.answers');

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach( (currentQuestion, questionNumber) => {

      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if(userAnswer === currentQuestion.correctAnswer){
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        answerContainers[questionNumber].style.color = 'lightgreen';
      }
      // if answer is wrong or blank
      else{
        // color the answers red
        answerContainers[questionNumber].style.color = 'red';
      }
    });

    // show number of correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
  }

  const quizContainer = document.getElementById('quiz');
  const resultsContainer = document.getElementById('results');
  const submitButton = document.getElementById('submit');
  const myQuestions = [
    {
      question: "Hvordan ved man at vandet koger?",
      answers: {
        a: "Det bobler meget",
        b: "Hvis vandet er varmt at røre ved",
        c: "Hvis vandet er koldt at røre ved"
      },
      correctAnswer: "a"
    },
    {
      question: "Hvad tilsætter man for at få vandet til at koge hurtiger?",
      answers: {
        a: "peber",
        b: "salt",
        c: "Intet"
      },
      correctAnswer: "b"
    },

    {
      question: "Hvad får brød til at hæve?",
      answers: {
        a: "Sukker",
        b: "Mel",
        c: "Æg",
        d: "Gær"
      },
      correctAnswer: "d"
    },
    {
      question: "Hvilke to krydderier bruger man mest?",
      answers: {
        a: "Salt og peber",
        b: "Chili og paprika",
        c: "Kanel og sukker",
      },
      correctAnswer: "a"
    },
    {
      question: "Hvilken krydderi er mest stærk?",
      answers: {
        a: "Paprika",
        b: "Chili",
        c: "Kanel",
        d: "Salt"
      },
      correctAnswer: "b"
    }
  ];

  // Kick things off
  buildQuiz();

  // Event listeners
  submitButton.addEventListener('click', showResults);
})();
