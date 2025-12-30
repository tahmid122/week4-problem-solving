//! Problem 01 -> Reverse a string

const reverseString = (string) => {
  const reverseString = string.split("").reverse().join("");
  return reverseString;
};
const result1 = reverseString("Tahmid");
console.log("Reverse a string-> ", result1);

//! Problem 02 -> Check if string is palindrome (ignore case, spaces, punctuation)

const isPalindrome = (string) => {
  const reverseString = string.split("").reverse().join("");
  if (
    string.toLowerCase().trim().replaceAll(" ", "") ===
    reverseString.toLowerCase().trim().replaceAll(" ", "")
  )
    return true;
  return false;
};
const result2 = isPalindrome("Ma dam");
console.log("Is Palindrome-> ", result2);

//! Problem 3 -> Remove duplicates from array (multiple ways)
const arr1 = [1, 1, 2, 3, 3, 4, 5];
const RemoveDuplicatesWay1 = (arr) => {
  const uniqueArr = [...new Set(arr)];
  return uniqueArr;
};
const result3Way1 = RemoveDuplicatesWay1(arr1);

const RemoveDuplicatesWay2 = (arr) => {
  const uniqueArr = [];
  for (const number of arr) {
    if (!uniqueArr.includes(number)) {
      uniqueArr.push(number);
    }
  }
  return uniqueArr;
};
const result3Way2 = RemoveDuplicatesWay2(arr1);
console.log("Removed duplicates way 1 -> ", result3Way1);
console.log("Removed duplicates way 2 -> ", result3Way2);

//! Problem 4 -> Find the longest word in a sentence

const findTheLongestWord = (sentence) => {
  let longestWord = "";
  const splitIntoArray = sentence.trim().split(" ");
  for (const word of splitIntoArray) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  return longestWord;
};
const result4 = findTheLongestWord("I love you medha");
console.log("Longest word -> ", result4);

//! Problem 5 -> Capitalize first letter of each word

const capitalizeFirstLetter = (sentence) => {
  const splitIntoArray = sentence.trim().split(" ");
  const newArr = [];
  for (const word of splitIntoArray) {
    const capitalize = word[0].toUpperCase() + word.slice(1);
    newArr.push(capitalize);
  }
  const finalCapitalize = newArr.join(" ");
  return finalCapitalize;
};
const result5 = capitalizeFirstLetter("i love you medha");
console.log("Capitalize first letter of each word -> ", result5);

//! Problem 06 -> Find most frequent character in string
const frequentCharacter = (string) => {
  return "Unable to solved";
};
const result6 = frequentCharacter("abbc");
console.log("Most frequent character -> ", result6);

//! Problem 08 -> Check if two strings are anagrams
const checkAnagrams = (str1, str2) => {
  return str1.split("").sort().join("") === str2.split("").sort().join("");
};
const result8 = checkAnagrams("save", "vase");
console.log("Check anagrams -> ", result8);

//! Problem 09 -> Implement custom trim() function
const customTrim = (string) => {
  let start = 0;
  let end = string.length - 1;
  while (string[start] === " ") start++;
  while (string[end] === " ") end--;
  return string.slice(start, end + 1);
};
const result9 = customTrim("   Hello world   ");
console.log("Custom trim ->", result9);
