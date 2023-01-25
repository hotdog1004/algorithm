/**
 * 약수의 개수와 덧셈
 * @param {number} left
 * @param {number} right
 * @returns {number} 
 * left부터 right까지의 모든 수들 중에서, 
 * 약수의 개수가 짝수인 수는 더하고, 약수의 개수가 홀수인 수는 뺀 수를 return 
 * 1 <= left <= right <= 1,000
 */

function solution(left, right) {
  let answer = 0;
  /*
  밑의 방법은 약수의 개수를 일일이 체크해서 분기처리하는 것
  for(left; left <= right; left++){
      let cnt = 0;
      for(let i = 1; i <= Math.sqrt(left); i++){
          if(left % i === 0) cnt+= 2;
          if(left / i === i) cnt--;
      }
      if(cnt % 2 === 0) answer += left;
      else answer -= left;
  }
  */

  // 약수의 원리를 생각해보면 쉽게 풀 수 있음!
  // 제곱근이 정수이면 약수의 개수는 홀수임
  // n=4일 때 4의 제곱근은 2임(=정수)
  // 4의 약수는 1,2,4로 3개가 존재 => 홀수
  // 문제는 약수의 개수가 짝수면 해당 값을 더하고, 홀수면 빼주는 것! 굳이 일일이 구하지 않아도된다.
  
  for(left; left <= right; left++){
      if(Number.isInteger(Math.sqrt(left))) answer -= left;
      else answer += left;
  }
  
  return answer;
}
console.log(solution(24,27));