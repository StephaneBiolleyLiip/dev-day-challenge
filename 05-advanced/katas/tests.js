function test(nom, actual, expected) {
  const ok = JSON.stringify(actual) === JSON.stringify(expected);
  const p = document.createElement("p");
  p.textContent = `${ok ? "✅" : "❌"} ${nom} (obtenu: ${JSON.stringify(actual)}, attendu: ${JSON.stringify(expected)})`;
  document.getElementById("results").appendChild(p);
}

test("estPalindrome('kayak')", estPalindrome("kayak"), true);
test("estPalindrome('bonjour')", estPalindrome("bonjour"), false);

test("sommeDesPairs([1,2,3,4,5,6])", sommeDesPairs([1, 2, 3, 4, 5, 6]), 12);
test("sommeDesPairs([1,3,5])", sommeDesPairs([1, 3, 5]), 0);

test("estPremier(7)", estPremier(7), true);
test("estPremier(8)", estPremier(8), false);
test("estPremier(1)", estPremier(1), false);

test("doublons([1,2,2,3,3,3,4])", doublons([1, 2, 2, 3, 3, 3, 4]).sort(), [2, 3]);
test("doublons([1,2,3])", doublons([1, 2, 3]), []);
