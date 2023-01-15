/**
 * 정수 제곱근 판별
 * @param {number} n 자연수 n
 * @returns {number} 
 * n이 어떤 양의 정수 x의 제곱인지 아닌지 판단
 * n이 양의 정수 x의 제곱이라면 x+1의 제곱을 리턴 / n이 양의 정수 x의 제곱이 아니라면 -1을 리턴
 * n은 1이상, 50000000000000 이하인 양의 정수
 */

function solution(n) {
  const sqrtNum = Math.sqrt(n) % 1;
  if(sqrtNum > 0) return -1;
  return Math.pow(Math.sqrt(n)+1, 2);
}

console.log(solution(121));