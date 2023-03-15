/**
 * 문자열 나누기
 * @param {string} s
 * @returns {number} 
 * 문자열 s가 입력되었을 때 다음 규칙을 따라서 이 문자열을 여러 문자열로 분해하려고 합니다.
 * 먼저 첫 글자를 읽습니다. 이 글자를 x라고 합시다.
 * 이제 이 문자열을 왼쪽에서 오른쪽으로 읽어나가면서, x와 x가 아닌 다른 글자들이 나온 횟수를 각각 셉니다. 처음으로 두 횟수가 같아지는 순간 멈추고, 지금까지 읽은 문자열을 분리합니다.
 * s에서 분리한 문자열을 빼고 남은 부분에 대해서 이 과정을 반복합니다. 남은 부분이 없다면 종료합니다.
 * 만약 두 횟수가 다른 상태에서 더 이상 읽을 글자가 없다면, 역시 지금까지 읽은 문자열을 분리하고, 종료합니다.
 * 문자열 s가 매개변수로 주어질 때, 위 과정과 같이 문자열들로 분해하고, 분해한 문자열의 개수를 return 하는 함수 solution을 완성하세요.
 * 1 ≤ s의 길이 ≤ 10,000
 * s는 영어 소문자로만 이루어져 있습니다.
 */

function solution(s) {
  // 내 풀이
  let answer = 0;
  let sameCnt = 1;
  let diffCnt = 0;
  let word = s[0];
  
  if(s.length === 1) return 1;
  
  for(let i = 1; i < s.length; i++){
      if(s[i]===word) sameCnt++;
      else diffCnt++;
      
      if(sameCnt === diffCnt){
          answer++;
          i++;
          sameCnt = 1;
          diffCnt = 0;
          word = s[i];
          if(i===s.length-1) answer++;
      }else if(i === s.length-1) answer++;
  }
  return answer;
}

function otherSolution(s) {
  let answer = 0;
  let cnt = 0;
  let word = '';
  // 조건문을 많이 사용할 필요 없이 간단하게 풀 수 있음.
  // 같은 글자가 있으면 cnt에 값을 더하고, 다른 글자가 있으면 빼는 방식으로 변수 하나만 사용할 수 있다.
  for(let i = 0; i < s.length; i++){
      if(cnt === 0){
          answer++;
          word = s[i];
          cnt = 1;
      }else{
          if(word !== s[i]) cnt--;
          else cnt++;
      }
  }
  return answer;
}

console.log(solution('aaabbaccccabba'));