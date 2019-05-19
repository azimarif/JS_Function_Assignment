function evenSeries(maxNumber) {
  for (let number = 1; number <= maxNumber; number++) {
    if (number % 2 == 0) {
      console.log(number);
    }
  }
}

let maxNumber = process.argv[2];
evenSeries(maxNumber);