const palindromes = function (string) {
  const parsed = string.toLowerCase().replace(/[^a-zA-Z0-9]+/g, '');
  let reverse = '';
  for (let i = parsed.length - 1; i >= 0; i--) {
    reverse = reverse.concat(parsed.charAt(i));
  }
  return reverse === parsed;
};

// Do not edit below this line
module.exports = palindromes;
