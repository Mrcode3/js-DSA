var productExceptSelf = function (nums) {
  let pre = [];
  let post = [];

  for (let i = 0; i < nums.length; i++) {
    i === 0 ? (pre[i] = nums[i]) : (pre[i] = nums[i] * pre[i - 1]);
  }

  console.log(pre);

  for (let i = nums.length - 1; i >= 0; i--) {
    i === nums.length - 1
      ? (post[i] = nums[i])
      : (post[i] = nums[i] * post[i + 1]);
  }

  console.log(post);

  let res = [];
  for (let i = 0; i < nums.length; i++) {
    if (i === 0) {
      res[i] = 1 * post[i + 1];
    } else if (i === nums.length - 1) {
      res[i] = pre[i - 1] * 1;
    } else {
      res[i] = pre[i - 1] * post[i + 1];
    }
  }

  return res;
};

console.log(productExceptSelf([1, 2, 3, 4]));
