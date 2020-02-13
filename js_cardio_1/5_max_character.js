// CHALLENGE 5: Max Character
// Return the most frequent character that occurs in a string
const max_character_1 = string => {
  // use / /g to remove all spaces from the string
  // let stripped_string = string.replace(/ /g, "");
  // Create key/value pairs
  let char_map = {};

  // stripped_string.split("").forEach(char => {
  string.split("").forEach(char => {
    if (char !== " ") {
      if (char_map[char]) {
        // Increment the key's value
        char_map[char]++;
      } else {
        // Initalize the key's value
        char_map[char] = 1;
      }
    }
  });

  let max_count = 0;
  let max_char = "";

  for (const char in char_map) {
    if (char_map[char] > max_count) {
      max_count = char_map[char];
      max_char = char;
    }
  }

  console.log(`${max_char.toString()}: ${max_count}`);
};

max_character_1("The quick brown fox jumps over the lazy dog");
