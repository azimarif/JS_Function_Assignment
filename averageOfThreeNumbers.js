function average(first, second, third) {
  return first + second + third / 3;
}

let firstNo = process.argv[2];
let secondNo = process.argv[3];
let thirdNo = process.argv[4];
console.log(average(firstNo, secondNo, thirdNo);