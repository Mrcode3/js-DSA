var isPalindrome = function (s) {
  // s = s.toLowerCase().replace(/[^A-Za-z0-9]/g, "");

  s = s.toLowerCase().split(" ").join("");
  console.log(s);
  let l = 0;
  let r = s.length - 1;
  while (l < r) {
    if (s[l] !== s[r]) return false;
    l++;
    r--;
  }

  return true;
};

console.log(isPalindrome("race a car"));
