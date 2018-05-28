'use strict';

function choose_no_repeat_number(collection) {

  //在这里写入代码
  var noRepest= Array.from(new Set(collection));//Set  没有重复的数据
  return noRepest;
}

module.exports = choose_no_repeat_number;
