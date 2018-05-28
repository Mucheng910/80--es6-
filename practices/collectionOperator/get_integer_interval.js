'use strict';

function get_integer_interval(number_a, number_b) {
  //在这里写入代码
  var printf=[];
  var i;
  if(number_a<number_b){
    for( i=number_a;i<=number_b;i++)
      printf.push(i);
  }
  else if(number_a>number_b){
    for( i=number_a;i>=number_b;i--)
      printf.push(i);
  }
  else if(number_b==number_a)
    printf.push(number_b);

  return printf;
}

module.exports = get_integer_interval;

