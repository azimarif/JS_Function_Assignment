function calculateCI(principal, rate, year) {
  let amount = principal * Math.pow((1 + rate / 100), year);
  return (amount - principal);
}

let principal = process.argv[2];
let rate = process.argv[3];
let year = process.argv[4];
console.log(calculateCI(principal, rate, year));