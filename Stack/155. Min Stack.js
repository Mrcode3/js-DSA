// var MinStack = function () {
//   this.stack = [];
//   this.minStack = [];
// };

// MinStack.prototype.push = function (val) {
//   this.stack.push(val);
//   let min = this.getMin();
//   if (min === undefined || val <= min) {
//     this.minStack.push(val);
//   }
// };

// MinStack.prototype.pop = function () {
//   let val = this.stack.pop();
//   let min = this.getMin();
//   if (val === min) this.minStack.pop();
// };

// MinStack.prototype.top = function () {
//   return this.stack[this.stack.length - 1];
// };

// MinStack.prototype.getMin = function () {
//   return this.minStack[this.minStack.length - 1];
// };

// var minStack = new MinStack();
// minStack.push(-2);
// minStack.push(0);
// minStack.push(-3);
// console.log(minStack.getMin());
// minStack.pop();
// console.log(minStack.top());

var MinStack = function () {
  this.stack = [];
  this.minStack = [];
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  this.stack.push(val);
  let min = this.getMin();
  if (min === undefined || val <= min) {
    this.minStack.push(val);
  } else {
    this.minStack.push(min);
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  this.stack.pop();
  this.minStack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.minStack[this.minStack.length - 1];
};

var minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-1);
console.log(minStack.getMin());
console.log(minStack.top());
minStack.pop();

console.log(minStack.getMin());
