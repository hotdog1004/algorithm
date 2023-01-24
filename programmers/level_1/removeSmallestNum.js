/**
 * 제일 작은 수 제거하기
 * @param {Array} arr 정수를 저장한 배열
 * @returns {Array} 
 * arr 에서 가장 작은 수를 제거한 배열을 리턴
 * 리턴하려는 배열이 빈 배열인 경우엔 배열에 -1을 채워 리턴
 * arr은 길이 1 이상인 배열
 * 인덱스 i, j에 대해 i !== j이면 arr[i] !== arr[j] 
 */

function solution(arr) {
  if(arr.length === 1) return [-1];
  const min = Math.min(...arr);
  const idx = arr.findIndex(val=>val === min);
  arr.splice(idx, 1);
  return arr;
}

console.log(solution([4,3,2,1]));