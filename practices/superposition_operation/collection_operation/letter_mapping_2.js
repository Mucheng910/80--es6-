'use strict';

function average_to_letter(collection) {
  //在这里写入代码
  let sum=collection.reduce(function (prev,cur) {
    return cur+prev;
  },0);
  let array=['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

  return sum % collection.length === 0 ? array[sum / collection.length - 1] : array[parseInt(sum / collection.length)];
  }


module.exports = average_to_letter;

