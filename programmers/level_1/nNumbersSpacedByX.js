/**
 * x만큼 간격이 있는 n개의 숫자
 * @param {number} x 
 * @param {number} n
 * @returns {Array} 
 * 정수 x와 자연수 n을 입력 받아, x부터 시작해 x씩 증가하는 숫자를 n개 지니는 리스트를 리턴
 * x는 -10000000 이상, 10000000 이하인 정수
 * n은 1000 이하인 자연수입니다.
 */

function solution(x, n) {
  let answer = [];
  for(let i = 1; i <= n; i++){
      answer.push(i*x);
  }
  return answer;
}

console.log(solution(2, 5));