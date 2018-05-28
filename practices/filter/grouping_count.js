'use strict';

function grouping_count(collection) {

  //在这里写入代码
  var grouping={};  //对象
  collection.filter(item => grouping[item]!==undefined? grouping[item]+=1:grouping[item]=1);
  return grouping;
}

module.exports = grouping_count;
