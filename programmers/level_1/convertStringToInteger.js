/**
 * 문자열을 정수로 바꾸기
 * @param {string} x 
 * @returns {number} 
 * 문자열 s를 숫자로 변환한 결과를 반환
 * s는 부호와 숫자로만 이루어짐
 * s는 "0"으로 시작하지 않음
 */

function solution(s) {
  // 밑에처럼 해줘도됨!
  // return s/1; 
  return Number.parseInt(s);
}

console.log(solution('1234'));