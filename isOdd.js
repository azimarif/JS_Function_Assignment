function isOdd(number) {
  let result = false;
  if (number % 2 != 0) {
    result = true;
  }
  return result;
}

let number = process.argv[2];
console.log(isOdd(number));