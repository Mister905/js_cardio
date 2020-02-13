// CHALLENGE 2: Array Chunking
// Split an array into chunked arrays of a specific length
const chunk_array = (array, chunk_length) => {
  let chunked_array = [];

  let i = 0;

  while (i < array.length) {
    // Slice out from the index to the index + the chunk length
    // And push to the chunked array
    chunked_array.push(array.slice(i, i + chunk_length));
    i += chunk_length;
  }

  console.log(chunked_array);
};

chunk_array([1, 2, 3, 4, 5, 6, 7], 3);
