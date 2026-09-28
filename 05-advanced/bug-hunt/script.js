const questions = [
  {
    text: "Quel langage sert à structurer le contenu d'une page web ?",
    answers: ["CSS", "HTML", "Python"],
    correctIndex: 1,
  },
  {
    text: "Quel langage permet de rendre une page web interactive ?",
    answers: ["JavaScript", "SQL", "Markdown"],
    correctIndex: 0,
  },
  {
    text: "Que veut dire 'CSS' ?",
    answers: ["Cascading Style Sheets", "Computer Style System", "Creative Sheet Styling"],
    correctIndex: 0,
  },
  {
    text: "Quel outil permet de suivre l'historique des changements d'un code ?",
    answers: ["Git", "Docker", "Figma"],
    correctIndex: 0,
  },
  {
    text: "Dans un navigateur, quelle touche ouvre la console de développement ?",
    answers: ["F5", "F12", "Ctrl+P"],
    correctIndex: 1,
  },
];

let current = 0;
let score = 0;

function renderQuestion() {
  const quiz = document.getElementById("quizz");
  const q = questions[current];
  quiz.innerHTML = `<h2>${q.text}</h2>`;
  q.answers.forEach((answer, index) => {
    const button = document.createElement("button");
    button.textContent = answer;
    button.addEventListener("click", () => selectAnswer(index));
    quiz.appendChild(button);
  });
}

function selectAnswer(index) {
  const q = questions[current];
  if (index === q.correctIndex) {
    score++;
    alert("Bonne réponse !");
    current++;
  } else {
    alert("Mauvaise réponse...");
  }

  if (current < questions.length) {
    renderQuestion();
  } else {
    showScore();
  }
}

function showScore() {
  const quiz = document.getElementById("quiz");
  quiz.innerHTML = `<h2>Score final : ${score} / ${questions.length - 1}</h2>`;
}

renderQuestion();
