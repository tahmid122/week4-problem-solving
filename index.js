//! Problem 01 -> Reverse a string

const reverseString = (string) => {
  const reverseString = string.split("").reverse().join("");
  return reverseString;
};
const result1 = reverseString("Tahmid");
console.log("Reverse a string-> ", result1);

// ! Problem 02 -> Check if string is palindrome (ignore case, spaces, punctuation)

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

// ! Problem 3 -> Remove duplicates from array (multiple ways)
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
