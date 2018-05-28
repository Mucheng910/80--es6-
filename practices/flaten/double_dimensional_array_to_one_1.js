'use strict';

function double_to_one(collection) {

  //在这里写入代码
  return Array.prototype.concat.apply([],collection);//apply自动打散参数， concat拼接

}

module.exports = double_to_one;
