/**
 * 문자열 내 마음대로 정렬하기
 * @param {Array} strings 
 * @param {number} n
 * @returns {Array} 
 * 문자열로 구성된 리스트 strings와, 정수 n이 주어졌을 때, 각 문자열의 인덱스 n번째 글자를 기준으로 오름차순 정렬하려 합니다. 
 * e.g. strings가 ["sun", "bed", "car"]이고 n이 1이면 각 단어의 인덱스 1의 문자 "u", "e", "a"로 strings를 정렬
 * strings는 길이 1 이상, 50이하인 배열
 * strings의 원소는 소문자 알파벳
 * strings의 원소는 길이 1 이상, 100이하인 문자열
 * 모든 strings의 원소의 길이는 n보다 크다.
 * 인덱스 1의 문자가 같은 문자열이 여럿 일 경우, 사전순으로 앞선 문자열이 앞쪽에 위치한다.
 */

function solution(strings, n) {
  let str = strings.sort((a,b)=>{
      if(a[n] < b[n]) return -1;
      else if(a[n] > b[n]) return 1;
      else return a < b ? -1 : 1;
  })
  return str;

  // 혹은 localeCompare 함수를 이용해서 한번에 처리할 수 있음.
  // strings.sort((a, b)=> a[n] === b[n] ? a.localeCompare(b) : a[n].localeCompare(b[n]));
}

console.log(solution(['sun','bed','car'], 1));