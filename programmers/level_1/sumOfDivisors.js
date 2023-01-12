/**
 * 약수의 합
 * @param {number} n 정수
 * @returns {number} 약수를 모두 더한 값
 * 정수 n을 입력받아 n의 약수를 모두 더한 값을 리턴
 * n은 0 이상 3000이하인 정수.
 */

function solution(n) {
  // 약수 문제는 기존에 다뤄본 경험이 있어서 Math.sqrt()을 이용해서 효율적으로 풀려고 노력함
  // 하지만 여러가지 test case를 생각하는 능력이 부족한 것 같다.
  // test case 12 : n = 16 4*4의 경우(제곱수이면서 약수가 존재하는 수일 떄) 약수는 한개만 존재해야함!
  // test case 1 : n =1 1의 약수는 1이니 1을 리턴
  // test case 16 : n = 0 0의 약수는 0이니 0을 리턴 
  if(n === 1) return 1;
  if(n === 0) return 0;
  let answer = 0;
  const sqrtNum = Math.floor(Math.sqrt(n));
  for(let i = 1; i <= sqrtNum; i++){
      if(n % i === 0){
          answer += i;
          if( n / i !== i) answer += (n / i);
      }
  }
  return answer;
}

console.log(solution(16));