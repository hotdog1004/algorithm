/**
 * 하샤드 수
 * @param {number} x 
 * @returns {number} 
 * 양의 정수 x가 하샤드 수이려면 x의 자릿수의 합으로 x가 나누어져야한다.
 * e.g)  18의 자릿수 합은 1+8=9이고, 18은 9로 나누어 떨어지므로 18은 하샤드 수이다.
 * 자연수 x를 입력받아 x가 하샤드 수인지 아닌지 체크해서 리턴
 */

function solution(x) {
  let arr = String(x).split('');
  let sum = 0;
  arr.forEach(s=>{
      sum += Number.parseInt(s);
  })
  return x % sum === 0;
}
console.log(solution(10));