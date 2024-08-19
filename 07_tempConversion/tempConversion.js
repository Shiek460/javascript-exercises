const convertToCelsius = function(degreeF) {
  let celsius = (5/9) * (degreeF - 32);
  celsius = parseFloat(celsius.toFixed(1));
  return celsius;
};

const convertToFahrenheit = function(degreeC) {
  let far = (degreeC * 1.8) + 32;
  far = parseFloat(far.toFixed(1));
  return far;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
