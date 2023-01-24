/**
 * 음양 더하기
 * @param {Array} absolutes
 * @param {Array} signs
 * @returns {number} 
 * 이 정수들의 절댓값을 차례대로 담은 정수 배열 absolutes와 이 정수들의 부호를 차례대로 담은 불리언 배열 signs이 존재
 * 실제 정수들의 합을 구하여 return 
 * absolutes의 길이는 1 이상 1,000 이하
 * absolutes의 모든 수는 각각 1 이상 1,000 이하
 * signs의 길이는 absolutes의 길이와 같다.
 */

function solution(absolutes, signs) {
  let answer = 0;
  absolutes.forEach((num, idx)=>{
      if(!signs[idx]) answer += (num*-1);
      else answer += num;
  })
  return answer;
}

console.log(solution([4,7,12],[true,false,true]));