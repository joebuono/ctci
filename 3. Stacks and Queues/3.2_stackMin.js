/*

3.2 Stack Min: How would you design a stack which, in addition to push and pop, has a function min which returns the minimum element? Push, pop and min should all operate in O(1) time. 

Solutions: 
1. Two arrays, one for the nodes, one for the min values 
- Could be more space efficient than solution 2 if, say, the first element pushed onto the stack is the minimum
2. Nodes that keep track of the min at that state of the stack

*/

class MinStack {
  constructor() {
    this.data = [];
    this.minStack = [];
  }

  push(val) {
    this.data.push(val);
    if (this.minStack.length) {
      let minThusFar = this.minStack[this.minStack.length - 1];
      if (val <= minThusFar) {
        this.minStack.push(val);
      }
    }
  }

  pop() {
    if (!this.data.length) return null;
    let popped = this.data.pop();
    if (popped === this.minStack[this.minStack.length - 1]) {
      this.minStack.pop();
    }
    return popped;
  }

  min() {
    if (!this.data.length) return null;
    return this.minStack[this.minStack.length - 1];
  }
}

// Alternate solution

class StackNode {
  constructor(val) {
    this.val = val;
    this.minimum = val; // could also be null as a default
  }
}

class MinStack {
  constructor() {
    this.data = [];
  }

  push(val) {
    const newNode = new StackNode(val);
    if (this.data.length) {
      let lastNode = this.data[this.data.length - 1];
      if (lastNode.minimum < newNode.minimum) {
        newNode.minimum = lastNode.minimum;
      }
    }
    this.data.push(newNode);
  }

  pop() {
    if (!this.data.length) return null;
    return this.data.pop();
  }

  min() {
    if (!this.data.length) return null;
    return this.data[this.data.length - 1].minimum;
  }
}