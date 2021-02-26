/*

3.4 Queue via Stacks: Implement a MyQueue class which implements a queue using two stacks. 

Solution:
1. Always push onto the newest stack. When you pop or peek, first check if the oldest stack if empty. If so, pop off all the elements in the newest stack and push them onto the oldest stack (reversing their order). Then perform regular pop or peek. 


*/

class MyQueue {

}



// First attempt (not optimal)
class MyQueueFirstAttempt {
  constructor() {
    this.stack1 = []; // for enqueuing
    this.stack2 = []; // for dequeueing
  }

  enqueue(val) {
    if (!this.stack2.length) {
      this.stack1.push(val);
    } else {
      // move everything from stack2 into stack1
      while (this.stack2.length) {
        this.stack1.push(this.stack2.pop());
      }
      this.stack1.push(val);
    }
  }

  dequeue() {
    if (!this.stack1.length && this.stack2.length) return null;

    if (this.stack2.length) {
      return this.stack2.pop();
    } else {
      // move everything from stack1 into stack2
      while (this.stack1.length) {
        this.stack2.push(this.stack1.pop());
      }
      return this.stack2.pop();
    }
  }

  peek() {
    if (!this.stack1.length && this.stack2.length) return null;

    if (this.stack2.length) {
      return this.stack2[this.stack2.length - 1];
    }

    while (this.stack1.length) {
      this.stack2.push(this.stack1.pop());
    }

    return this.stack2[this.stack2.length - 1];
  }
}
