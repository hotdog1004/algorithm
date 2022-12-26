/**
 * Palindrome(회문 문자열) : 앞으로 읽으나 뒤로 읽으나 같은 문자열
 * Q. 알파벳만 가지고 회문을 검사하여 대소문자는 구분하지 않음(알파벳 이외의 문자들은 무시)
 * @param {string} str
 * @returns {string} YES or NO
 */
function solution(str) {
  // 내 풀이

  let originalStr = str.replace(/[^a-zA-Z]/g, '').toLowerCase();
  let reversedStr = [...originalStr].slice().reverse().join('');
  return originalStr === reversedStr ? 'YES' : 'NO';

  // 강의 풀이
  /*
  let answer = 'YES';
  str = str.toLowerCase().replace(/[^a-z]/g, '');
  if (str.split('').reverse().join('') !== str) return 'NO';
  return answer;
  */
}

let str = 'foudnd7, time: study; Yduts; emit, 7Dnuof';
console.log(solution(str));
