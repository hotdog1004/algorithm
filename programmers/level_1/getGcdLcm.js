/**
 * 최대공약수와 최소공배수
 * @param {number} n
 * @param {number} m
 * @returns {Array} 
 * 두 수를 입력받아 두 수의 최대공약수와 최소공배수를 리턴
 * 배열의 맨 앞에 최대공약수를, 그 다음엔 최소공배수를 넣어서 리턴한다.
 * 두 수는 1이상 1000000이하의 자연수이다.
 */

function solution(n, m) {
  // 최대 공약수 구하기
  const gcd = (a, b)=> a%b === 0 ? b : gcd(b, a % b);
  // 최소 공배수 구하기
  const lcm = (a, b)=> a * b / gcd(a, b);
  
  const max = Math.max(n, m);
  const min = Math.min(n, m);

  return [gcd(max, min), lcm(max, min)]
}

console.log(solution(2, 12));