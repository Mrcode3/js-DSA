const nums = [0, 0, 1, 1, 1, 1, 2, 3, 3];

function solve(nums) {
  let l = 2;
  for (let r = 2; r < nums.length; r++) {
    if (nums[r] !== nums[l - 2]) {
      nums[l] = nums[r];
      l++;
    }
  }
  return l;
}

console.log(solve(nums));
