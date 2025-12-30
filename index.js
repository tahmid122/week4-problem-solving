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
