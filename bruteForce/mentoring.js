/**
 * 멘토링
 * @param {Array} arr n번의 수학테스트 결과 이중배열
 * @returns {number} 멘토와 멘티가 되는 짝을 만들 수 있는 경우의 수
 * A학생이 멘토, B학생이 멘티가 되는 짝이 되었다면,
 * A학생은 M번의 수학테스트에서 모두 B학생보다 등수가 앞서야 한다.
 * 한 줄에 N=4이고, 테스트 결과가 3 4 1 2로 입력되었다면,
 * 3번 학생이 1등, 4번 학생이 2등, 1번 학생이 3등, 2번 학생이 4등을 의미
 */
function solution(arr) {
  let answer = 0;
  let cnt = 0;
  const m = arr.length;
  const n = arr[0].length;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      let cnt = 0;
      for (let k = 0; k < m; k++) {
        let pi = 0;
        let pj = 0;
        for (let s = 0; s < n; s++) {
          if (arr[k][s] === i) pi = s;
          else if (arr[k][s] === j) pj = s;
        }
        // i와 j가 같은 경우엔 pi === pj가 돼서 그냥 넘어가게됨
        if (pi < pj) cnt++;
      }
      // 모든 테스트를 통과해야 만족하는 것임.
      if (cnt === m) answer++;
    }
  }
  return answer;
}
let arr = [
  [3, 4, 1, 2],
  [4, 3, 2, 1],
  [3, 1, 4, 2],
];
console.log(solution(arr));
