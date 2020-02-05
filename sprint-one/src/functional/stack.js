var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    var length = Object.keys(storage).length;
    storage[length] = value;
  };

  someInstance.pop = function() {
    var length = Object.keys(storage).length;
    if (length === 0){
      return undefined;
    }
    var lastOut = storage[length -1];
    delete storage[length-1];
    return lastOut;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
