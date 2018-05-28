'use strict';

function compute_average(collection) {
  //在这里写入代码
  var sum=collection.reduce(function (prev,cur) {   //
    return cur+prev;
    },0);
  return sum/(collection.length);
}

module.exports = compute_average;

