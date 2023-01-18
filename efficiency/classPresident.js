/**
 * [Hash Map]
 * 학급 회장
 * @param {array} vote : 투표 배열
 * @returns {string} 학급 회장으로 선택된 기호
 * 학급 회장을 뽑는데 후보로 기호 A, B, C, D, E 후보가 등록을 했다.
 * 투표용지에는 반 학생들이 자기가 선택한 후보의 기호(알파벳)가 쓰여져 있으며 선생님은 그 기호를 발표하고 있다.
 * 발표가 끝난 후 어떤 기호의 후보가 학급 회장이 되었는지 출력
 */

function solution(vote) {
  let resultMap = new Map();

  for(let res of vote){
    if(resultMap.has(res)) resultMap.set(res ,resultMap.get(res)+1);
    else resultMap.set(res, 1);
  }
  let max = Number.MIN_SAFE_INTEGER;
  let tmpPresident = '';
  for(let [key, value] of resultMap){
    if(max < value){
      max = value;
      tmpPresident = key;
    }
  }
  return tmpPresident;
}

let str = 'BACBACCACCBDEDE';
console.log(solution(str));
