// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// METHOD 1
// function reverse(string) {
//   let reversed_string = string
//     .split("")
//     .reverse()
//     .join("");

//   return reversed_string;
// }

// METHOD 2
// function reverse(string) {
//   let array = string.split("");
//   let reversed_string = "";
//   for (let i = array.length - 1; i >= 0; i--) {
//     reversed_string += array[i];
//   }
//   return reversed_string;
// }

// Your reducer function's returned value is assigned to the
// accumulator, whose value is remembered across each iteration
// throughout the array, and ultimately becomes the final, single
// resulting value.
// function reverse(string) {
//   return string.split("").reduce((reversed, character) => {
//     return character + reversed;
//   }, "");
// }

module.exports = reverse;
