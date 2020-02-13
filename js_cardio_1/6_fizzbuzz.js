/* 
CHALLENGE 6: Fizzbuzz
Write a program that prints all the numbers from 1 to 100. For multiples 
of 3, print "Fizz", for multiples of 5 print "Buzz". For numbers which are 
multiples of both 3 and 5, print "Fizzbuzz" */
const fizzbuzz = () => {
  for (let i = 1; i <= 100; i++) {
    // The key is to test for this condition first
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("Fizzbuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
};

fizzbuzz();
