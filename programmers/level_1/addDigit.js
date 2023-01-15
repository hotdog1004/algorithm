/**
 * 자릿수 더하기
 * @param {number} n 자연수 n
 * @returns {number} 전부 더한 값 
 * N의 각 자릿수의 합을 구해서 return
 */
function solution(n){
  let answer = 0;
  const arr = String(n).split('');
  answer = arr.reduce((prev, curr)=>{
     return Number(prev)+Number(curr) 
  },0)
  
  return answer;
}

console.log(solution(6));