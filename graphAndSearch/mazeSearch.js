/**
 * 미로탐색(DFS)
 * @param {number[][]} board
 * @return {number}
 * 7*7 격자판 미로를 탈출하는 경로의 가지수를 출력하는 프로그램을 작성하세요.
 * 출발점은 격자의  (1, 1) 좌표이고, 탈출 도착점은 (7, 7)좌표입니다..
 * 격자판의 1은 벽이고, 0은 통로입니다.
 * 격자판의 움직임은 상하좌우로만 움직입니다.
 */

function solution(board) {
  let answer = 0;
  // 네 방향이니까 방향 배열 미리 만들어주기
  const dx = [0, -1, 0, 1];
  const dy = [1, 0, -1, 0];

  const DFS = (x, y) => {
    if (x === 6 && y === 6) answer++;
    else {
      for (let k = 0; k < 4; k++) {
        let nx = x + dx[k];
        let ny = y + dy[k];
        // board를 넘어가지않도록 조건 체크
        if (nx >= 0 && nx <= 6 && ny >= 0 && ny <= 6 && board[nx][ny] === 0) {
          board[nx][ny] = 1; // 오던길은 체크해주기
          DFS(nx, ny);
          board[nx][ny] = 0; // back할 땐 체크 풀어주기
        }
      }
    }
  };
  board[0][0] = 1;
  DFS(0, 0);
  return answer;
}
let arr = [
  [0, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 1, 1, 0],
  [0, 0, 0, 1, 0, 0, 0],
  [1, 1, 0, 1, 0, 1, 1],
  [1, 1, 0, 0, 0, 0, 1],
  [1, 1, 0, 1, 1, 0, 0],
  [1, 0, 0, 0, 0, 0, 0],
];

console.log(solution(arr));
