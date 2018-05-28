'use strict';
var number_map_to_word = function(collection){
  let arr=[];
  for(let i=97;i<97+collection.length;i++){
     arr.push(String.fromCharCode(i));
  }
  return arr;
};

module.exports = number_map_to_word;
