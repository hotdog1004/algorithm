/**
 * 평균 구하기
 * @param {Array} arr int 범위의 정수
 * @returns {number} 평균값
 * 정수를 담고 있는 배열 arr의 평균값을 return
 */

function solution(arr) {
  let answer = 0;
  for(const num of arr){
      answer += num;
  }
  return answer / arr.length;
}

let arr = [1,2,3,4];
console.log(solution(arr));