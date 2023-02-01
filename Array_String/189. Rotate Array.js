//Reverse  O(n) O(1)
// var rotate = function (nums, k) {
//   k = k % nums.length;

//   function reverse(i, j) {
//     while (i < j) {
//       let temp = nums[j];
//       nums[j] = nums[i];
//       nums[i] = temp;
//       i++;
//       j--;
//     }
//   }
//   reverse(0, nums.length - 1);
//   reverse(0, k - 1);
//   reverse(k, nums.length - 1);
// };

//Copy the array   O(n)  O(n)
var rotate = function (nums, k) {
  //   const copy = [...nums]
  const copy = Array.from(nums);
  console.log(copy);
  for (let i = 0; i < nums.length - 1; i++) {
    copy[(i + k) % nums.length] = nums[i];
  }

  for (let i = 0; i < nums.length - 1; i++) {
    nums[i] = copy[i];
  }

  return nums;
};
