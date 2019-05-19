function evenInReverse(maxNumber) {
  for (let number = maxNumber; number > 1; number--) {
    if (number % 2 == 0) {
      console.log(number);
    }
  }
}

let maxNumber = process.argv[2];
evenInReverse(maxNumber);