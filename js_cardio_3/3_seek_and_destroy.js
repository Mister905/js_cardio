// CHALLENGE 3: Seek & Destroy
// Remove from the array whatever is in the following arguments.
// Return the leftover values in an array
// e.g. seek_and_destroy([2, 3, 4, 6, 6, "hello"], 2, 6); == [3, 4, 'hello]

const seek_and_destroy = (array, ...rest) => {
  let filtered_array = array.filter(item => !rest.includes(item));
  console.log(filtered_array);
};

seek_and_destroy([2, 3, 4, 6, 6, "hello"], 2, 6);
