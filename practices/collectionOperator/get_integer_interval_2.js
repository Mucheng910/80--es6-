'use strict';

function get_integer_interval_2(number_a, number_b) {
  //在这里写入代码
  var printf=[];
  var i;
  if(number_a<number_b){
    i=(number_a%2===0)?number_a:(number_a+1);
    for( i;i<=number_b;i+=2)
      printf.push(i);
  }
  else if(number_a>number_b){
    i=(number_a%2===0)?number_a:(number_a-1);
    for( i=number_a;i>=number_b;i-=2)
      printf.push(i);
  }
  else if(number_b==number_a&&number_a%2==0)
    printf.push(number_b);
  else  printf.push();

  return printf;
}

module.exports = get_integer_interval_2;
