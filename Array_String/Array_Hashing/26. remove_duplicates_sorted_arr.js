const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

//solution 1
// function myfun(arr) {
//   let l = 1;

//   for (let r = 1; r < arr.length; r++) {
//     if (arr[r] != arr[r - 1]) {
//       arr[l] = arr[r];
//       l++;
//     }
//   }
//   console.log(arr);
//   return l;
// }
// //time O(n) travel through enitre array
// //space O(1) no new data var, data structure created

// console.log(myfun(nums));

//solution 2
// function myfun2(arr) {
//   let set = new Set(arr);
//   arr = [];
//   console.log(set);
//   arr.push(...set.values());
//   console.log(arr);
//   return set.size;
// }

// console.log(myfun2(nums));

//solution 3 - my solution

const nums2 = [1, 1, 2];
function myfun3(arr) {
  let l = 0;

  for (let r = 1; r < arr.length; r++) {
    if (arr[l] === arr[r]) {
      continue;
    }

    arr[++l] = arr[r];
    console.log(arr);
  }
  return l + 1;
}

console.log(myfun3(nums2));
