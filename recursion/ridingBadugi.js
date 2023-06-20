/**
 * 바둑이 승차(DFS)
 * @param {number} C
 * @param {number[]} arr n마리의 바둑이의 무게
 * @return {}
 * 철수는 그의 바둑이들을 데리고 시장에 가려고 한다. 그런데 그의 트럭은 C킬로그램 넘게 태울 수가 없다.
 * 철수는 C를 넘지 않으면서 그의 바둑이들을 가장 무겁게 태우고 싶다.
 * N마리의 바둑이와 각 바둑이의 무게 W가 주어지면, 철수가 트럭에 태울 수 있는 가장 무거운 무게를 구하는 프로그램을 작성하세요.
 * C(1<=C<=100,000,000)
 * 1 <= arr의 길이 <= 30
 */

// 이진트리 부분집합.
// 태운다/태우지않는다로 경우의 수가 나뉨.
function solution(c, arr) {
  let answer = Number.MIN_SAFE_INTEGER;
  const n = arr.length;
  const DFS = (L, sum) => {
    if (sum > c) return;
    if (L === n) {
      answer = Math.max(answer, sum);
    } else {
      DFS(L + 1, sum + arr[L]); // 태운다
      DFS(L + 1, sum); // 태우지 않는다
    }
  };

  DFS(0, 0);
  return answer;
}

const arr = [81, 58, 42, 33, 61];
console.log(solution(259, arr));
