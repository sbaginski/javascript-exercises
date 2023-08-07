const removeFromArray = function(array) {
  let output = array;
  for (const arg of arguments) {
    output = output.filter(item => item !== arg);
  }
  const finalOutput = output;
  return finalOutput;
};

// Do not edit below this line
module.exports = removeFromArray;
