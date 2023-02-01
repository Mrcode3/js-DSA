const s = "leetcode";
const s1 = "aabb";
const s2 = "loveleetcode";

var firstUniqChar = function (s) {
  let map = new Map();

  for (let i = 0; i < s.length; i++) {
    map.get(s[i]) === undefined ? map.set(s[i], true) : map.set(s[i], false);
    console.log(map);
  }

  //   let firstUniqIndex = -1;
  //   for (const [key, index] of m) {
  //     if (index != -1) {
  //       firstUniqIndex = index;
  //       break;
  //     }
  //   }

  for (let j = 0; j < s.length; j++) {
    console.log(map.get(s[j]));
    if (map.has(s[j]) && map.get(s[j], true)) return j;
  }

  return -1;
};

console.log(firstUniqChar(s1));
