'use strict';

function hybrid_operation_to_uneven(collection) {

  //在这里写入代码
  let col1= collection.filter(item=>(item%2===1));
  let col2=col1.map(item=>(item*3+2));
  return col2;

}

module.exports = hybrid_operation_to_uneven;

