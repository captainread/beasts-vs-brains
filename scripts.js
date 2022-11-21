const start = document.getElementById("start");
const restart = document.getElementById("restart");
const question = document.getElementById("question");
const answer1 = document.getElementById("1");
const answer2 = document.getElementById("2");
const answer3 = document.getElementById("3");
const quiz = document.getElementById("quiz");
const result = document.getElementById("result");

start.addEventListener("click", startQuiz);
restart.addEventListener("click", restartFunc);

function restartFunc() {
  window.location.reload();
}

function startQuiz() {
  start.disabled = "true";
  quiz.style.display = "block";
  renderQuestion();
}

let questions = [
  {
    question:
      "Question 1: In which country can you find the smallest jellyfish?",
    answer1: "China",
    answer2: "South Africa",
    answer3: "Australia",
    correct: answer3,
  },
  {
    question: "Question 2: What animals are 'Holstein Friesians'?",
    answer1: "Cows",
    answer2: "Horses",
    answer3: "Dogs",
    correct: answer1,
  },
  {
    question:
      "Question 3: In the Malay language, what does 'orangutan' translate to?",
    answer1: "Red ape",
    answer2: "Man of the forest",
    answer3: "Durian eater",
    correct: answer2,
  },
];

let score = 0;
let questionsLength = questions.length - 1;
let currentQuestion = 0;

function renderQuestion() {
  result.style.display = "none";
  let q = questions[currentQuestion];
  answer1.disabled = false;
  answer2.disabled = false;
  answer3.disabled = false;
  question.innerHTML = "<p>" + q.question + "</p>";
  answer1.innerHTML = q.answer1;
  answer2.innerHTML = q.answer2;
  answer3.innerHTML = q.answer3;
}

function checkAnswer(answer) {
  answer1.disabled = true;
  answer2.disabled = true;
  answer3.disabled = true;
  if (questions[currentQuestion].correct === answer) {
    answerCorrect();
  } else {
    answerWrong();
  }
}

const nextButton = document.createElement("button");
nextButton.innerHTML = "Next Question";

function answerCorrect() {
  score++;
  result.style.display = "block";
  result.innerText = " You got it!";
  nextQuestion();
}

function answerWrong() {
  result.style.display = "block";
  result.innerText = " Sorry, that's not right.";
  nextQuestion();
}

function nextQuestion() {
  document.body.appendChild(nextButton);
  if (currentQuestion < questionsLength) {
    currentQuestion++;
    nextButton.style.display = "block";
    nextButton.addEventListener("click", () => {
      renderQuestion();
      nextButton.style.display = "none";
    });
  } else {
    const end = document.createElement("h2");
    end.innerText = "Quiz complete. You scored: ";
    end.innerText += score
    document.body.appendChild(end);
  }
}
