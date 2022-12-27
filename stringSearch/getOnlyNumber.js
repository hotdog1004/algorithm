/**
 * 숫자만 추출
 * @param {string} str 문자와 숫자가 섞여있는 문자열
 * @returns {number} 자연수만 리턴
 * 문자와 숫자가 섞인 문자열에서 숫자만 추출하여 그 순서대로 자연수를 만들어서 리턴
 */

function solution(str) {
  // 내 풀이
  str = str.replace(/[^0-9]/g, '');
  return Number(str);

  // 강의 풀이
  // parseInt or Number 함수 사용을 지양하는 방법으로 풀이(손코딩 대비)
  // cf) parseInt() : 문자열로 된 부분에서 정수만 뽑아서 변환
  //     Number()   : 문자열 전체가 숫자일 때 소수점까지 숫자타입으로 가져올 수있음

  // let answer = 0;
  // for (let x of str) {
  //   if (!isNaN(x)) answer = answer * 10 + Number(x);
  // }
  // return answer;
}
