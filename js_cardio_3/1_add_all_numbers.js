// CHALLENGE 1: Add All Numbers
// Return a sum of all parameters entered regardless of the
// amount of numbers

const add_all = (...rest) => {
  let sum = 0;
  rest.map(item => (sum += item));
  console.log(sum);
};

add_all(2, 5, 6, 7);
