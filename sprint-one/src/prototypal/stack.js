var Stack = function() {
  var stack = Object.create(stackMethods);
  stack.storage = {};
  return stack;
};

var stackMethods = {
  push: function(value) {
    var length = Object.keys(this.storage).length;
    this.storage[length] = value;
  },
  pop: function() {
    var length = Object.keys(this.storage).length;
    if (length === 0) {
      return undefined;
    }
    var lastOut = this.storage[length - 1];
    delete this.storage[length - 1];
    return lastOut;
  },
  size: function() {
    return Object.keys(this.storage).length;
  }
};