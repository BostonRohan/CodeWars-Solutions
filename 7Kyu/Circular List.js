class CircularList {
  constructor(...args) {
    //Establish counter. Originally, the counter does not have a position in the arr.
    this.counter = -1;
    //Establish the array.
    this.arr = [...args];
    //Create a throw error. The throw statement - creates a user-defined exception.
    //Execution of the current function will stop, the statements after throw will not be executed.
    if (this.arr.length === 0) {
      throw new Error("Array is empty!");
    }
  }

  next() {
    //If the counter is not at the last position of the array increment it.
    //Otherwise, loop it around and assign it to the first position of the array.
    this.counter !== this.arr.length - 1 ? this.counter++ : (this.counter = 0);
    return this.arr[this.counter];
  }

  prev() {
    //If the counter is greater than zero, decrement the counter.
    //Otherwise, assign it to the last position in the array.
    this.counter > 0 ? this.counter-- : (this.counter = this.arr.length - 1);
    return this.arr[this.counter];
  }
}
let list = new CircularList("one", "two", "three");
