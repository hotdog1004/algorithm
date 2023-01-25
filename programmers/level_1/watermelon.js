/**
 * 수박수박수박수박수박수?
 * @param {number} n
 * @returns {string} 
 * 길이가 n이고, "수박수박수박수...."와 같은 패턴을 유지하는 문자열을 리턴
 * n은 길이 10,000이하인 자연수
 */

function solution(n) {
  let answer = '';
  for(let i = 1; i <= n; i++){
      if(i % 2 === 1) answer += '수';
      else answer += '박';
  }
  return answer;
}

console.log(solution(3));