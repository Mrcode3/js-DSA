const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];

var groupAnagrams = function (strs) {
  // let res = {};

  // for (str of strs) {
  //   let sorted = str.split("").sort().join("");
  //   console.log(sorted);

  //   if (res[sorted]) {
  //     res[sorted].push(str);
  //   } else {
  //     res[sorted] = [str];
  //   }
  // }

  // return Object.values(res);

  let res = [];

  for (let str of strs) {
    let sorted = str.split("").sort().join("");
    console.log(sorted);

    if (res[sorted]) {
      res[sorted].push(str);
    } else {
      res[sorted] = [str];
      console.log(res);
    }
  }
  // console.log(res);
  // return Object.values(res);
  let ans = [];
  for (let i in res) {
    ans.push(res[i]);
  }

  return ans;
};

console.log(groupAnagrams(strs));

//use map
// function solve(strs) {
//   let map = new Map();

//   for (let s of strs) {
//     console.log(s);
//     let sorted = s.split("").sort().join("");
//     sorted;

//     if (map.get(sorted) === undefined) {
//       map.set(sorted, [s]);

//       //   console.log(map.get(sorted));
//     } else {
//       map.set(sorted, [...map.get(sorted), s]);
//     }
//     // console.log(map);
//   }

//   return [...map.values()];
// }

// let map = {};
let map2 = new Map();

let str = "abc";
let s = "fff";
if (map2.get(str) === undefined) {
  map2.set(str, [s]);
}

map2.set("str", [1, 2, 3]);
console.log(map2);

console.log(map2.get(str));
