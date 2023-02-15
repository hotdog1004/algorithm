/**
 * 소수찾기
 * @param {number} n
 * @returns {number} 
 * 1부터 입력받은 숫자 n 사이에 있는 소수의 개수를 반환하는 함수, solution을 만들어 보세요.
 * 1은 소수가 아닙니다.
 * n은 2이상 1000000이하의 자연수입니다.
 */

function solution(n) {
  let answer = 0;
  const arr = new Array(n+1).fill(true);
  const root = Math.sqrt(n);
  
  // 아리스토테네스의 체 방법을 활용하여 풀기
  for(let i = 2; i <= root; i++){
      // 소수가 아닌 인덱스는 패스
      if(arr[i] === false) continue;
      // 소수의 배수인 index를 가진 value는 false로 처리
      for(let j = i*i; j <= n; j += i){
          arr[j] = false;
      }
  }
  // 소수 개수 체크
  for(let i = 2; i <= n; i++){
      if(arr[i]) answer++;
  }
  
  return answer;
}

console.log(solution(10));