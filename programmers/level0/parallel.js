/**
 * 평행
 * @param {Array} dots 점 네 개의 좌표를 담은 2차원배열
 * @returns {number} 평행 or 겹치는 경우는 1 / 아니면 0 return
 * dots : [[x1, y1], [x2, y2], [x3, y3], [x4, y4]]
 * 주어진 네 개의 점을 두 개씩 이었을 때, 두 직선이 평행이 되는 경우가 있으면 1 return,
 * 없으면 0을 return
 * 0 ≤ dots의 원소 ≤ 100
 * 서로 다른 두개 이상의 점이 겹치는 경우는 없다.
 * 두 직선이 겹치는 경우(일치하는 경우)에도 1을 return
 */

function solution(dots) {
  // 기울기를 구해서 arr이라는 배열에 push한다.
  // 기울기(m) 구하는 공식 : m = (y2-y1)/(x2-x1)
  // arr 배열에 같은 값이 존재하면 1을 return 아니면 0을 return

  let arr = [];
  let division = 0;
  
  for(let i = 0; i < 4; i++){
      for(let j = i+1; j < 4; j++){
          division = (dots[j][1]-dots[i][1])/(dots[j][0]-dots[i][0]);
          if(arr.includes(division)) return 1;
          arr.push(division);
      }
  }
  return 0;
}

let arr = [[1, 4], [9, 2], [3, 8], [11, 6]]
console.log(solution(arr));
