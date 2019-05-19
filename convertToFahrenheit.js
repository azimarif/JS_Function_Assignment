function convertToFahrenheit(centigrade) {
  return ((centigrade * 9) / 5) + 32;
}

let centigrade = process.argv[2];

console.log(convertToFahrenheit(centigrade));