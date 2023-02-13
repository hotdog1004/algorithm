/**
 * 콜라문제
 * @param {number} a
 * @param {number} b
 * @param {number} n
 * @returns {number} 
 * 빈 병 a개를 가져다주면 콜라 b병을 주는 마트가 있을 때, 빈 병 n개를 가져다주면 몇 병을 받을 수 있는지 계산하는 문제
 * 보유 중인 빈 병이 a개 미만이면, 추가적으로 빈 병을 받을 순 없다.
 * 콜라를 받기 위해 마트에 주어야 하는 병 수 a, 빈 병 a개를 가져다 주면 마트가 주는 콜라 병 수 b, 상빈이가 가지고 있는 빈 병의 개수 n이 매개변수로 주어질 떄,
 * 상빈이가 받을 수 있는 콜라의 병 수를 return
 * 1 ≤ b < a ≤ n ≤ 1,000,000
 * 정답은 항상 int 범위를 넘지 않게 주어진다.
 */

function solution(a, b, n) {
  let answer = 0;
  while(n >= a){
      answer += Number.parseInt(n/a)*b;
      n = (n%a)+Number.parseInt(n/a)*b;
  }
  
  return answer;
}
console.log(solution(2,1,20));