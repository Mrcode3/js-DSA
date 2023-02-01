var twoSum = function (nums, target) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i];
    console.log(map);

    if (map.get(num) === undefined) {
      map.set(target - num, i);
    } else {
      return [map.get(num), i];
    }
  }

  return "not found";
};

console.log(twoSum([2, 7, 11, 15], 9));

function twoSum(nums, target) {
  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    // the tricky forumla used to check if the value is already inside the map
    const complement = target - nums[i];

    if (map.has(complement)) {
      return [i, map.get(complement)];
    }
    map.set(nums[i], i);
  }
}

var isAnagram = function (s, t) {
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
  console.log(map);

  return true;
};
console.log(isAnagram("anagram", "nagaram"));

let nums = [3, 1, -3, 4, 2, -10, 5, -1];

console.log(nums.sort((a, b) => a - b));

let s = "eat";
console.log(s.split("").sort().join(""));
