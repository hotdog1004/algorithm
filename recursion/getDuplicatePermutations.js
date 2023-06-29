/**
 * 중복순열 구하기
 * @param {number} n
 * @param {number} m
 * @return {number[]}
 * 1부터 N까지 번호가 적힌 구슬이 있습니다. 이 중 중복을 허락하여 M번을 뽑아 일렬로 나열하는 방법을 모두 출력합니다.
 * 결과를 출력하고 마지막에 총 경우의 수를 출력합니다. 출력순서는 오름차순입니다.
 * 3 <= n <= 10
 * 2 <= m <= n
 */

function solution(n, m) {
  let answer = [];
  let tmp = Array.from({ length: m }, () => 0);

  const DFS = (L) => {
    if (L === m) {
      answer.push(tmp.slice());
      return;
    } else {
      for (let i = 1; i <= n; i++) {
        tmp[L] = i;
        DFS(L + 1);
      }
    }
  };
  DFS(0);

  return answer;
}

console.log(solution(3, 2));
