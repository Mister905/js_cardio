// CHALLENGE 1: Reverse a string

// METHOD 1
const reversed_string_1 = string => {
  /* The split() method turns a String into an array of strings, 
    by separating the string at each instance of a specified 
    separator string. */
  let string_array = string.split("");
  let reversed_array = [];
  for (let i = string_array.length; i >= 0; i--) {
    const element = string_array[i];
    reversed_array.push(element);
  }
  /* The join() method creates and returns a new string by 
    concatenating all of the elements in an array, separated by commas or a specified separator string. */
  let reversed_string = reversed_array.join("");
  console.log(reversed_string);
};

reversed_string_1("hello");

// METHOD 2
const reversed_string_2 = string => {
  let reversed_string = string
    .split("")
    .reverse()
    .join("");
  console.log(reversed_string);
};

reversed_string_2("hello");

// METHOD 3
const reversed_string_3 = string => {
  /* The reduce() method executes a reducer function (that you 
    provide) on each element of the array, resulting in a single 
    output value. */
  let reversed_string = string.split("").reduce((reversed_string, char) => {
    console.log(reversed_string);
    return char + reversed_string;
  }, "");
  console.log(reversed_string);
};

reversed_string_3("hello");
