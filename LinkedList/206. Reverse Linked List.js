let head = [1, 2, 3, 4, 5];

//iterative
var reverseList = function (head) {
  let pre = null;
  let cur = head;

  while (cur) {
    let nxt = cur.next;
    cur.next = pre;
    pre = cur;
    cur = nxt;
  }

  return pre;
};

//recursive
function recursion(pre, cur) {
  if (cur === null) return pre;

  var newNext = cur.next;

  //reverse
  cur.next = pre;

  return recursion(cur, newNext);
}

var reverseList2 = function (head) {
  return recursion(null, head);
};
