function multiplicationTable(number, multiplyUpto) {
  for (let multiplier = 1; multiplier <= multiplyUpto; multiplier++) {
    console.log(number * multiplier);
  }
}

let number = process.argv[2];
let multiplyUpto = process.argv[3];
multiplicationTable(number, multiplyUpto);