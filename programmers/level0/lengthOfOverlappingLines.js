/**
 * 겹치는 선분의 길이
 * @param {Array} lines 2차원배열
 * @returns {number} 두 개 이상의 선분이 겹치는 부분의 길이 
 * 세 선분의 시작과 끝 좌표가 [[start, end], [start, end], [start, end]] 형태로 들어있는 2차원 배열 lines가 있을 때
 * 두 개 이상의 선분이 '겹치는' 부분의 길이를 return
 * lines의 길이 = 3
 * lines의 원소 길이 = 2
 * 모든 선분은 길이가 1 이상이다.
 * lines의 원소는 [a,b]형태이며, a,b는 각각 선분의 양끝점이다.
 * -100 <= a < b <= 100
 */

function solution(lines) {
  // -100 <= a < b <= 100 이지만 그냥 길이가 200인 배열이라고 생각하면 쉽다.
  // 길이가 200인 배열은 0으로 채운 후 
  // 선분이 지나가는 곳이면 +1을 해준다.
  // 그 후 원소가 2 이상인 부분(겹치는 부분)의 개수를 리턴
  let answer = 0;
  let lineArr = new Array(200);
  lineArr.fill(0); // 0으로 채우기

  for(let i = 0; i < 3; i++){
    let start = lines[i][0]; // 시작원소
    let end =  lines[i][1]; // 끝원소

    // 시작점~끝점까지 반복하여 1씩 더해줌
    for(let j = start; j < end; j++){ 
      lineArr[j+100] += 1;
    }
  }

  lineArr.forEach(num=>{
    if(num >= 2) answer++;
  })

  return answer;
}

let arr = [[1, 3], [1, 9], [6, 9]];
console.log(solution(arr));