/**
 * 이상한 문자 만들기
 * @param {string} s
 * @returns {string} 
 * 문자열 s의 각 단어는하나 이상의 공백문자로 구분되어있다.
 * 각 단어의 짝수번째 알파벳은 대문자로, 홀수번째 알파벳은 소문자로 바꾼 문자열을 리턴
 * 문자열 전체의 짝/홀수 인덱스가 아니라, 단어(공백을 기준)별로 짝/홀수 인덱스를 판단해야한다.
 * 첫 번째 글자는 0번째 인덱스로 보아 짝수번째 알파벳으로 처리해야한다.
 */

function solution(s) {
  let answer = '';
  let returnArr = [];
  const arr = s.split(' ');
  const getStr = (str) => str.split('').map((x, idx)=>{
    if(idx % 2 === 0) return x.toUpperCase();
    else return x.toLowerCase();
  })
  
  for(str of arr){
    returnArr = getStr(str);
    answer += returnArr.join('');
    answer += ' ';
  }
  return answer.slice(0, -1);
}

console.log(solution('try hello world'));