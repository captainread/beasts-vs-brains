const start = document.getElementById("start");
const intro = document.getElementById("intro");
const restart = document.getElementById("restart");
const question = document.getElementById("question");
const answer1 = document.getElementById("1");
const answer2 = document.getElementById("2");
const answer3 = document.getElementById("3");
const quiz = document.getElementById("quiz");
const result = document.getElementById("result");
const factoid = document.getElementById("factoid");
const next = document.getElementById("next");
start.addEventListener("click", startQuiz);
restart.addEventListener("click", restartFunc);

function restartFunc() {
  window.location.reload();
}

function startQuiz() {
  intro.style.display = "none";
  intro2.style.display = "none";
  start.style.display = "none";
  restart.style.display = "block";
  quizTitle.style.display = "none";
  quiz.style.display = "block";
  renderQuestion();
}

let questions = [
  {
    question: "Question 1: In which country can you find the smallest jellyfish?",
    answer1: "China",
    answer2: "South Africa",
    answer3: "Australia",
    correct: answer3,
    imgurl:
      "https://i.guim.co.uk/img/media/28982615dfe4a8a69c5095711619b1432b1a1567/0_63_1800_1080/master/1800.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=8a1a0286b780bde80c38d0929080725e",
    fact: "The Irukandji box jellyfish (native to northern Australia) has an average size of only 1cm... but its venomous sting can be fatal to humans.",
  },
  {
    question: "Question 2: What animals are 'Holstein Friesians'?",
    answer1: "Cows",
    answer2: "Horses",
    answer3: "Dogs",
    correct: answer1,
    imgurl: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Holstein_Friesian_UK_Yorkshire_July_2011.jpg",
    fact: "Originating in the Netherlands and Germany, this breed of cattle is the world's most prolific dairy producer.",
  },
  {
    question: "Question 3: In the Malay language, what does 'orangutan' translate to?",
    answer1: "Red ape",
    answer2: "Man of the forest",
    answer3: "Durian eater",
    correct: answer2,
    imgurl:
      "https://images.theconversation.com/files/225151/original/file-20180627-112641-idgmo2.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=900.0&fit=crop",
    fact: "The name 'orangutan' derives from the Malay words orang ('person'), and hutan ('forest'). They are among the most intelligent primates.",
  },
  {
    question: "Question 4: On average, which of these is the longest member of the cat family?",
    answer1: "Siberian Tiger",
    answer2: "Lion",
    answer3: "Leopard",
    correct: answer1,
    imgurl: "https://animalfactguide.com/wp-content/uploads/2013/01/iStock_000005688478XSmall.jpg",
    fact: 'Measuring from nose to tail tip, tigers are top of the board at 130", followed by leopards (126") and lions (110").',
  },
  {
    question: "Question 5: What kind of animal family does 'Columbidae' refer to?",
    answer1: "Reptile",
    answer2: "Bird",
    answer3: "Insect",
    correct: answer2,
    imgurl: "https://www.allaboutbirds.org/guide/assets/photo/308119951-480px.jpg",
    fact: "This bird family consists of doves and pigeons. In English, we typically refer to the smaller species as doves, and the larger as pigeons.",
  },
];

let score = 0;
let questionsLength = questions.length - 1;
let currentQuestion = 0;

function renderQuestion() {
  result.style.display = "none";
  factoid.style.display = "none";
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

const correctText = ["You got it!", "Nicely done!", "Bang on!"];
const wrongText = ["Oops... not that one.", "Sorry, that's not right.", "Wrong answer, I'm afraid."];
const wrongImages = [
  "https://media.tenor.com/images/d1c81eafdc947e7ad1989da43bc65f32/tenor.png",
  "https://static5.depositphotos.com/1005818/444/i/600/depositphotos_4443131-stock-photo-wrong-sign.jpg",
  "https://previews.123rf.com/images/kk5hy/kk5hy0707/kk5hy070700359/1267937-man-furious-with-his-bad-stock-trades-taking-it-out-on-his-computer-by-shooting-at-it-.jpg?fj=1",
  "https://media.istockphoto.com/id/484016185/photo/mistake-concepts-with-oops-message-on-keyboard.jpg?s=612x612&w=0&k=20&c=6b6Jroit448b9KBk-dowlDxH6uGP5nyr7A8hPIlAsVs=",
  "https://images.complex.com/complex/images/c_fill,f_auto,g_center,w_1200/fl_lossy,pg_1/bujewhyvyyg08gjksyqh/spongebob",
];

function answerCorrect() {
  score++;
  result.style.display = "block";
  factoid.style.display = "block";
  result.innerText = correctText[Math.floor(Math.random() * correctText.length)];
  const image = document.createElement("img");
  image.src = questions[currentQuestion].imgurl;
  image.style.maxHeight = "33vh";
  result.appendChild(image);
  factoid.innerText = questions[currentQuestion].fact;
  nextQuestion();
}

function answerWrong() {
  result.style.display = "block";
  result.innerText = wrongText[Math.floor(Math.random() * wrongText.length)];
  const image = document.createElement("img");
  image.src = wrongImages[Math.floor(Math.random() * wrongImages.length)];
  image.style.maxHeight = "33vh";
  result.appendChild(image);
  nextQuestion();
}

https: function nextQuestion() {
  if (currentQuestion < questionsLength) {
    quiz.appendChild(next);
    currentQuestion++;
    next.style.display = "block";
    next.addEventListener("click", () => {
      renderQuestion();
      next.style.display = "none";
    });
  } else {
    const end = document.createElement("h2");
    end.innerText = `Quiz complete. You scored ${score}/${questions.length}.`;
    if (score === questions.length) {
      end.innerText += " You aced it!";
    }
    if (score === 0) {
      end.innerText += " You totally bombed!";
    }
    quiz.appendChild(end);
  }
}
