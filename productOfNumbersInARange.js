function productOfNumbers(firstNumber, lastNumber) {
  let product = 1;
  for (let number = firstNumber; number <= lastNumber; number++) {
    product *= number;
  }
  return product;
}

let firstNumber = process.argv[2];
let lastNumber = process.argv[3];
console.log(productOfNumbers(firstNumber, lastNumber));