# Live data : le quiz avec de vraies questions

Jusqu'ici, les questions étaient écrites à l'avance dans le code. Ici, ton quiz doit aller chercher ses questions sur internet, en direct, via une API publique.

## L'API

[Open Trivia Database](https://opentdb.com/) fournit des questions de quiz gratuitement, sans clé ni compte. Exemple d'appel :

```
https://opentdb.com/api.php?amount=5&type=multiple
```

Colle cette adresse dans ton navigateur pour voir à quoi ressemble la réponse (au format JSON).

## Ce que tu dois faire

1. Utilise `fetch()` pour appeler cette adresse depuis ton JavaScript
2. Récupère la réponse (elle contient un tableau `results`, avec pour chaque question : `question`, `correct_answer`, `incorrect_answers`)
3. Affiche les questions une par une, comme dans le quiz que tu as déjà construit
4. Attention : les questions sont en anglais, et certains caractères spéciaux apparaissent codés bizarrement (ex: `&quot;`). C'est normal, cherche "décoder entités HTML en JavaScript" si ça te gêne.

## Indices si tu bloques

- `fetch(url).then(response => response.json()).then(data => ...)` est le point de départ classique
- Ou, avec `async/await` (plus lisible) :
  ```js
  async function chargerQuestions() {
    const response = await fetch(url);
    const data = await response.json();
    return data.results;
  }
  ```
- Les réponses ne sont pas dans un ordre mélangé par l'API : c'est à toi de mélanger bonne réponse + mauvaises réponses avant de les afficher, sinon la bonne réponse est toujours au même endroit
