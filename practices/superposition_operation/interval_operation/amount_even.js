'use strict';

function amount_even(collection) {

  //在这里写入代码
  let col1=collection.filter(item=>item%2===0);
  let col2=col1.reduce((prev,cur)=>{
    return prev+cur;
  });
  return col2;
}

module.exports = amount_even;
