/**
 * 콜라츠 추측
 * @param {number} num 자연수 num
 * @returns {number} 
 * 콜라츠 추측 : 주어진 수가 1이 될 때까지 다음 작업을 반복하면, 모든 수를 1로 만들 수 있다는 추측
 * 1-1. 입력된 수가 짝수라면 2로 나눕니다. 
 * 1-2. 입력된 수가 홀수라면 3을 곱하고 1을 더합니다. 
 * 2. 결과로 나온 수에 같은 작업을 1이 될 때까지 반복합니다. 
 * 위의 작업들을 몇번이나 반복하는지 리턴
 * 주어진 수가 1인 경우에는 0을, 작업을 500번 반복할 때까지 1이 되지 않는다면 –1을 리턴
 */

function solution(num) {
  let answer = 0;
  if(num === 1) return 0;
  while(num !== 1){
      if(num % 2 === 0) num /= 2;
      else num = (num*3)+1;
      answer++;
      if(answer >= 500) return -1;
  }
  return answer;
}

console.log(solution(6));