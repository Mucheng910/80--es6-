'use strict';

function choose_common_elements(collection_a, collection_b) {
   // let a=new Set(["a", "e", "h", "t", "f", "c", "g", "b", "d"]);
   // let b=new Set(["a", "d", "e", "f"]);
  //在这里写入代码
   return collection_a.filter(item=>collection_b.includes(item));
  // let intersectionSet = new Set([...a].filter(x =>b.has(x)));
  //return intersectionSet;
}

module.exports = choose_common_elements;
