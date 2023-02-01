/**
 * 3진법 뒤집기
 * @param {number} n
 * @returns {number} 
 * 자연수 n이 매개변수로 주어집니다. n을 3진법 상에서 앞뒤로 뒤집은 후, 
 * 이를 다시 10진법으로 표현한 수를 리턴해라.
 * n은 1 이상 100,000,000 이하인 자연수이다.
 */

function solution(n) {
  let answer = '';
  // n.toString(3) : n의 값을 3진수로 변환한 값을 얻을 수 있다.
  answer = [...n.toString(3)].reverse().join('');
  // Number.parseInt(x, base) : 문자열 인자를 파싱하여 특정 진수의 정수를 반환한다.
  return Number.parseInt(answer, 3);
}

console.log(solution(45));