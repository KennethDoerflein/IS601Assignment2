document.getElementById("q1").onkeyup = vowelCount;
document.getElementById("q1").onchange = vowelCount;

document.getElementById("q2").onkeyup = isPalindrome;
document.getElementById("q2").onchange = isPalindrome;

document.getElementById("q3Total").onkeyup = tipCalculate;
document.getElementById("q3Total").onchange = tipCalculate;
document.getElementById("q3Tip").onkeyup = tipCalculate;
document.getElementById("q3Tip").onchange = tipCalculate;

function vowelCount() {
  let word = document.getElementById("q1").value;
  let length = word.length;
  let vowelCount = 0;
  let consonantCount = 0;
  let vowels = ["a", "e", "i", "o", "u"];
  let consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];

  if (length === 0) {
    document.getElementById("q1Result").style.color = "red";
    document.getElementById("q1Result").innerText = "Missing/Invalid input";
    return;
  }

  for (let i = 0; i < length; i++) {
    if (vowels.indexOf(word.charAt(i).toLowerCase()) !== -1) {
      vowelCount++;
    }
    if (consonants.indexOf(word.charAt(i).toLowerCase()) !== -1) {
      consonantCount++;
    }
  }
  document.getElementById("q1Result").style.color = "black";
  document.getElementById("q1Result").innerText = vowelCount + " vowels and " + consonantCount + ' consonants in "' + word + '"';
}

function isPalindrome() {
  let number = document.getElementById("q2").value;
  let length = number.length;

  if (length === 0) {
    document.getElementById("q2Result").style.color = "red";
    document.getElementById("q2Result").innerText = "Missing/Invalid input";
    return;
  } else if (number.indexOf("-") !== -1) {
    document.getElementById("q2Result").style.color = "red";
    document.getElementById("q2Result").innerText = "Negative numbers are not supported";
    return;
  }
  document.getElementById("q2Result").style.color = "black";
  for (let i = 0, k = length - 1; i !== k && k >= 0; i++, k--) {
    if (number.charAt(k) !== number.charAt(i)) {
      document.getElementById("q2Result").innerText = number + " is not a palindrome";
      return;
    }
  }
  document.getElementById("q2Result").innerText = number + " is a palindrome";
}

function tipCalculate() {
  let subtotal = document.getElementById("q3Total").value;
  let tipPercentage = document.getElementById("q3Tip").value;
  if (subtotal === "" || tipPercentage === "") {
    document.getElementById("q3Result").style.color = "red";
    document.getElementById("q3Result").innerText = "Missing/Invalid input";
    return;
  }
  subtotal = Number(subtotal);
  tipPercentage = Number(tipPercentage);

  if (tipPercentage < 0 || subtotal < 0) {
    document.getElementById("q3Result").style.color = "red";
    document.getElementById("q3Result").innerText = "Numbers must be positive";
    document.getElementById("q3Subtotal").innerText = "";
    document.getElementById("q3CalcTip").innerText = "";
    return;
  } else if (tipPercentage < 1 && tipPercentage > 0) {
    document.getElementById("q3Result").style.color = "red";
    document.getElementById("q3Result").innerText = "Enter tip as a percentage not a decimal Ex: 20%";
    document.getElementById("q3Subtotal").innerText = "";
    document.getElementById("q3CalcTip").innerText = "";
    return;
  }
  const usdOptions = { style: "currency", currency: "USD" };
  const currencyFormatter = new Intl.NumberFormat("en-US", usdOptions);
  let tip = subtotal * (tipPercentage / 100);
  let total = subtotal + tip;
  document.getElementById("q3Result").style.color = "black";
  document.getElementById("q3Subtotal").innerText = "Subtotal: " + currencyFormatter.format(subtotal);
  document.getElementById("q3CalcTip").innerText = "Tip: " + currencyFormatter.format(tip);
  document.getElementById("q3Result").innerText = "Total: " + currencyFormatter.format(total);
}
