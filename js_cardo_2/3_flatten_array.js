// CHALLENGE 3: Flatten Arrays
// Take an array of arrays and flatten to a single array
const flattened_array = arrays => {
  let flattened_array = [];
  arrays.map(sub_array => {
    sub_array.map(element => {
      flattened_array.push(element);
    });
  });
  console.log(flattened_array);
};

flattened_array([[1, 2], [3, 4], [5, 6], [7]]);
