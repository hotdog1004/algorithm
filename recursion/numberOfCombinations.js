/**
 * 조합의 경우 수(메모이제이션)
 * @param {number} n
 * @param {number} r
 * @return {number}
 * 다음 공식을 사용하여 재귀를 이용해 조합수를 구해주는 프로그램을 작성하세요.
 * nCr = n-1Cr-1+n-1Cr
 * n(3<=n<=33)  r(0<=r<=n)
 */

function solution(n, r) {
  let answer;
  // 메모이제이션 처리
  let dy = Array.from(Array(n + 1), () => Array(n + 1).fill(0));
  const DFS = (n, r) => {
    if (dy[n][r] > 0) return dy[n][r];
    if (n === r || r === 0) return 1;
    else return (dy[n][r] = DFS(n - 1, r - 1) + DFS(n - 1, r));
  };
  answer = DFS(n, r);

  return answer;
}

console.log(solution(5, 3));
