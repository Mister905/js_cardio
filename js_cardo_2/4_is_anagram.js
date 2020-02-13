// CHALLENGE 4: Is Anagram
// Return true if anagram and false if not
const is_anagram = (string_1, string_2) => {
  let formatted_string_1 = string_1
    .replace(/ /g, "")
    .toLowerCase()
    .split("")
    .sort()
    .join("");
  let formatted_string_2 = string_2
    .replace(/ /g, "")
    .toLowerCase()
    .split("")
    .sort()
    .join("");

  console.log(formatted_string_1 === formatted_string_2);
};

is_anagram("elbow", "below");

is_anagram("rail safety", "fairy tales");

is_anagram("George Bush", "he bugs Gore");
