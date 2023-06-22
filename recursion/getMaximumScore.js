/**
 * 최대 점수 구하기(DFS)
 * @param {number} M 제한시간
 * @param {number[]} ps 문제를 풀었을 때의 점수대한 배열
 * @param {number[]} pt 문제를 풀었을 때의 시간에 대한 배열
 * @return {number} 제한시간 안에 얻을 수 있는 최대 점수
 * 이번 정보올림피아드대회에서 좋은 성적을 내기 위하여 현수는 선생님이 주신 N개의 문제를 풀려고 합니다.
 * 각 문제는 그것을 풀었을 때 얻는 점수와 푸는데 걸리는 시간이 주어지게 됩니다.
 * 제한시간 M안에 N개의 문제 중 최대점수를 얻을 수 있도록 해야 합니다.
 * (해당문제는 해당시간이 걸리면 푸는 걸로 간주한다, 한 유형당 한개만 풀 수 있습니다.)
 */

function solution(M, ps, pt) {
  let answer = Number.MIN_SAFE_INTEGER;
  const n = ps.length;
  const DFS = (L, sum, time) => {
    if (time > M) return;
    if (n === L) {
      answer = Math.max(answer, sum);
    } else {
      DFS(L + 1, sum + ps[L], time + pt[L]);
      DFS(L + 1, sum, time);
    }
  };

  DFS(0, 0, 0);

  return answer;
}

// 점수 배열
const ps = [10, 25, 15, 6, 7];
// 시간 배열
const pt = [5, 12, 8, 3, 4];
console.log(solution(20, ps, pt));
