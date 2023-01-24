/**
 * 정수 내림차순으로 배치하기
 * @param {number} n
 * @returns {number} 
 * n의 각 자릿수를 큰것부터 작은 순으로 정렬한 새로운 정수를 리턴
 * n은 1이상 8000000000 이하인 자연수
 */

function solution(n) {
  let arr = String(n).split('');
  arr.sort((a,b)=> b-a);
  return Number(arr.join(''));
}

console.log(solution(118372));