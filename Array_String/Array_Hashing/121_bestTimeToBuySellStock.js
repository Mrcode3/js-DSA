//2 pointers
const prices = [7, 1, 5, 3, 6, 4];
const prices2 = [2, 1, 2, 1, 0, 1, 2];
function myfun(prices) {
  // l : buy
  // r : sell
  let l = 0;
  let maxprofit = 0;
  for (let r = 1; r < prices.length; r++) {
    if (prices[r] < prices[l]) {
      l = r;
      continue;
    }
    if (prices[r] - prices[l] > maxprofit) {
      maxprofit = prices[r] - prices[l];
    }
  }
  return maxprofit;
}

console.log(myfun(prices));

// function f(arr) {
//   let l = 0;
//   let maxp = 0;

//   for (let r = 1; r < arr.length; r++) {
//     if (arr[r] < arr[l]) {
//       l = r;
//       continue;
//     }
//     if (arr[r] - arr[l] > maxp) {
//       maxp = arr[r] - arr[l];
//     }
//   }

//   return maxp;
// }

console.log(f(prices));

function f(p) {
  let maxp = 0;
  let l = 0;

  for (let r = 0; r < p.length; r++) {
    if (p[l] > p[r]) {
      l = r;
    } else {
      maxp = Math.max(p[r] - p[l], maxp);
    }
  }

  return maxp;
}

console.log(f([7, 6, 4, 3, 1]));
