/**
 * 핸드폰 번호 가리기
 * @param {string} phone_number 
 * @returns {string} 
 * 전화번호의 뒷 4자리를 제외한 나머지 숫자를 전부 *으로 가린 문자열을 리턴
 * phone_number는 길이 4 이상, 20이하인 문자열
 */

function solution(phone_number) {
  let answer = '';
  const lastIdx = phone_number.length-4;
  for(let i = 0; i < lastIdx; i++){
      answer += '*';
  }
  
  return answer + phone_number.substring(lastIdx);
}

console.log(solution('01033334444'));