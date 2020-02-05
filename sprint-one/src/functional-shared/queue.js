var Queue = function() {
  var addStorage = function() {
    storage = {};
    return {};
  };
  var queue = addStorage();
  _.extend(queue, queueMethods);
  return queue;
};

var queueMethods = {
  enqueue: function(value) {
    var length = Object.keys(storage).length;
    if (length !== 0) {
      for (let i = 0; i < length; i++) {
        storage[length - i] = storage[length - i - 1];
      }
    }
    storage[0] = value;
  },
  dequeue: function() {
    var length = Object.keys(storage).length;
    if (length === 0) {
      return undefined;
    }
    var lastOut = storage[length - 1];
    delete storage[length - 1];
    return lastOut;
  },
  size: function() {
    return Object.keys(storage).length;
  }
};


