var Stack = function() {
  var addStorage = function() {
    storage = {};
    return {};
  };
  var stack = addStorage();
  _.extend(stack, stackMethods);
  return stack;
};

var stackMethods = {
  push: function(value) {
    var length = Object.keys(storage).length;
    storage[length] = value;
  },
  pop: function() {
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


