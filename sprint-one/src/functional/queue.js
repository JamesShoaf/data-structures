var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    keys = Object.keys(storage);
    if (keys.length !== 0){
      for (let i = 0; i < keys.length; i++) {
        storage[keys.length - i] = storage[keys.length - i -1];
      }
    }
    storage[0] = value;
  };

  someInstance.dequeue = function() {
    keys = Object.keys(storage);
    if (keys.length === 0) {
      return undefined;
    }
    var lastOut = storage[keys.length-1];
    delete storage[keys.length-1];
    return lastOut;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
