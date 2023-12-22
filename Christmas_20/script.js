var myQuestions = [
  {
    question: "How many ghosts show up in A Christmas Carol?",
    answers: {
      a: '3',
      b: '4',
      c: '1'
    },
    correctAnswer: 'b'
  },
  {
    question: "Which country started the tradition of putting up a Christmas tree?",
    answers: {
      a: 'Norway',
      b: 'China',
      c: 'Germany'
    },
    correctAnswer: 'c'
  },
  {
    question: "How do you say Merry Christmas in Spanish?",
    answers: {
      a: 'Feliz Navidad',
      b: 'God jula',
      c: 'Buon Natale'
    },
    correctAnswer: 'a'
  },
  {
    question: "What are Christmas trees also called?",
    answers: {
      a: 'Yule-Tree',
      b: 'Little Tree',
      c: 'Green Thing'
    },
    correctAnswer: 'a'
  }
];

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');
var currentQuestion = 0;
var userAnswers = [];
var numCorrect = 0;

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton, currentQuestion, userAnswers);

function generateQuiz(questions, quizContainer, resultsContainer, submitButton, currentQuestion, userAnswers) {

  function showQuestion(questionNumber) {
    var question = questions[questionNumber];
    var answers = [];

    for (var letter in question.answers) {
      answers.push(
        '<label>'
        + '<input type="radio" name="question" value="' + letter + '">'
        + letter + ': '
        + question.answers[letter]
        + '</label>'
      );
    }

    quizContainer.innerHTML =
      '<div class="question">' + question.question + '</div>'
      + '<div class="answers">' + answers.join('') + '</div>';
  }

  function showNextQuestion() {
    var answerContainer = quizContainer.querySelector('.answers');
    var userAnswer = (answerContainer.querySelector('input[name=question]:checked') || {}).value;

    userAnswers.push({
      question: questions[currentQuestion].question,
      answer: userAnswer,
      isCorrect: userAnswer === questions[currentQuestion].correctAnswer
    });

    if (userAnswer === questions[currentQuestion].correctAnswer) {
      answerContainer.style.color = 'lightgreen';
      numCorrect++;
    } else {
      answerContainer.style.color = 'red';
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {
      showQuestion(currentQuestion);
    } else {
      showResults();
    }
  }

  function showResults() {
    resultsContainer.innerHTML = 'Quiz completed! You scored ' + numCorrect + ' out of ' + questions.length + '.<br><br>';
    for (var i = 0; i < userAnswers.length; i++) {
      var res = userAnswers[i];
      resultsContainer.innerHTML += 'Question: ' + res.question + '<br>';
      resultsContainer.innerHTML += 'Your answer: ' + res.answer + '<br>';
      resultsContainer.innerHTML += 'Correct: ' + (res.isCorrect ? 'Yes' : 'No') + '<br><br>';
    }
  }

  showQuestion(currentQuestion);

  submitButton.onclick = showNextQuestion;
}
