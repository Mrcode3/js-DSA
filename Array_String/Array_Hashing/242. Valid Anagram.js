const s = "anagram";
const t = "nagaram";
var isAnagram = function (s, t) {
  //solutuion 1
  // const map = new Map();
  // for (let i = 0; i < s.length; i++) {
  //   console.log(map);
  //   if (map.get(s[i]) !== undefined) {
  //     map.set(s[i], map.get(s[i]) + 1);
  //   } else {
  //     map.set(s[i], 1);
  //   }
  // }
  // for (let i = 0; i < t.length; i++) {
  //   if (!map.get(t[i]) || map.get(t[i]) < 0) return false;

  //   if (map.get(t[i])) {
  //     map.set(t[i], map.get(t[i]) - 1);
  //   }
  // }
  // return true;

  //better looking solution 1
  if (t.length !== s.length) return false;
  const counts = {};
  for (let c of s) {
    counts[c] = (counts[c] || 0) + 1;
  }
  for (let c of t) {
    if (!counts[c]) return false;
    counts[c]--;
  }
  return true;

  //solution 2
  //   console.log(s.split("").sort());
  //   console.log(t.split("").sort());

  //   return s.split("").sort().join() === t.split("").sort().join();
};

console.log(isAnagram(s, t));

function f(s, t) {
  let map = new Map();
  if (s.length !== t.length) return false;
  for (let i = 0; i < s.length; i++) {
    if (map.get(s[i])) {
      map.set(s[i], map.get(s[i]) + 1);
    } else {
      map.set(s[i], 1);
    }
  }
  console.log(map);

  for (let i = 0; i < t.length; i++) {
    if (!map.get(t[i])) return false;
    if (map.get(t[i]) < 1) return false;
    map.set(t[i], map.get(t[i]) - 1);
  }

  return true;
}

console.log(f(s, t));

let tt = [1, 2];
console.log(tt.slice(-1));

var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  let map = new Map();

  for (ch of s) {
    if (map.get(ch) === undefined) {
      map.set(ch, 1);
    } else {
      map.set(ch, map.get(ch) + 1);
    }
  }
  console.log(map);

  for (ch of t) {
    if (!map.get(ch)) {
      return false;
    } else if (map.get(ch) < 0) {
      return false;
    } else {
      map.set(ch, map.get(ch) - 1);
    }
  }

  return true;
};

var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;

  let map = new Map();
  for (ch of s) {
    if (!map.get(ch)) {
      map.set(ch, map.get(ch) + 1 || 1);
    }
  }
  console.log(map);

  for (ch of t) {
    if (!map.get(ch)) return false;
    if (map.get(ch) < 0) {
      return false;
    } else {
      map.set(ch, map.get(ch) - 1);
    }
  }
  return true;
};
console.log(isAnagram(s, t));
