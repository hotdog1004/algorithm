/**
 * [Sliding Window]
 * 최대 매출
 * @param {number} k k일
 * @param {Array} arr 매출기록 배열
 * @returns {number} k일 동안의최대 매출액을 합친 금액
 * K일 동안의 최대 매출액이 얼마인지 구하기
 * 2 <= k <= arr.length
 */

function solution(k, arr) {
  let sum = 0;
  let answer = 0;
  
  // 첫번째 sum은 미리 구하기**
  for(let i = 0; i < k; i++) sum += arr[i];
  answer = sum;
  
  // 강의보고 혼자 풀어본 건데 강의풀이가 더 간결해서 주석처리
  //for(let i = 1; i <= arr.length-k; i++){
  //  sum += (arr[i+k-1]-arr[i-1]);
  //  answer = Math.max(sum, answer);
  //}

  // 강의 풀이
  for(let i = k; i < arr.length; i++){
    sum +=(arr[i]-arr[i-k]);
    answer = Math.max(sum, answer);
  }

  return answer;
}


let a=[12, 15, 11, 20, 25, 10, 20, 19, 13, 15];
console.log(solution(3, a));