/**
 * 가운데 글자 가져오기
 * @param {string} s
 * @returns {string} 
 * 단어 s의 가운데 글자를 반환
 * 단어의 길이가 짝수라면 가운데 두글자를 반환
 * s는 길이가 1 이상, 100이하인 string
 */

function solution(s) {
  if(s.length === 1) return s;
  const idx = Number.parseInt(s.length / 2);
  if(s.length % 2 === 0) return s.slice(idx-1, idx+1);
  else return s.slice(idx, idx+1);
}

console.log(solution('abcde'));