/**
 * 회의실 배정
 * @param {number[][]} arr
 * @return {number} 최대 사용할 수 있는 회의 수
 * 한 개의 회의실이 있는데 이를 사용하고자 하는 n개의 회의들에 대하여 회의실 사용표를 만들려고 한다.
 * 각 회의에 대해 시작시간과 끝나는 시간이 주어져 있고, 각 회의가 겹치지 않게 하면서 회의실을 사용할 수 있는 최대수의 회의를 찾아라
 * 단, 회의는 한번 시작하면 중간에 중단될 수 없으며 한 회의가 끝나는 것과 동시에 다음 회의가 시작될 수 있다.
 * 회의의 수 n : 1 <= n <= 100000
 * 회의의 시작시간과 끝나는 시간의 조건은 (시작시간 <= 끝나는 시간)입니다.
 */

// 회의실 배정은 greedy 알고리즘의 대표적인 문제
// 정렬부터 해야한다! but 끝나는 시간으로만 정렬하면 안됨
// 시작시작 === 끝나는시간 인 경우 시작시간으로 오름차순 정렬하여 처리해야함.
function solution(arr) {
  let endTime = 0;
  let answer = 0;

  arr = arr.sort((a, b) => {
    if (a[1] === b[1]) return a[0] - b[0];
    else return a[1] - b[1];
  });

  for (const times of arr) {
    if (times[0] >= endTime) {
      answer++;
      endTime = times[1];
    }
  }

  return answer;
}

let arr = [
  [1, 4],
  [2, 3],
  [3, 5],
  [4, 6],
  [5, 7],
];
console.log(solution(arr));
