/**
 * 시저암호
 * @param {string} s
 * @param {number} n
 * @returns {string} 
 * 시저암호 : 어떤 문장의 각 알파벳을 일정한 거리만큼 밀어서 다른 알파벳으로 바꾸는 암호화 방식
 * e.g. 'AB'는 1만큼 밀면 'BC'가 되고 3만큼 밀면 'DE'가 됨. 'z'는 1만큼 밀면 'a'
 * 문자열 전체의 짝/홀수 인덱스가 아니라, 단어(공백을 기준)별로 짝/홀수 인덱스를 판단해야한다.
 * 문자열 s와 거리 n을 입력받아 s를 n만큼 민 암호문을 만드는 함수 만들기
 * [제한조건]
 * 1. 공백은 아무리 밀어도 공백이다.
 * 2. s는 알파벳 소문자, 대문자, 공백으로만 이루어져있다.
 * 3. s의 길이는 8000 이하이다.
 * 4. n은 1이상 25이하인 자연수이다.
 */

function solution(s, n) {
  const sentence = 'abcdefghijklmnopqrstuvwxyz';
  let answer = '';
  const getStr = (x)=>{
      let idx = sentence.indexOf(x.toLowerCase())+n+1;
      idx = idx > 26 ? idx % 26 : idx;
      if(x === x.toLowerCase()) return sentence[(idx)-1];
      else return sentence[(idx)-1].toUpperCase();
  }

  s.split('').forEach(x=>{
      if(x === ' ') answer += ' ';
      else answer += getStr(x);
  })
  return answer;
}

console.log(solution('a B z', 4));