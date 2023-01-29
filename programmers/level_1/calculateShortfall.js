/**
 * 부족한 금액 계산하기
 * @param {number} price
 * @param {number} money
 * @param {number} count
 * @returns {number} 
 * 놀이기구의 원래 이용료는 price원 인데, 놀이기구를 N 번 째 이용한다면 원래 이용료의 N배를 받기로 했다.
 * 처음 이용료가 100이었다면 2번째에는 200, 3번째에는 300으로 요금이 인상된다.
 * 놀이기구를 count번 타게 되면 현재 자신이 가지고 있는 금액에서 얼마가 모자라는지를 return
 * 금액이 부족하지 않으면 0을 return 
 * 놀이기구의 이용료 price : 1 ≤ price ≤ 2,500, price는 자연수
 * 처음 가지고 있던 금액 money : 1 ≤ money ≤ 1,000,000,000, money는 자연수
 * 놀이기구의 이용 횟수 count : 1 ≤ count ≤ 2,500, count는 자연수
 */

function solution(price, money, count) {
  let answer = 0;
  for(let i = 1; i <= count; i++){
      answer += price * i;
  }
  return answer < money ? 0 : answer-money;
}

console.log(solution(3,20,4));