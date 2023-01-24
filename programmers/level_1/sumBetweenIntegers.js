/**
 * 두 정수 사이의 합
 * @param {number} a 자연수 a
 * @param {number} b 자연수 b
 * @returns {number} 
 * 두 정수 a, b가 주어졌을 때 a와 b 사이에 속한 모든 정수의 합을 리턴
 * a와 b가 같은 경우는 둘 중 아무 수나 리턴
 * a와 b는 -10,000,000 이상 10,000,000 이하인 정수
 * a와 b의 대소관계는 안 정해져있음
 */

function solution(a, b) {
  let answer = 0;
  let min = Math.min(a,b);
  const max = Math.max(a,b);
  
  if(a===b) return a;
  for(min; min <= max; min++) answer += min;
  return answer;
}

console.log(solution(3,5));