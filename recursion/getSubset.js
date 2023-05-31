/**
 * 부분집합 구하기(이진트리 DFS)
 * @param {number} n
 * @return {number[]}
 * 자연수 N이 주어지면 1부터 N까지의 원소를 갖는 집합의 부분집합을 모두 출력하는 프로그램을 작성하세요.
 * 첫 번째 줄부터 각 줄에 하나씩 부분집합을 아래와 출력예제와 같은 순서로 출력한다.
 * 단 공집합은 출력하지 않습니다.
 */

function solution(n) {
  let asnwer = [];
  let ch = Array.from({ length: n + 1 }, () => 0);
  const DFS = (v) => {
    if (v === n + 1) {
      let tmp = "";
      for (let i = 1; i <= n; i++) {
        if (ch[i] === 1) tmp += i + " ";
      }
      if (tmp.length > 0) asnwer.push(tmp.trim());
    } else {
      ch[v] = 1; // 포함 시킨다
      DFS(v + 1);
      ch[v] = 0; // 포함 안 시킨다.
      DFS(v + 1);
    }
  };

  DFS(1);
  return asnwer;
}

console.log(solution(3));
