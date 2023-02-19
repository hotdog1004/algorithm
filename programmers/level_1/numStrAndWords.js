/**
 * 숫자 문자열과 영단어
 * @param {string} s
 * @returns {number} 
 * 숫자의 일부 자릿수가 영단어로 바뀌어졌거나, 혹은 바뀌지 않고 그대로인 문자열 s가 매개변수로 주어집니다. 
 * s가 의미하는 원래 숫자를 return 하도록 solution 함수를 완성해주세요
 * 1 ≤ s의 길이 ≤ 50
 * s가 "zero" 또는 "0"으로 시작하는 경우는 주어지지 않습니다.
 * return 값이 1 이상 2,000,000,000 이하의 정수가 되는 올바른 입력만 s로 주어집니다.
 * 
 */

function solution(s) {
  let answer = 0;
  const words = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

  words.forEach((word, idx) =>{
    if(s.includes(word)) {
      s = s.replaceAll(word, String(idx))
    }
  })

  return Number(s);
}

console.log(solution('2three45sixsixseven'));