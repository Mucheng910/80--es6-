'use strict';

function get_letter_interval(number_a, number_b) {
  //在这里写入代码
  let basicLetters = getBasicLetter();
  if (number_a > number_b) return basicLetters.reverse();
  if (number_a < number_b) return basicLetters;
  if (number_a===number_b)  return [basicLetters[number_a-1]];
}

function getBasicLetter() {
  // let basicLetter = [];
  // for (let i = 97; i < 97+27 ; ++i)
  //   basicLetter.push(String.fromCharCode(i));//javascript中用unicode万国编码
  let  basicLetter = ['a','b','c','d','e'];

  return basicLetter;

}

module.exports = get_letter_interval;
