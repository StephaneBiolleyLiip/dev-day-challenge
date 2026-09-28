// Les questions du quiz. Chaque question a un texte, une liste de réponses
// possibles, et l'index (position) de la bonne réponse dans cette liste.
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

// TODO Milestone 1: affiche la première question (questions[0]) et ses
// réponses dans la div #quiz.
// Indice: document.getElementById("quiz"), puis .innerHTML ou createElement

// TODO Milestone 2: quand on clique sur une réponse, indique si c'est
// correct ou pas.

// TODO Milestone 3: passe à la question suivante après une réponse.

// TODO Milestone 4: à la fin, affiche le score total.
