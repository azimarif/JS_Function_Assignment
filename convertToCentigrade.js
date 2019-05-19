function convertToCentigrade(fahrenheit) {
  return (fahrenheit - 32) / (9 / 5);
}

let fahrenheit = process.argv[2];

console.log(convertToCentigrade(fahrenheit));