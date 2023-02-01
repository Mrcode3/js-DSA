const nums = [1, 1, 1, 2, 2, 3];
const nums1 = [1, 2];

var topKFrequent = function (nums, k) {
  //   let counts = new Map();
  //   let buckets = [];

  //   for (let i = 0; i <= nums.length; i++) {
  //     buckets.push([]);
  //   }

  //   console.log(buckets);

  //   for (let num of nums) {
  //     if (counts.has(num)) {
  //       counts.set(num, counts.get(num) + 1);
  //     } else {
  //       counts.set(num, 1);
  //     }
  //   }

  //   console.log(counts);

  //   // put them into buckets by frequent
  //   for (let [key, value] of counts) {
  //     buckets[value].push(key);
  //   }

  //   // fetch the larget frequest bucket first, until reach k
  //   let ans = [];
  //   for (let i = buckets.length - 1; i > 0 && ans.length < k; i--) {
  //     if (buckets[i] !== null) ans.push(...buckets[i]);
  //   }
  //   return ans;
  //--------------------------------------------------------------------------
  let map = new Map();
  let buckets = [];

  //STEP 1
  //initialize a bucket array such that the index is the frequent
  //initially. each element of the bucket array filled with empty array

  for (let i = 0; i <= nums.length; i++) {
    buckets.push([]);
  }
  // now, ideally buckets array will look like this(from ex 1)
  // [ [], [], [], [], [], [], [] ]

  //STEP 2
  //store frequent in map, where key represents "num" and value represents "count"
  for (let num of nums) {
    console.log(num);
    if (map.has(num)) {
      //increment the count by 1
      map.set(num, map.get(num) + 1);
    } else {
      //first time seen this number, set "count" to be 1
      map.set(num, 1);
    }
  }
  console.log(map);
  // now, ideally map will look like this (key => value)
  // { 1=>3, 2=>2, 3=>1}

  //STEP 3
  //put the map into buckets array
  for (let [key, value] of map) {
    buckets[value].push(key);
  }
  console.log(buckets);

  //STEP 4
  //iterate buckets array to constrcut a ans array
  //note that iteration is backward, we are to find most frequent nums
  //the buckets array look like this until now
  // [ [], [3], [2], [1], [], [], [] ]
  //                               <--  diretion
  //note that we only need to find k elements

  let ans = [];
  for (let i = buckets.length - 1; i > 0 && ans.length < k; i--) {
    if (buckets[i] !== null) {
      ans.push(...buckets[i]);
    }
  }

  return ans;
};

console.log(topKFrequent(nums, 2));
