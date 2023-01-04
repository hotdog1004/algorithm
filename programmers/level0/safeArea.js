/**
 * 안전지대
 * @param {Array} board 2차원배열(n*n 배열)
 * @returns {number} 안전한 지역의 칸수
 * 지뢰는 2차원 배열 board에 1로 표시
 * 지뢰가 있는 지역과 지뢰에 인접한 위, 아래, 좌, 우, 대각선 칸을 모두 위험지역으로 분류한다.
 * 지뢰가 매설된 지역의 지도 board가 주어질 때 안전한 지역의 칸 수를 return 
 * 1 <= n <= 100
 * board에는 지뢰가 매설된 지역 1과 지뢰가 없는 지역 0만 존재
 */

function solution(board) {
  // 지뢰가 있는 지역 외 인접한 위, 아래, 좌, 우, 대각선 칸을 체크하기 위해 각각 좌표를 만들어준다.
  // board를 깊은복사하여 newArr를 만든다.(원본 배열은 건드리지않고 새 배열에 위험한 지역을 표시)
  // 2차원 배열 board를 전체적으로 순회하며 값이 1인 경우 newArr의 해당 좌표에 1을 대입
  // 또 해당 좌표의 근처를 탐색하여 newArr에서 좌표가 맞는 곳의 값에 2를 대입

  const xLen = board[0].length;
  const yLen = board.length;
  
  let newArr = JSON.parse(JSON.stringify(board));
  const xMark = [-1,-1,-1,0,0,1,1,1];
  const yMark = [-1,0,1,-1,1,-1,0,1];
  let cnt = 0;
  for(let i = 0; i < xLen; i++){
      for(let j = 0; j < yLen; j++){
          if(board[i][j]===1){
              newArr[i][j] =1;
              for(let k = 0; k < 8; k++){
                  let x = xMark[k];
                  let y = yMark[k];
                  
                  let newX = i+x;
                  let newY = j+y;
                  if(0 <= newX && newX <= (xLen-1) && 0 <= newY && newY <= (yLen-1) && newArr[newX][newY] !== 1){
                      newArr[newX][newY] =2;
                  }
              }
          }
      }
  }  
  // 새로 만든 배열을 탐색하여 값이 0일 때 cnt에 1을 추가.
  newArr.forEach(item=>{
      item.forEach(val => {
          if(val === 0) cnt++;
      })
  });
  
  return cnt;
}


let arr = [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 1, 0, 0], [0, 0, 0, 0, 0]];
console.log(solution(arr));