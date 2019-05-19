function calculateSI(principal, rate, year) {
  return (principal * rate * year) / 100;
}

let principal = process.argv[2];
let rate = process.argv[3];
let year = process.argv[4];

console.log(calculateSI(principal, rate, year));