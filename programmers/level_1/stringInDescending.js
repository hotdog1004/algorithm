/**
 * 문자열 내림차순으로 배치하기
 * @param {string} s
 * @returns {string} 
 * s에 나타나는 문자를 큰것부터 작은 순으로 정렬해 새로운 문자열을 리턴
 * s는 영문 대소문자로만 구성되어 있으며, 대문자는 소문자보다 작은 것으로 간주
 * s는 길이 1 이상인 문자열
 */

function solution(s) {
  return [...s].sort().reverse().join('');
}

console.log(solution('Zbcdefg'));