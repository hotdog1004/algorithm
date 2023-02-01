/**
 * 행렬의 덧셈
 * @param {Array} arr1
 * @param {Array} arr2
 * @returns {Array} 
 * 행렬의 덧셈은 행과 열의 크기가 같은 두 행렬의 같은 행, 같은 열의 값을 서로 더한 결과가 된다.
 * 2개의 행렬 arr1과 arr2를 입력받아, 행렬 덧셈의 결과를 리턴
 * 행렬 arr1, arr2의 행과 열의 길이는 500을 넘지 않는다.
 */

function solution(arr1, arr2) {
  const len = arr1.length;
  let answer = Array.from(Array(len), ()=> new Array(arr2[0].length).fill(0));
 
  for(let i = 0; i < len; i++){
      for(let j = 0; j < arr1[i].length; j++){
          answer[i][j]=arr1[i][j]+arr2[i][j];
      }
  }
  return answer;
}

const arr1 = [[1,2],[2,3]];
const arr2 = [[3,4],[5,6]];
console.log(solution(arr1, arr2));