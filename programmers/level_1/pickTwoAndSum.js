/**
 * 두 개 뽑아서 더하기
 * @param {Array} numbers
 * @returns {Array} 
 * numbers에서 서로 다른 인덱스에 있는 두 개의 수를 뽑아 더해서 만들 수 있는 모든 수를 배열에 오름차순으로 담아 return 
 */

function solution(numbers) {
  let answer = [];
  for(let i = 0; i < numbers.length; i++){
      for(let j = i+1; j < numbers.length; j++){
          if(!answer.includes(numbers[i]+numbers[j])) answer.push(numbers[i]+numbers[j]);
      }
  }
  return answer.sort((a,b)=>a-b);
}

console.log(solution([2,1,3,4,1]));