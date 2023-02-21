/**
 * 실패율 
 * @param {number} N
 * @param {Array} stages
 * @returns {Array}
 * 실패율은 다음과 같이 정의한다.
 * 스테이지에 도달했으나 아직 클리어하지 못한 플레이어의 수 / 스테이지에 도달한 플레이어 수
 * 전체 스테이지의 개수 N, 게임을 이용하는 사용자가 현재 멈춰있는 스테이지의 번호가 담긴 배열 stages가 매개변수로 주어질 때, 
 * 실패율이 높은 스테이지부터 내림차순으로 스테이지의 번호가 담겨있는 배열을 return 하도록 solution 함수를 완성하라.
 * 스테이지의 개수 N은 1 이상 500 이하의 자연수이다.
 * stages의 길이는 1 이상 200,000 이하이다.
 * stages에는 1 이상 N + 1 이하의 자연수가 담겨있다. 각 자연수는 사용자가 현재 도전 중인 스테이지의 번호이다. 단 N+1은 마지막 스테이지까지 클리어 한 사용자이다.
 * 만약 실패율이 같은 스테이지가 있다면 작은 번호의 스테이지가 먼저 오도록 하면 된다.
 * 스테이지에 도달한 유저가 없는 경우 해당 스테이지의 실패율은 0 으로 정의한다.
 */

function solution(n,stages){
  
  let arr = new Array(n).fill(0);
  stages.sort((a,b)=>a-b).forEach((num)=>{
    if(num <= n){
      if(arr[num-1] > 0) arr[num-1]++;
      else arr[num-1] = 1;  
    }
  })

  let player = stages.length;
  let map = new Map()
  let answer = []
  arr.forEach((cnt)=>{
    if(cnt > 0) {
      answer.push(cnt/player)
    }else if(cnt === 0) answer.push(0/player)
    player -= cnt;
  })

  answer.forEach((cnt, idx)=>{
    map.set(idx+1, cnt)
  })

  const result = [...map].sort((a,b)=>{
    if(a[1]===b[1]) return a[0]-b[0];
    else return b[1]-a[1];
  })
  return result.map(val=>val[0]);
}


function bestSolution(N, stages) {
  let stageRatio = [];
  let users = stages.length;
  
  for(let i = 1; i <= N; i++) {
      let noClear = stages.filter((user) => i === user).length;
      // filter 함수를 사용해서 클리어하지 못한 유저의 수를 구함
      // stages의 원소들을 체크하여 i와 같을시 (스테이지에 머물러 있는 유저일 경우) 해당 길이를 반환.
      let ratio = noClear/users;
      // 실패율 구하기
      users -= noClear;
      stageRatio.push({stage:i, ratio:ratio});
      // 실패율과 스테이지 번호를 객체 형태로 push(실패율이 같을 시 스테이지 번호로 정렬해야하기때문)
  }
  
  // 정렬해주기
  stageRatio.sort((a, b) => {
      if(a.ratio === b.ratio) return a.stage - b.stage;
      else return b.ratio - a.ratio;
  });
  
  // 스테이지 번호만 배열로 리턴
  return stageRatio.map(obj => obj.stage);
}

// console.log(solution(5, [2, 1, 2, 6, 2, 4, 3, 3]));
console.log(bestSolution(4, [4,4,4,4,4]	));