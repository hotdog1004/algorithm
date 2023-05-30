/**
 * 이진트리 순회(깊이우선탐색)
 * @param {number} v
 * v부터 n까지의 숫자를 가진 이진트리가 있다고 가정하고
 * 전위순회, 중위순회, 후위순회하는 함수 작성하기
 */

function solution(v, n) {
  const DFS = (v) => {
    if (v > n) return;
    else {
      // 이 위치면 전위순회
      // console.log(v);
      DFS(v * 2);
      // 이 위치면 중위순회
      console.log(v);
      DFS(v * 2 + 1);
      // 이 위치면 후위순회
      //   console.log(v);
    }
  };
  DFS(v);
}

console.log(solution(1, 7));
