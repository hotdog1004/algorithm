/**
 * 최대 점수 구하기(냅색 알고리즘)
 * @param {number} M 제한시간
 * @param {number[]} ps 문제를 풀었을 때의 점수대한 배열
 * @param {number[]} pt 문제를 풀었을 때의 시간에 대한 배열
 * @return {number} 제한시간 안에 얻을 수 있는 최대 점수
 * 이번 정보올림피아드대회에서 좋은 성적을 내기 위하여 현수는 선생님이 주신 N개의 문제를 풀려고 합니다.
 * 각 문제는 그것을 풀었을 때 얻는 점수와 푸는데 걸리는 시간이 주어지게 됩니다.
 * 제한시간 M안에 N개의 문제 중 최대점수를 얻을 수 있도록 해야 합니다.
 * (해당문제는 해당시간이 걸리면 푸는 걸로 간주한다, 한 유형당 한개만 풀 수 있습니다.)
 */

function solution(m, ps, pt) {
  let answer = 0;
  let dy = Array.from({ length: m + 1 }, () => 0);
  // j라는 시간동안 얻을 수 있는 최대 점수가 dy[j]
  // j = m~pt[i]까지 돌면 중복적용을 피할 수 있다.
  for (let i = 0; i < ps.length; i++) {
    for (let j = m; j >= pt[i]; j--) {
      dy[j] = Math.max(dy[j], dy[j - pt[i]] + ps[i]);
    }
  }
  answer = dy[m];
  return answer;
}

// 점수 배열
const ps = [10, 25, 15, 6, 7];
// 시간 배열
const pt = [5, 12, 8, 3, 4];
console.log(solution(20, ps, pt));
