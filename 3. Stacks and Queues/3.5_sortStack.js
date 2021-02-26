/*

3.5 Sort Stack: Write a program to sort a stack such that the smallest items are on the top. You can use an additional temporary stack, but you may not copy the elements into any other data structure (such as an array). The stack supports the following operations: push, pop, peek, and isEmpty. 

Solution: 
1. See below

*/


// define normal Stack class up here

class SortStack {
  constructor() {
    this.s = [];
  }

  sort() {
    let r = new Stack();
    while (!this.s.isEmpty()) {
      // insert each element in s into sorted order in r
      let temp = this.s.pop();
      while (!r.isEmpty() && temp < r.peek()) {
        // put element back on main stack
        this.s.push(r.pop());
      }
      r.push(temp);
    }

    // copy the elements from r back into s
    while (!r.isEmpty()) {
      this.s.push(r.pop());
    }
  }

  // push, pop, peek, isEmpty as outlined below in my first attempt
}




// I misunderstood the problem statement
// I wrongly assumed that the stack would sort elements as they are put onto the stack
// The problem is asking for a method that will sort an unsorted stack
class SortStackFirstAttempt {
  constructor() {
    this.data = [];
    this.temp = [];
  }

  push(val) {
    while (this.data.length && val >= this.data[this.data.length - 1]) {
      this.temp.push(this.data.pop());
    }
    this.data.push(val);
    while (this.temp.length) {
      this.data.push(this.temp.pop());
    }
  }

  pop() {
    if (!this.data.length) return null;
    return this.data.pop();
  }

  peek() {
    return this.data[this.data.length - 1];
  }

  isEmpty() {
    return !this.data.length;
  }
}