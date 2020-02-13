// CHALLENGE 3: Reverse an Integer
const reverse_int_1 = int => {
  let reversed_int = int
    .toString()
    .split("")
    .reverse()
    .join("");
  // Convert the string to an integer
  console.log(parseInt(reversed_int));
};

reverse_int_1(159);
