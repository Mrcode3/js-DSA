let s = "({})";
var isValid = function (s) {
  let stack = [];
  for (let ch of s) {
    if (ch === "{") {
      stack.push("}");
    } else if (ch === "(") {
      stack.push(")");
    } else if (ch === "[") {
      stack.push("]");
    } else {
      if (ch !== stack.pop()) {
        return false;
      }
    }
  }
  return stack.length === 0;
};

console.log(isValid(s));

function f(s) {
  let stack = [];

  for (ch of s) {
    if (ch === "(") {
      stack.push(")");
    } else if (ch === "{") {
      stack.push("}");
    } else if (ch === "[") {
      stack.push("]");
    } else {
      if (ch !== stack.pop()) {
        return false;
      }
    }
  }

  return stack.length === 0;
}

console.log(f("()[]{}"));
