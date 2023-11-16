/**
 * 섬나라 아일랜드(DFS)
 * @param {number} n
 * @param {number[][]} board 격자판 정보
 * @return {number} 점프의 최소횟수
 * N*N의 섬나라 아일랜드의 지도가 격자판의 정보로 주어집니다.
 * 각 섬은 1로 표시되어 상하좌우와 대각선으로 연결되어 있으며, 0은 바다입니다.
 * 섬나라 아일랜드에 몇 개의 섬이 있는지 구하는 프로그램을 작성하세요.
 * 3 <= n <= 20
 * 첫 번째 줄에 섬의 개수를 출력하세요
 */

function solution(board) {
  let answer = 0;
  let n = board.length;
  const dx = [-1, -1, -1, 0, 1, 1, 1, 0];
  const dy = [-1, 0, 1, 1, 1, 0, -1, -1];

  const DFS = (x, y) => {
    board[x][y] = 0;
    for (let k = 0; k < dx.length; k++) {
      let nx = x + dx[k];
      let ny = y + dy[k];
      if (nx >= 0 && nx < n && ny >= 0 && ny < n && board[nx][ny] === 1) {
        DFS(nx, ny);
      }
    }
  };
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === 1) {
        // 섬을 발견하면
        answer++;
        DFS(i, j);
      }
    }
  }

  return answer;
}
let arr = [
  [1, 1, 0, 0, 0, 1, 0],
  [0, 1, 1, 0, 1, 1, 0],
  [0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 1, 1],
  [1, 1, 0, 1, 1, 0, 0],
  [1, 0, 0, 0, 1, 0, 0],
  [1, 0, 1, 0, 1, 0, 0],
];
console.log(solution(arr));
