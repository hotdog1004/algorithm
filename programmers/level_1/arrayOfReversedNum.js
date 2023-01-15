/**
 * 자연수 뒤집어 배열로 만들기
 * @param {number} n 자연수 n
 * @returns {Array} 
 * n을 뒤집어 각 자리 숫자를 원소로 가지는 배열 형태로 리턴
 * n은 10,000,000,000이하인 자연수
 */
function solution(n) {
  let answer = [];
  let arr = String(n).split('');
  answer = arr.map(a=>Number(a));
  return answer.reverse();
}

console.log(solution(12345));