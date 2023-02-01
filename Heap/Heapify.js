function minHeapify(array, index) {
  const temp = array[index];
  let childIndex;

  for (; index * 2 < array.length; index = childIndex) {
    childIndex = index * 2;

    // Choose the smaller of the two (left, right) children
    if (
      childIndex != array.length - 1 &&
      array[childIndex] > array[childIndex + 1]
    ) {
      childIndex++;
    }

    if (temp > array[childIndex]) {
      array[index] = array[childIndex];
    } else {
      break;
    }
  }

  array[index] = temp;
}

// since JS does not have a native heap,
// for an interview you can quickly code-up something like this
// letting interviewer know what you are doing
class MinHeap {
  constructor(compareFunc) {
    this.compareFunc = compareFunc;
    this.heap = [];
  }

  insert(val) {
    this.heap.unshift(val);
    this.heap.sort(this.compareFunc);
  }

  extract() {
    if (this.size === 0) return null;
    return this.heap.shift();
  }

  peek() {
    if (this.size === 0) return null;
    return this.heap[0];
  }

  get size() {
    return this.heap.length;
  }
}
