function calculateSquare(number) {
  return number * number;
}

let number = process.argv[2];

console.log(calculateSquare(number));