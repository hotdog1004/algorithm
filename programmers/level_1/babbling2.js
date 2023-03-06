/**
 * 옹알이 (2)
 * @param {Array} babbling 
 * @returns {number} 
 * 머쓱이는 태어난 지 11개월 된 조카를 돌보고 있습니다. 
 * 조카는 아직 "aya", "ye", "woo", "ma" 네 가지 발음과 네 가지 발음을 조합해서 만들 수 있는 발음밖에 하지 못하고 연속해서 같은 발음을 하는 것을 어려워합니다. 
 * 문자열 배열 babbling이 매개변수로 주어질 때, 머쓱이의 조카가 발음할 수 있는 단어의 개수를 return하도록 solution 함수를 완성해주세요.
 * 1 ≤ babbling의 길이 ≤ 100
 * 1 ≤ babbling[i]의 길이 ≤ 30
 * 문자열은 알파벳 소문자로만 이루어져 있습니다.
 */

function solution(babbling) {
  // 연속으로 같은 발음만 아니면 다시 사용가능
  let pronunciation = ['aya', 'ye', 'woo', 'ma'];
  let answer = 0;
  babbling.forEach(word => {
    pronunciation.forEach(pron => {
      // 두번 반복되는 게 있는지 확인
      if(word.includes(pron.repeat(2))) return false;
      // 두번 이상 반복 되는게 없으면 해당 발음 ' ' 으로 변경해주기
      // ' '으로 변경을 해주어야 다른 단어 사이에 간격이 생겨 제대로 체크할 수 있음
      word = word.replaceAll(pron, ' ');
    })
    if(word.trim() === '') answer++;
  })
  return answer;
}

console.log(solution(	["aya", "yee", "u"]));