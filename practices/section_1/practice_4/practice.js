function collect_same_elements(collection_a, object_b) {
  //在这里写入代码
  // return collection_a.key.filter(item=>object_b.value.includes(item));   不能用.key.filter
  var result=[];
  collection_a.map(item=>{
    if(object_b.value.filter(element => element === item.key).length !== 0) {
      result.push(item.key);
    }
  });

  return result;
}

module.exports = collect_same_elements;
