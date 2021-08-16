class CircularList {
  constructor(...args) {
    this.args = args;
    this.currentIndex = 0;
  }
  next() {
    this.currentIndex += 1;
    return this.args[this.currentIndex];
  }

  prev() {
    // your code
  }
}
let list = new CircularList("one", "two", "three");
console.log(list.next());

//Psuedo Code
//Five invocations of next() should return 1,2,3,4,1
//Each time next() should return one value.
//Each time the method is called, keep track of index.
//The first value of index should be zero.
//Each time the method is called increase the index.

//Five invocations of prev() should return 4,3,2,1,4
//Each time prev() should return one value.
