function factorial(number) {
  let factorial = 1;
  for (let multiplier = 1; multiplier <= number; multiplier++) {
    factorial = factorial * multiplier;
  }
  return factorial;
}

let number = process.argv[2];
console.log("Factorial of " + number + " = " + factorial(number));