
/** Given two strings, return true if they are anagrams of one another */


function isAnagram(first, second) {
  let first1 = first.toLowerCase().split("").sort().join("")
  let second1 = second.toLowerCase().split("").sort().join("")
  return first1 === second1;
}
console.log(isAnagram("Mary", "Army")); // true