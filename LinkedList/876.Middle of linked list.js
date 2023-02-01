var middleNode = function (head) {
  let count = 0;
  let mid = 0;
  let cur = head;
  while (cur) {
    count++;
    cur = cur.next;
  }
  mid = Math.floor(count / 2);

  for (let i = 0; i < mid; i++) {
    head = head.next;
  }

  return head;
};
