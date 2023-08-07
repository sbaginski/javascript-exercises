const convertToCelsius = function(temp) {
  const converted = (temp - 32) * 5 / 9;
  return Math.round(10 * converted) / 10;
};

const convertToFahrenheit = function(temp) {
  const converted = (temp * 9 / 5 + 32);
  return Math.round(10 * converted) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
