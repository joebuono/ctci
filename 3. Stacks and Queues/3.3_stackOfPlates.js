/*

3.3 Stack of Plates: Implement a set of stacks that behaves identically to a single stack (see CTCI for full description)

Solution:
1. There's a cleaner solution in the book
  - She also implements a "rollover" solution to the popAt() method, which is tricky

*/

class Stack {
  constructor() {
    this.data = [];
    this.size = 0;
  }

  push(val) {
    this.data.push(val);
    return ++this.size;
  }

  pop() {
    if (!this.size) return;
    let popped = this.data.pop();
    this.size--;
    return popped;
  }

  getSize() {
    return this.size;
  }
}


class SetOfStacks {
  constructor(threshold) {
    this.threshold = threshold;
    this.set = [new Stack(threshold)];
  }

  push(val) {
    let lastStackInSet = this.set[this.set.length - 1];
    if (lastStackInSet.getSize() < this.threshold) {
      lastStackInSet.push(val);
      return;
    }

    this.set.push(new Stack());
    let newLastStackInSet = this.set[this.set.length - 1];
    newLastStackInSet.push(val);
  }

  pop() {
    let lastStackInSet = this.set[this.set.length - 1];
    let popped = lastStackInSet.pop();
    if (!lastStackInSet.getSize()) {
      this.set.pop();
    }
    return popped;
  }

  popAt(index) {
    if (index < 0 || index >= this.set.length) return;
    let specificStack = this.set[index];
    let popped = specificStack.pop();
    if (!specificStack.getSize()) {
      this.set.splice(index, 1);
    }
    return popped;
  }
}
