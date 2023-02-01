var longestConsecutive = function (nums) {
  let set = new Set();
  for (let i = 0; i < nums.length; i++) {
    set.add(nums[i]);
  }
  console.log(set);
  let size = set.size;
  for (let i = 0; i < size; i++) {
    if (set.has(nums[i] + 1) || set.has(nums[i] - 1)) {
      console.log(set);
      continue;
    } else {
      set.delete(nums[i]);
    }
  }

  return set.size;
};
console.log(longestConsecutive([0,0]));
