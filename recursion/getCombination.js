/**
 * 조합 구하기
 * @param {number} n
 * @param {number} m
 * @return {number[]}
 * 1부터 N까지 번호가 적힌 구슬이 있습니다. 이 중 M개를 뽑는 방법의 수를 출력하는 프로그램을 작성하세요.
 * 출력순서는 오름차순입니다.
 * 3 <= n <= 10
 * 2 <= m <= n
 */

function solution(n, m) {
  let answer = [];
  let tmp = Array.from({ length: m }, () => 0);

  const DFS = (L, startNumber) => {
    if (L === m) {
      answer.push(tmp.slice());
    } else {
      for (let i = startNumber; i <= n; i++) {
        tmp[L] = i;
        DFS(L + 1, i + 1);
      }
    }
  };
  DFS(0, 1);
  return answer;
}

console.log(solution(4, 2));
