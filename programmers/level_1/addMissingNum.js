/**
 * 없는 숫자 더하기
 * @param {Array} numbers
 * @returns {number} 
 * 0부터 9까지의 숫자 중 일부가 들어있는 정수 배열 numbers에서 찾을 수 없는 숫자를 모두 더해서 리턴
 * 1 <= numbers의 길이 <= 9
 * 0 <= numbers의 모든 원소 <= 9
 * numbers의 모든 원소는 서로 다르다.
 */

function solution(numbers) {
  let answer = 0;
  for(let i = 0; i <= 9; i++){
      if(!numbers.includes(i)) answer += i;
      
  }
  return answer;
}

console.log(solution([1,2,3,4,6,7,8,0]));