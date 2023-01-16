/**
 * [Two Pointers Algorithm]
 * 연속 부분 수열2
 * @param {number} m 특정 숫자 m
 * @param {Array} arr n개의 수로 이루어진 수열
 * @returns {number} m이 되는 경우의 횟수
 * 수열에서 연속부분수열의 합이 특정숫자 M이하가 되는 경우가 몇 번 있는지 구하기
 * m=5이고 arr = [1,3,1,2,3] 이면 합이 5이하가 되는 연속부분수열은 
 * {1}, {3}, {1}, {2}, {3}, {1, 3}, {3, 1}, {1, 2}, {2, 3}, {1, 3, 1}로 총 10가지
 * 수열의 원소값은 1000을 넘지 않는 자연수이다.
 */

// 연속 부분 수열1 문제를 풀었던 것처럼 rt를 증가시키면서 더한 값(sum)과 m을 비교하고 
// sum이 m 이하면 카운트, 아니면 sum -= arr[lt]를 사용해서 빼주고 m과 비교하려고했는데 
// 잘 안 됐음ㅠㅠ(중간 범위가 빠지기도하고..카운팅이 이상하게됨)
// 풀이는..rt의 값에 1씩 더해주면서 끝자리 숫자를 구하고 sum에 더해주고 비교하면서 진행 

function solution(m, arr) {
  let answer = 0, lt  = 0, sum = 0;
  for(let rt = 0; rt < arr.length; rt++){
    // rt의 값에 1씩 추가하면서 끝자리가 되는 숫자를 추가하고
    // sum 에도 더해주고 갯수도 더해줌(갯수 구하는 방법 : rt-lt+1)
    sum += arr[rt];
    // sum을 기준으로 lt를 증가시킬지 말지 결정함
    
    // m을 초과했을 때 앞에서부터 값을 빼면서 범위를 좁혀줌
    // sum <= m 이 될 때까지 lt는 1씩 증가한다.
    while(sum > m){
      sum -= arr[lt++];
    }
    answer +=(rt-lt+1);
  }
  
  return answer;
}
let a=[1,3,1,2,3];
console.log(solution(5, a));