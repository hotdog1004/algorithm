/**
 * 이진트리 넓이우선탐색(BFS)
 * @return {string}
 * 아래 그림과 같은 이진트리를 넓이우선탐색해 보세요.
 */

function solution() {
  let answer = "";
  let queue = [];
  queue.push(1);

  while (queue.length) {
    let v = queue.shift();
    answer += v + " ";
    for (let nv of [v * 2, v * 2 + 1]) {
      if (nv > 7) continue;
      queue.push(nv);
    }
    // if (v * 2 <= 7 && v * 2 + 1 <= 7) {
    //   queue.push(v * 2);
    //   queue.push(v * 2 + 1);
    // }
  }

  return answer;
}
console.log(solution());
