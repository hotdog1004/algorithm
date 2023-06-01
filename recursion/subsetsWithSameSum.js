/**
 * 합이 같은 부분집합 (DFS:아마존 인터뷰)
 * @param {number[]} arr
 * @return {string}
 * N개의 원소로 구성된 자연수 집합이 주어지면, 이 집합을 두 개의 부분집합으로 나누었을 때
 * 두 부분집합의 원소의 합이 서로 같은 경우가 존재하면 “YES"를 출력하고, 그렇지 않으면 "NO"를 출력하는 프로그램을 작성하세요.
 * 둘로 나뉘는 두 부분집합은 서로소 집합(Disjoint Set)이며, 두 부분집합을 합하면 입력으로 주어진 원래의 집합이 되어야 합니다.
 * 예를 들어 {1, 3, 5, 6, 7, 10}이 입력되면 {1, 3, 5, 7} = {6, 10} 으로 두 부분집합의 합이 16으로 같은 경우가 존재하는 것을 알 수 있습니다.
 * arr의 각 원소는 중복되지 않으며 크기는 1,000,000 이하이다.
 */

function solution(arr) {
  // arr에서 하나의 부분집합을 만들면 나머지는 다른 부분집합이 된다.
  // 만든 부분집합의 합 - 총합 === 만든 부분집합의 합 이 되면 YES를 출력하면 된다.
  // 만든 부분집합의 합을 구하는 부분을 재귀로 구현하면 된다.
  // DFS(L, sum)으로 접근할 것

  let answer = "NO";
  // 두 부분집합이 합이 같은 경우엔 flag의 값을 1로 만들어서 더 이상 진행되지 않도록 처리
  let total = arr.reduce((a, b) => a + b, 0);
  let n = arr.length;

  const DFS = (L, sum) => {
    if (answer === "YES") return;
    if (L === n) {
      if (total - sum === sum) {
        answer = "YES";
      }
    } else {
      DFS(L + 1, sum + arr[L]); // 적용한 케이스
      DFS(L + 1, sum); // 적용 안 한 케이스(가지가 더 생기지만 값을 더해주진 않음!)
    }
  };

  DFS(0, 0);
  return answer;
}

console.log(solution([1, 3, 5, 6, 7, 10]));
