/**
 * 크기가 작은 부분문자열
 * @param {string} t
 * @param {string} p
 * @returns {number} 
 * 숫자로 이루어진 문자열 t와 p가 주어질 때, t에서 p와 길이가 같은 부분문자열 중에서,
 * 이 부분문자열이 나타내는 수가 p가 나타내는 수보다 작거나 같은 것이 나오는 횟수를 return
 * t와 p는 숫자로만 이루어진 문자열이며, 0으로 시작하지 않습니다
 * 1 ≤ p의 길이 ≤ 18
 * p의 길이 ≤ t의 길이 ≤ 10,000
 */

function solution(t, p) {
  let answer = 0;
  const len = p.length;
  for(let i = 0; i < t.length - len + 1; i++){
      if(p*1 >= t.substring(i, i+len)*1) answer++;
  }
  return answer;
}

console.log(solution('3141592', '271'));