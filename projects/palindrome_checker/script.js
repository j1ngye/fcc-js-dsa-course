const textInput = document.getElementById("text-input");
const result = document.getElementById("result");
const checkBtn = document.getElementById("check-btn");

function cleanText(text) {
  const regex = /[a-zA-Z0-9]/;

  return text
    .split("")
    .filter((char) => char.match(regex) !== null)
    .join("");
}

function isPalindrome(text) {
  const newText = cleanText(text).toLowerCase();
  const reversed = newText.split("").reverse().join("");

  return newText === reversed;
}
checkBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const textVal = textInput.value;
  if (textVal === "") {
    alert("Please input a value.");
    return;
  }
  result.textContent = isPalindrome(textVal)
    ? `${textVal} is a Palindrome`
    : `${textVal} is not a Palindrome`;
});
