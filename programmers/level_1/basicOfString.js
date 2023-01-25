/**
 * 문자열 다루기 기본
 * @param {string} s
 * @returns {Boolean} 
 * 문자열 s의 길이가 4 혹은 6이고, 숫자로만 구성돼있는지 확인해서 리턴
 * s는 길이 1 이상, 길이 8 이하인 문자열
 * s는 영문 알파벳 대소문자 또는 0부터 9까지 숫자로 이루어져있다.
 */

function solution(s) {
  let answer = true;
  const len = s.length;
  
  // 문자열 s를 한번에 숫자로 변환해서 Number.isInteger()로 체크하려고했는데 
  // s = '12e4' 이런 경우엔 e가 숫자로 변환돼서 틀림 => 일일이 체크하는 식으로 처리
  [...s].forEach(n=>{
      if(len !== 4 && len !== 6) answer = false;
      if(!Number.isInteger(Number(n))) answer = false;
  })
  return answer;

  // 정규식을 활용하면 밑의 방법으로 풀 수 있다.
  // const regex = /^\d{6}$|^\d{4}$/;
  // return regex.test(s)
}

console.log(solution('1e34'));