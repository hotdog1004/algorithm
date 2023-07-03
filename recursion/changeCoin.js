/**
 * 동전교환(DFS-Cut Edge Tech)
 * @param {number[]} coins 동전의 종류
 * @param {number} change 거슬러 줄 금액
 * @return {number} 최소 동전교환 수
 * 다음과 같이 여러 단위의 동전들이 주어져 있을때 거스름돈을 가장 적은 수의 동전으로 교환해주려면 어떻게 주면 되는가? 각 단위의 동전은 무한정 쓸 수 있다.
 * 각 동전의 종류를 100원을 넘지 않는다.
 */

// 중복 수열과 똑같은 문제
function solution(coins, change) {
  let answer = Number.MAX_SAFE_INTEGER;
  const DFS = (L, sum) => {
    if (sum > change) return;
    if (L >= answer) return;
    if (change === sum) {
      answer = Math.min(answer, L);
    } else {
      for (let i = 0; i < coins.length; i++) {
        DFS(L + 1, sum + coins[i]);
      }
    }
  };
  DFS(0, 0);
  return answer;
}

console.log(solution([1, 2, 5], 15));
