/**
 * 좌표 정렬
 * @param {number[][]} arr
 * @return {number[][]} 정렬된 좌표
 * N개의 평면상의 좌표(x, y)가 주어지면 모든 좌표를 오름차순으로 정렬하는 프로그램을 작성하세요.
 * 정렬기준은 먼저 x값의 의해서 정렬하고, x값이 같을 경우 y값에 의해 정렬합니다.
 * 좌표의 개수 N(3<=N<=100,000)
 * 좌표는 x,y 순으로 주어집니다. x,y 값은 양수만 입력됩니다.
 */

function solution(arr) {
  (arr = arr),
    sort((a, b) => {
      if (a[0] === b[0]) return a[1] - b[1];
      else return a[0] - b[0];
    });

  return arr;
}

const arr = [
  [2, 7],
  [1, 3],
  [1, 2],
  [2, 5],
  [3, 6],
];
console.log(solution(arr));
