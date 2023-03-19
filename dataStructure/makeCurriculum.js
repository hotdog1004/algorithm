/**
 * [Queue]
 * 교육과정 설계
 * @param {string} essential 필수과목 순서
 * @param {string} subjects 수업설계
 * @returns {string}
 * 현수는 1년 과정의 수업계획을 짜야 합니다. 수업중에는 필수과목이 있습니다. 이 필수과목은 반드시 이수해야 하며, 그 순서도 정해져 있습니다.
 * 만약 총 과목이 A, B, C, D, E, F, G가 있고, 여기서 필수과목이 CBA로 주어지면 필수과목은 C, B, A과목이며 이 순서대로 꼭 수업계획을 짜야 합니다.
 * 여기서 순서란 B과목은 C과목을 이수한 후에 들어야 하고, A과목은 C와 B를 이수한 후에 둘어야 한다는 것입니다.
 * 현수가 C, B, D, A, G, E로 수업계획을 짜면 제대로 된 설계이지만 C, G, E, A, D, B 순서로 짰다면 잘 못 설계된 수업계획이 됩니다.
 * 수업계획은 그 순서대로 앞에 수업이 이수되면 다음 수업을 시작하다는 것으로 해석합니다. 수업계획서상의 각 과목은 무조건 이수된다고 가정합니다.
 * 필수과목순서가 주어지면 현수가 짠 N개의 수업설계가 잘된 것이면 “YES", 잘못된 것이면 ”NO“를 출력하는 프로그램을 작성하세요.
 * 모든 과목은 영문 대문자입니다.
 * 두 번 째 줄부터 현수가 짠 수업설계가 주어집니다.(수업설계의 길이는 30이하)
 */

// queue 활용해서 풀어야하는데 잘 모르겠어서 일단 정규식 활용해서 풀음
function solution(essential, subjects) {
  const reg = new RegExp(`[${essential}]`);
  let result = ''
  for(let subject of subjects){
    if(reg.test(subject)) result += subject
  }
  return essential === result ? 'YES' : 'NO';
}

// 풀이 설명 보고 queue 활용해서 풀어보기
function solution1(essential, subjects){
  // queue로 활용하기 위해 배열 생성(split('') 사용해도됨)
  let queue = Array.from(essential);
  for(let subject of subjects){
    if(essential.includes(subject)){
      if(queue[0] === subject) queue.shift();
      else return 'NO';
      // 틀린 경우엔 바로 'NO' 로 리턴
    }
  }
  return queue.length === 0 ? 'YES' : 'NO';
}

// 강의 풀이 
function otherSolution(essential, subjects) {
  let answer = 'YES';
  let queue = essential.split('');
  for(let subject of subjects){
    if(queue.includes(subject)){
      if(subject !== queue.shift()) return 'NO';
    }
  }
  // 필수과목을 빼먹은 경우를 위해 queue의 길이를 체크
  if(queue.length > 0) return 'NO';

  return answer;
}


const str1 = 'CBA';
const str2 = 'CABA';
console.log(solution(str1, str2))