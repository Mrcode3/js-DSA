const s = ["h", "e", "l", "l", "o"];

var reverseString = function (s) {
  let i = 0;
  let j = s.length - 1;

  while (i < j) {
    console.log(s);
    let temp = s[i];

    s[i] = s[j];
    s[j] = temp;

    i++;
    j--;
  }
  return s;
};

console.log(reverseString(s));
