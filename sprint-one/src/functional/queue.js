var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    var length = Object.keys(storage).length;
    if (length !== 0) {
      for (let i = 0; i < length; i++) {
        storage[length - i] = storage[length - i -1];
      }
    }
    storage[0] = value;
  };

  someInstance.dequeue = function() {
    var length = Object.keys(storage).length;
    if (length === 0) {
      return undefined;
    }
    var lastOut = storage[length-1];
    delete storage[length-1];
    return lastOut;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
