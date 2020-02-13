// CHALLENGE 2: Sum All Primes
// Pass in a number to loop up to and add all of the prime numbers.
// A prime number is a whole number greater than 1, whose only
// factors are 1 and itself

const sum_all_primes = ceiling => {
  is_prime = num => {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  };

  let prime_sum = 0;

  for (let i = 2; i <= ceiling; i++) {
    if (is_prime(i)) {
      prime_sum += i;
    }
  }

  console.log(prime_sum);
};

sum_all_primes(100);
