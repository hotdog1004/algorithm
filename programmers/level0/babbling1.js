/**
 * 옹알이1
 * @param {Array} babbling 배열1
 * @returns {number} 발음할 수 있는 단어의 개수 
 * 머쓱이의 조카는 "aya", "ye", "woo", "ma"  네 가지 발음을 최대 한 번씩 사용해 조합한(이어붙인)
 * 발음만 할 수 있다. 문자열 배열 babbling이 주어질 때 발음할 수 있는 단어의 개수를 return
 * 1 <= babbling의 길이 <= 100
 * 1 <= babbling[i]의 길이 <= 15
 * babbling의 각 문자열에서 "aya", "ye", "woo", "ma"는 각각 최대 한 번씩만 등장
 * 소문자로만 이루어져있음.
 */

function solution(babbling) {
  // 이중 for문을 돌려서 발음할 수 있는 단어가 있으면 '1'로 변경해준다.
  // 그 후 문자가 있는 걸 체크하는 정규표현식으로 
  // 숫자만 존재하는지 체크하여 answer을 증가시킨다.
  const pronunciation = ['aya', 'ye', 'woo', 'ma'];
  let answer = 0;
  babbling.forEach(word=>{
    pronunciation.forEach(p=>{
      if(word.includes(p)) {
        word = word.replace(p, '1');
      }
    })
    const regex = /[^0-9]/g;
    if(!regex.test(word)) answer++;
  })

  return answer;
}

let babbling=["aya", "yee", "u", "maa", "wyeoo"]
console.log(solution(babbling));