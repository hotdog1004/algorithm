/**
 * 문자열 내 p와 y의 개수
 * @param {string} s 문자열 s
 * @returns {boolean} 
 * 문자열 s에 'p'의 개수와 'y'의 개수를 비교해 같으면 True, 다르면 False를 return 
 * 개수를 비교할 때 대문자와 소문자는 구별 X
 */

function solution(s){
  s = s.toUpperCase();
  const arr = s.split('');
  let pCnt = 0;
  let yCnt = 0;
  arr.forEach(val =>{
      if(val === 'P') pCnt++;
      else if(val === 'Y') yCnt++;
  });
  if(pCnt === 0 && yCnt === 0) return true;
  return pCnt === yCnt;
}

console.log(solution('pPoooyY'));