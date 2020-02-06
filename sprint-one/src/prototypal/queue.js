var Queue = function() {
  var obj = Object.create(queueMethods);
  obj.storage = {};
  return obj;
};

// var queueMethods = {
//   storage: {},
//   enqueue: function(value) {
//     var length = Object.keys(this.storage).length;
//     if (length !== 0) {
//       for (let i = 0; i < length; i++) {
//         this.storage[length - i] = this.storage[length - i - 1];
//       }
//     }
//     this.storage[0] = value;
//   },
//   dequeue: function() {
//     var length = Object.keys(this.storage).length;
//     if (length === 0) {
//       return undefined;
//     }
//     var lastOut = this.storage[length - 1];
//     delete this.storage[length - 1];
//     return lastOut;
//   },
//   size: function() {
//     return Object.keys(this.storage).length;
//   }
// };
// _.extend(Queue.prototype, queueMethods);

var queueMethods = {};
//Queue.queueMethods = queueMethods;

queueMethods.enqueue = function(value) {
  var length = Object.keys(this.storage).length;
  if (length !== 0) {
    for (let i = 0; i < length; i++) {
      this.storage[length - i] = this.storage[length - i - 1];
    }
  }
  this.storage[0] = value;
};

queueMethods.dequeue = function() {
  var length = Object.keys(this.storage).length;
  if (length === 0) {
    return undefined;
  }
  var lastOut = this.storage[length - 1];
  delete this.storage[length - 1];
  return lastOut;
};

queueMethods.size = function() {
  return Object.keys(this.storage).length;
};