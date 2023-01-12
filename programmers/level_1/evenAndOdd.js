/**
 * 짝수와 홀수
 * @param {number} num int 범위의 정수
 * @returns {string} 결과 문자
 * num이 짝수일 경우 'Even' 반환 / 홀수일 경우 'Odd' 반환
 * 0은 짝수이다.
 */

function solution(num) {
  if(num % 2 === 0) return 'Even';
  else return 'Odd';
}

console.log(solution(2));