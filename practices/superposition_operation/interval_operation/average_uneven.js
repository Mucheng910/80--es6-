'use strict';

function average_uneven(collection) {

  //在这里写入代码
  let col1=collection.filter(item=>item%2===1);
  let col2=col1.reduce((prev,cur)=>{
    return prev+cur;
  });
  let average=col2/col1.length;
  return average;
}

module.exports = average_uneven;
