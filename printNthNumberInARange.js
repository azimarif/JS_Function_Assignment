function printingNthTerm(firstNumber, lastNumber, gap) {
  for (let number = firstNumber; number <= lastNumber; number += gap) {
    console.log(number);
  }
}

let firstNumber = process.argv[2];
let lastNumber = process.argv[3];
let gap = process.argv[4];
printingNthTerm(firstNumber, lastNumber, gap);