// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// METHOD !
// function palindrome(string) {
//   let reversed_string = string
//     .split("")
//     .reverse()
//     .join("");
//   return string === reversed_string;
// }

// METHOD 2
function palindrome(string) {
  let reversed_string = string.split("").reduce((acc, cur) => {
    return cur + acc;
  });
  return string === reversed_string;
}

module.exports = palindrome;
