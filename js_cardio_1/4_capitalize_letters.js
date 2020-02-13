// CHALLENGE 4: Capitalize letters
// Return a string with the first letter of every word capitalized
const capitalize_letters_1 = string => {
  let array = string.split(" ");

  let capitalized_char_array = array.map(item => {
    let item_array = item.split("");
    item_array[0] = item_array[0].toUpperCase();
    return item_array;
  });
  // console.log(capitalized_char_array);

  let capitalized_string_array = capitalized_char_array.map(array => {
    return array.join("");
  });
  // console.log(capitalized_string_array);

  let capitalized_string = capitalized_string_array.join(" ");
  console.log(capitalized_string);
};

capitalize_letters_1("The quick brown fox jumps over the lazy dog");
