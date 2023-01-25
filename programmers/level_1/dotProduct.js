/**
 * 내적
 * @param {Array} a
 * @param {Array} b
 * @returns {number} 
 * a와 b의 내적을 return
 * a와 b의 내적은 a[0]*b[0] + a[1]*b[1] + ... + a[n-1]*b[n-1] 이다.
 * a, b의 길이는 1 이상 1,000 이하
 * a, b의 모든 수는 -1,000 이상 1,000 이하
 */

function solution(a, b) {
  let answer = 0;
  for(let i = 0; i < a.length; i++){
      answer += a[i]*b[i];
  }
  return answer;
}

console.log(solution([1,2,3,4], [-3,-1,0,2]));