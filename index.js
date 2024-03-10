function vowelCount() {
  let word = document.getElementById("q1").value;
  let length = word.length;
  let vowelCount = 0;
  let vowels = ["a", "e", "i", "o", "u"];

  if (length === 0) {
    document.getElementById("q1Result").style.color = "red";
    document.getElementById("q1Result").innerText = "Missing input";
    return;
  }

  for (let i = 0; i < length; i++) {
    if (vowels.indexOf(word.charAt(i).toLowerCase()) !== -1) {
      vowelCount++;
    }
  }
  //console.log(vowelCount);
  document.getElementById("q1Result").style.color = "black";
  document.getElementById("q1Result").innerText = vowelCount + " vowels and " + (length - vowelCount) + " consonants in " + word;
}

function isPalindrome() {
  let number = document.getElementById("q2").value;
  let length = number.length;

  if (length === 0) {
    document.getElementById("q2Result").style.color = "red";
    document.getElementById("q2Result").innerText = "Missing input";
    return;
  } else if (number.charAt(0) === "-") {
    document.getElementById("q2Result").style.color = "red";
    document.getElementById("q2Result").innerText = "Negative numbers are not supported";
    return;
  }
  document.getElementById("q2Result").style.color = "black";
  for (let i = 0, k = length - 1; i !== k && k >= 0; i++, k--) {
    //console.log(number.charAt(k) + "\n" + number.charAt(i));
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
    document.getElementById("q3Result").innerText = "Missing input";
    return;
  }
  subtotal = Number(subtotal);
  tipPercentage = Number(tipPercentage);

  if (tipPercentage < 0 || subtotal < 0) {
    document.getElementById("q3Result").style.color = "red";
    document.getElementById("q3Result").innerText = "Numbers must be positive";
    return;
  } else if (tipPercentage < 1 && tipPercentage > 0) {
    document.getElementById("q3Result").style.color = "red";
    document.getElementById("q3Result").innerText = "Enter tip as a percentage not a decimal Ex: 20%";
    return;
  }

  let total = subtotal + subtotal * (tipPercentage / 100);
  document.getElementById("q3Result").style.color = "black";
  document.getElementById("q3Result").innerText = "Total: $" + Math.round(total * 100) / 100;
}
