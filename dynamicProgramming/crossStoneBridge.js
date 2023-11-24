/**
 * 돌다리 건너기
 * @param {number} n
 * @return {number}
 * 철수는 학교에 가는데 개울을 만났습니다. 개울은 N개의 돌로 다리를 만들어 놓았습니다.
 * 철수는 돌 다리를 건널 때 한 번에 한 칸 또는 두 칸씩 건너뛰면서 돌다리를 건널 수 있습니다.
 * 철수가 개울을 건너는 방법은 몇 가지일까요?
 * 첫째 줄은 돌의 개수인 자연수 N(3≤N≤45)이 주어집니다.
 */

// 어디서 왔는지가 중요!!!!
function solution(n) {
  let answer = 0;
  let dy = Array.from({ length: n + 2 }, () => 0);
  dy[1] = 1;
  dy[2] = 2;
  for (let i = 3; i <= n + 1; i++) {
    dy[i] = dy[i - 1] + dy[i - 2];
  }

  answer = dy[n + 1];
  return answer;
}

console.log(solution(7));
