const list1 = [1, 2, 4];
const list2 = [1, 3, 4];

var mergeTwoLists = function (l1, l2) {
  let dummy = new ListNode(0);
  let tail = dummy;

  while (l1 && l2) {
    if (l1.val < l2.val) {
      tail.next = l1;
      l1 = l1.next;
    } else {
      tail.next = l2;
      l2 = l2.next;
    }
    tail = tail.next;
  }

  if (l1) {
    tail.next = l1;
  } else if (l2) {
    tail.next = l2;
  }
};

console.log(mergeTwoLists(list1, list2));
