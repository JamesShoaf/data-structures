class Stack {
  constructor() {
    this.storage = {};
  }

  push(value) {
    var length = Object.keys(this.storage).length;
    this.storage[length] = value;
  }

  pop() {
    var length = Object.keys(this.storage).length;
    if (length === 0) {
      return undefined;
    }
    var lastOut = this.storage[length - 1];
    delete this.storage[length - 1];
    return lastOut;
  }

  size() {
    return Object.keys(this.storage).length;
  }
}