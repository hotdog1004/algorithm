/**
 * [Stack]
 * 올바른 괄호
 * @param {string} s
 * @returns {string} 
 * 괄호가 입력되면 올바른 괄호이면 “YES", 올바르지 않으면 ”NO"를 출력합니다.
 * (())() 이것은 괄호의 쌍이 올바르게 위치하는 거지만, (()()))은 올바른 괄호는 아닙니다.
 * 첫 번째 줄에 괄호 문자열이 입력됩니다. 문자열의 최대 길이는 30입니다.
 */

function solution(s) {
  // 여는 괄호는 push
  // 닫는 괄호는 pop
  // 정상적인 경우엔 stack 이 비어있을 것!
  let answer = 'YES';
  let stackArr = [];

  for(let str of s){
    if(str === '(') stackArr.push(str);
    else {
      // 닫히는 괄호가 먼저 올 경우를 위해 체크
      if(stackArr.length === 0) return 'NO';
      else stackArr.pop();
    }
  }
  if(stackArr.length > 0) return 'NO';
  return answer;
}  

let a = '()()()(()(()))';
console.log(solution(a));