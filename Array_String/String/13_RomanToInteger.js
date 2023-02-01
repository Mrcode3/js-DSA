const s = "III";
const s1 = "LVIII";
const s2 = "MCMXCIV";

// Alternative to map
symbols = {
  I: 1,
  V: 5,
};
//property accessor
console.log(symbols["I"]);
console.log(symbols.I);

var romanToInt = function (s) {
  let res = 0;
  let roman = new Map([
    ["I", 1],
    ["V", 5],
    ["X", 10],
    ["L", 50],
    ["C", 100],
    ["D", 500],
    ["M", 1000],
  ]);

  for (let i = 0; i < s.length; i++) {
    let current = roman.get(s[i]);
    let next = roman.get(s[i + 1]);
    console.log(current);
    if (next && current < next) {
      res = res + next - current;
      i++;
    } else {
      res = res + current;
    }
    console.log(res);
  }

  return res;
};

console.log(romanToInt(s2));
