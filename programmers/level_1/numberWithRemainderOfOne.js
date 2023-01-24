/**
 * 나머지가 1이 되는 수 찾기
 * @param {number} n 자연수 n
 * @returns {number} 
 * n을 x로 나눈 나머지가 1이 되도록 하는 가장 작은 자연수 x를 return
 * 3 <= n <= 1,000,000
 */

function solution(n) {
  let answer = Number.MAX_SAFE_INTEGER;
  for(let i = 1; i < n; i++){
      if(n % i === 1) answer = Math.min(i, answer);
  }
  return answer;
}

console.log(solution(10));