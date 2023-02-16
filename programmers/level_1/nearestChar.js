/**
 * 가장 가까운 같은 글자
 * @param {string} s
 * @returns {Array} 
 * 문자열 s가 주어졌을 때, s의 각 위치마다 자신보다 앞에 나왔으면서, 자신과 가장 가까운 곳에 있는 같은 글자가 어디 있는지 알고 싶습니다.
 * 문자열 s이 주어질 때, 위와 같이 정의된 연산을 수행하는 함수 solution을 완성해주세요.
 * 1 ≤ s의 길이 ≤ 10,000
 */

function solution(s) {
  let answer = [-1];
  let tmp;
  for(let i = 1; i <= s.length-1; i++){
      for(let j = i-1; j >= 0; j--){
          if(s[i] === s[j]){
              answer.push(i-j);
              tmp = j;
              break;
          }
          tmp = -1;
      }
      if(s[i] !== s[tmp] && tmp === -1) answer.push(-1);
  }
  
  return answer;
}

function ohtherSolution(s) {
  return [...s].map((char, i) => {
    // index 만큼 문자열ㅇ르 잘라서 lastIndexOf로 마지막 
    console.log(char)
    console.log(s.slice(0,i))
    const count = s.slice(0, i).lastIndexOf(char);
    // lastIndexOf : 찾지 못하면 -1 리턴
    return count < 0 ? count : i - count;
  });
}

console.log(solution('banana'));