const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
const maxContiguousSubarraySum = (nums) => {
  /*
    default best maximum seen so far is the first
    element.
    default best max ending at the first element
    is...the first element.
  */
  var maxSoFar = nums[0];
  var maxEndingHere = nums[0];

  /*
    We will investigate the rest of the items in the array from index
    1 onward.
  */
  for (var i = 1; i < nums.length; i++) {
    /*
      We are inspecting the item at index i.
      We want to answer the question:
      "What is the Max Contiguous Subarray Sum we can achieve ending at index i?"
      We have 2 choices:
      maxEndingHere + nums[i] (extend the previous subarray best whatever it was)
        1.) Let the item we are sitting at contribute to this best max we achieved
        ending at index i - 1.

      nums[i] (start and end at this index)
        2.) Just take the item we are sitting at's value.

      The max of these 2 choices will be the best answer to the Max Contiguous
      Subarray Sum we can achieve for subarrays ending at index i.
    */
    maxEndingHere = Math.max(maxEndingHere + nums[i], nums[i]);

    // Did we beat the 'maxSoFar' with the 'maxEndingHere'?
    maxSoFar = Math.max(maxSoFar, maxEndingHere);
  }

  return maxSoFar;
};

console.log(maxContiguousSubarraySum(nums));
