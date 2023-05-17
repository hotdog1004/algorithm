/**
 * 마구간 정하기(결정알고리즘)
 * @param {number} c
 * @param {number[]} stable 마구간의 좌표
 * @return {number} 가장 가까운 두 말의 최대거리
 * N개의 마구간이 수직선상에 있습니다. 각 마구간은 x1, x2, x3, ......, xN의 좌표를 가지며, 마구간간에 좌표가 중복되는 일은 없습니다
 * 현수는 C마리의 말을 가지고 있는데, 이 말들은 서로 가까이 있는 것을 좋아하지 않습니다.
 * 각 마구간에는 한 마리의 말만 넣을 수 있고, 가장 가까운 두 말의 거리가 최대가 되게 말을 마구간에 배치하고 싶습니다.
 * C마리의 말을 N개의 마구간에 배치했을 때 가장 가까운 두 말의 거리가 최대가 되는 그 최대값을 출력하는 프로그램을 작성하세요.
 * 마구간의 좌표 0 <= stable <= 1000000000
 */

function solution(c, stable) {
  let answer;
  stable.sort((a, b) => a - b);
  // 거리이기때문에 start = 1로 초기화
  let start = 1;
  let end = stable[stable.length - 1];

  const countHorse = (mid) => {
    let cnt = 1;
    // 첫번쨰 말은 무조건 첫 좌표에 넣는 것이 유리함
    let ep = stable[0];
    for (let i = 1; i < stable.length; i++) {
      if (stable[i] - ep >= mid) {
        cnt++;
        ep = stable[i];
      }
    }
    return cnt;
  };

  while (start <= end) {
    let mid = parseInt((start + end) / 2);

    if (countHorse(mid) < c) {
      end = mid - 1;
    } else {
      answer = mid;
      start = mid + 1;
    }
  }
  return answer;
}

console.log(solution(3, [1, 2, 8, 4, 9]));
