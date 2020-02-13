// CHALLENGE 2: Validate a Palindrome
const is_palindrome_1 = string => {
  let array = string.split("");
  /* Array.prototype.reverse reverses the contents of the original 
  array. To avoid altering the contents of the original array you 
  can use slice() to make a copy then reverse() it */
  let reversed_array = array.slice().reverse();
  let is_palindrome = true;
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < reversed_array.length; j++) {
      if (array[i].toLowerCase() !== reversed_array[i].toLowerCase()) {
        is_palindrome = false;
      }
    }
  }
  console.log(is_palindrome);
};

is_palindrome_1("derp");

const is_palindrome_2 = string => {
  let reversed_string = string
    // Convert to array
    .split("")
    // Reverse array
    .reverse()
    // Create new string with concatenation
    .join("");
  console.log(string === reversed_string);
};

is_palindrome_2("anna");
