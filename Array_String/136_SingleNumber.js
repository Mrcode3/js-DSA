const nums = [4, 1, 2, 1, 2];

function myfun(nums) {
  let res = nums[0];
  for (let i = 1; i < nums.length; i++) {
    res = res ^ nums[i];
  }

  return res;
}

console.log(myfun(nums));
