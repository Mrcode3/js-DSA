function lengthOfLongestSubstring(s) {
  let l = 0;
  let max = 0;
  let set = new Set();

  for (let r = 0; r < s.length; r++) {
    while (set.has(s[r])) {
      set.delete(s[l]);
      l++;
    }
    console.log(l);
    set.add(s[r]);
    console.log(set);
    max = Math.max(max, set.size);
  }

  return max;
}

console.log(lengthOfLongestSubstring("qrsvbspk"));
