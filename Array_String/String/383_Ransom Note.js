const ransomNote = "aa";
const magazine = "aab";

var canConstruct = function (ransomNote, magazine) {
  const map = {};

  for (ch of magazine) {
    // IF -- ELSE
    // if (map[ch]) {
    //   map[ch] = map[ch] + 1;
    // } else {
    //   map[ch] = 1;
    // }

    // Tenary Operateor
    //map[ch] ? map[ch]++ : (map[ch] = 1);

    //Short Circuit
    map[ch] = (map[ch] || 0) + 1;
  }

  for (ch of ransomNote) {
    if (!map[ch]) return false;
    map[ch]--;
  }

  return true;
};

console.log(canConstruct(ransomNote, magazine));

// const map = new Map([
//   ["a", 1],
//   ["b", 2],
// ]);

// const str = "apex";
// console.log(str[1]);

// console.log(map.get("a"));
