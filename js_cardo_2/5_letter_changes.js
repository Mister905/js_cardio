// CHALLENGE 5: Letter Changes
// Change every letter of the string to the one that follows it
// and capitalize the vowels
const letter_changes = string => {
  let formatted_string = string.replace(/[a-z]/gi, char => {
    if (char === "z" || char === "Z") {
      return "a";
    } else {
      return String.fromCharCode(char.charCodeAt() + 1);
    }
  });

  console.log(formatted_string)
};

letter_changes("Hello There");
