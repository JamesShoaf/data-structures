var Stack = function() {
  this.storage = {};
};

Stack.prototype.push = function(value){
  var length = Object.keys(this.storage).length;
  this.storage[length] = value;
};

Stack.prototype.pop = function(){
  var length = Object.keys(this.storage).length;
  if (length === 0) {
    return undefined;
  }
  var lastOut = this.storage[length - 1];
  delete this.storage[length - 1];
  return lastOut;
};

Stack.prototype.size = function() {
  return Object.keys(this.storage).length;
};