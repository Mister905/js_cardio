/* CHALLENGE 1: Longest Word
Return the longest word of a string
If more than one longest word, put into an array */

const longest_word = string => {
  let array = string.toLowerCase().split(" ");
  /* Descending Sort
  The sort() method sorts the elements of an array in place and 
  returns the sorted array. The default sort order is ascending. 
  The following compare function defines a descending order
  */
  let sorted_array = array.sort((a, b) => {
    return b.length - a.length;
  });

  let longest_word_array = sorted_array.filter(word => {
    return word.length === sorted_array[0].length;
  });

  if (longest_word_array.length > 1) {
    console.log(longest_word_array);
  } else {
    console.log(longest_word_array[0]);
  }
};

longest_word("The quick brown fox jumps over the lazy dog");
