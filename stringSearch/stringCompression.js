/**
 * 문자열 압축
 * @param {string} str 문자열
 * @returns {string} 압축된 문자열
 * 알파벳 대문자로 이루어진 문자열을 입력받아 같은 문자가 연속으로 반복되는 경우
 * 반복되는 문자 바로 오른쪽에 반복 횟수를 표기.
 * 반복횟수가 1인 경우엔 생략
 */

function solution(str) {
  /*
  // 문제를 완전 잘못이해햇다.
  // 중복된 문자를 제거하는 것이 아니고 문자가 연속으로 반복될 때만 반복횟수를 표기하는 것임 
  // 밑의 풀이는 중복된 문자를 모두 제거하는 방법
  let answer = '';
  const strLength = str.length;
  let sameLength = 0;
  const setValue = new Set(str);
  [...setValue].forEach((s) => {
    sameLength = str.replaceAll(s, '').length;
    answer += s;
    answer += strLength - sameLength;
  });
  return answer.replaceAll('1', '');
  */

  // 밑의 풀이는 강의보다가 문제를 잘못 이해한 걸 깨닫고 다시 푼 것
  // string은 [index]로 특정 index의 문자를 가져올 수 있다.
  str = str + ' ';
  let answer = '';
  let cnt = 1;
  for (let i = 0; i < str.length - 1; i++) {
    if (str[i] === str[i + 1]) cnt++;
    else {
      answer += str[i];
      if (cnt > 1) answer += String(cnt);
      cnt = 1;
    }
  }
  return answer;
}

console.log(solution('KKHSSSSSSSE'));
