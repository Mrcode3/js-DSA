//2 pointers
const nums = [3, 3, 2, 3];
const nums2 = [0, 1, 2, 2, 3, 0, 4, 2];
function myfun(nums, val) {
  let l = 0;
  for (let r = 0; r < nums.length; r++) {
    if (nums[r] != val) {
      nums[l] = nums[r];
      l++;
    }
  }
  return l;
}

// console.log(myfun(nums, 3));
console.log(myfun(nums2, 2));
console.log(nums2);
