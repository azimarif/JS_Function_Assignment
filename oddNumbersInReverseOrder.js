function oddSeriesInReverse(maxNumber) {
  for (let number = maxNumber; number > 0; number--) {
    if (number % 2 != 0) {
      console.log(number);
    }
  }
}

let maxNumber = process.argv[2];
oddSeriesInReverse(maxNumber);