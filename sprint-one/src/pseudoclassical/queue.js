var Queue = function() {
  this.storage = {};
};

Queue.prototype.enqueue = function(value) {
  var length = Object.keys(this.storage).length;
  if (length !== 0) {
    for (let i = 0; i < length; i++) {
      this.storage[length - i] = this.storage[length - i - 1];
    }
  }
  this.storage[0] = value;
};

Queue.prototype.dequeue = function() {
  var length = Object.keys(this.storage).length;
  if (length === 0) {
    return undefined;
  }
  var lastOut = this.storage[length - 1];
  delete this.storage[length - 1];
  return lastOut;
};

Queue.prototype.size = function() {
  return Object.keys(this.storage).length;
};