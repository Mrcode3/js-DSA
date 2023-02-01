const nums = [1, 1, 3, 4];
var containsDuplicate = function (nums) {
  //brute force O(n^2) O(1)
  //   for (let i = 0; i < nums.length; i++) {
  //     for (let j = i+1; j < nums.length; j++) {
  //       if (nums[i] === nums[j]) {
  //           console.log(`${nums[i]} and ${nums[j]}`);
  //         return true;
  //       }
  //     }
  //   }
  //   return false;
  //-----------------------------
  //sort
  //   nums.sort();
  //   for (let i = 0; i < nums.length; i++) {
  //     if (nums[i] === nums[i + 1]) return true;
  //   }
  //   return false;
  //------------------------------
  //set
  //   const set = new Set();
  //   for (let i = 0; i < nums.length; i++) {
  //     set.add(nums[i]);
  //   }
  //   return set.size !== nums.length;
  //------------------------------
  //hashmap
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    console.log(map);
    if (map.get(nums[i]) === undefined) {
      map.set(nums[i], 1);
    } else {
      map.set(nums[i], nums[i] + 1);
    }

    if (map.get(nums[i]) > 1) {
      return true;
    }
  }
  return false;
};

console.log(containsDuplicate(nums));

let n = [1, 2, 3, 1];
function f(nums) {
  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (!map.get(nums[i])) {
      map.set(nums[i], 1);
      // console.log(map);
    } else {
      return true;
    }
  }
  return false;
}

console.log(f(n));
