/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  // Your code here
  const lowerStr = str.toLowerCase();

  // Define the set of vowels
  const vowels = new Set(["a", "e", "i", "o", "u"]);

  // Use the Array.from method to convert the string into an array of characters,
  // then use reduce to count the number of vowels
  const vowelCount = Array.from(lowerStr).reduce((count, char) => {
    if (vowels.has(char)) {
      count++;
    }
    return count;
  }, 0);

  return vowelCount;
}

module.exports = countVowels;
