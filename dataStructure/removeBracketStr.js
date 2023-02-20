/**
 * [Stack]
 * 괄호 문자 제거
 * @param {string} s
 * @returns {string} 
 * 입력된 문자열에서 소괄호 ( ) 사이에 존재하는 모든 문자를 제거하고 남은 문자만 출력하는 프로그램을 작성하세요.
 * 첫 줄에 문자열이 주어집니다. 문자열의 길이는 100을 넘지 않습니다.
 */

// 내 풀이
// 여는 괄호가 나오면 push, 닫는 괄호가 나오면 pop을 하고 stack의 길이가 0이면 괄호가 끝난거니까 answer에 해당 문자열 더해주기
function solution(s){
  let answer = '';
  let stack = [];
  for(let str of s){
    if(str === '(') stack.push(str);
    else if(str === ')') stack.pop();
    else if(stack.length === 0) answer += str;
  }
  return answer;
}

// 강의 풀이 
function otherSolution(s){
  let answer ='';
  let stack = [];
  for(let str of s){
    if(str === ')'){
      // 닫는 괄호를 만나면 닫는 괄호의 짝인 여는 괄호를 만날 때까지 pop()을 진행
      while(stack.pop() !== '(');
    }else stack.push(str); // 닫는 괄호가 아닌 값들은 모두 stack에 push()
  }
  
  // 반복문으로 문자열을 한번 다 훑으면 stack에는 괄호 사이에 존재하지 않는 문자만 남게된다.
  answer = stack.join('');
  return answer;
}

let s = '(A(BC)D)EF(G(H)(IJ)K)LM(N)';
console.log(solution(s));