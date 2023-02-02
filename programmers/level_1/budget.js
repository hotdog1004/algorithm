/**
 * 예산
 * @param {Array} d
 * @param {number} budget
 * @returns {number} 
 * S사에서는 각 부서에 필요한 물품을 지원해 주기 위해 부서별로 물품을 구매하는데 필요한 금액을 조사했다.
 * 그러나, 전체 예산이 정해져 있기 때문에 모든 부서의 물품을 구매해 줄 수는 없다.
 * 물품을 구매해줄 때는 각 부서가 신청한 금액만큼을 모두 지원해줘야한다.
 * e.g. 1,000원을 신청한 부서에는 정확히 1,000원을 지원해야 하며, 1,000원보다 적은 금액을 지원해 줄 수는 없다.
 * 부서별로 신청한 금액이 들어있는 배열 d와 예산 budget이 매개변수로 주어질 때, 
 * 최대 몇 개의 부서에 물품을 지원할 수 있는지 리턴
 */

function solution(d, budget) {
  let answer = 0;
  let sum = 0;

  d = d.sort((a,b)=> a-b);
  for(x of d){
    if(sum + x <= budget){
      sum += x
      answer++;
    }else{
      return answer;
    }
  }
  return answer;
}

console.log(solution([1,3,2,5,4], 9));