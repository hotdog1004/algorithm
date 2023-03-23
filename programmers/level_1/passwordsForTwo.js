/**
 * 둘만의 암호
 * @param {string} s 
 * @param {string} skip
 * @param {number} index
 * @returns {string}
 * 두 문자열 s와 skip, 그리고 자연수 index가 주어질 때, 다음 규칙에 따라 문자열을 만들려 합니다. 암호의 규칙은 다음과 같습니다.
 * 문자열 s의 각 알파벳을 index만큼 뒤의 알파벳으로 바꿔줍니다.
 * index만큼의 뒤의 알파벳이 z를 넘어갈 경우 다시 a로 돌아갑니다.
 * skip에 있는 알파벳은 제외하고 건너뜁니다.
 * 예를 들어 s = "aukks", skip = "wbqd", index = 5일 때, a에서 5만큼 뒤에 있는 알파벳은 f지만 
 * [b, c, d, e, f]에서 'b'와 'd'는 skip에 포함되므로 세지 않습니다. 
 * 따라서 'b', 'd'를 제외하고 'a'에서 5만큼 뒤에 있는 알파벳은 [c, e, f, g, h] 순서에 의해 'h'가 됩니다.
 * 나머지 "ukks" 또한 위 규칙대로 바꾸면 "appy"가 되며 결과는 "happy"가 됩니다.
 * 두 문자열 s와 skip, 그리고 자연수 index가 매개변수로 주어질 때 위 규칙대로 s를 변환한 결과를 return하도록 solution 함수를 완성해주세요.
 * 5 ≤ s의 길이 ≤ 50
 * 1 ≤ skip의 길이 ≤ 10
 * s와 skip은 알파벳 소문자로만 이루어져 있습니다. skip에 포함되는 알파벳은 s에 포함되지 않습니다.
 * 1 ≤ index ≤ 20
 */

// [내 풀이]
function solution(s, skip, index) {
  let answer = '';
  let words = 'abcdefghijklmnopqrstuvwxyz';
  const regex = new RegExp(`[${skip}]`, 'g');
  words = words.replaceAll(regex, '');
  
  for(let str of s){
    let sumIdx = words.indexOf(str)+index;

    // if(sumIdx <= words.length-1) answer += words[sumIdx];
    // else answer+= words[sumIdx%words.length];
    // 굳이 words의 글자수로 따져서 z를 넘어갈 경우로 분기를 안 태워도됨!!!!
    // e.g 3%22=3, 4%22=4 임!!
    answer += words[sumIdx % words.length];
  }
  return answer;
}

// match함수와 배열을 활용하여 푸는 방법.
// 내가 푼 방식보다 더 간결하게 풀 수 있는 것 같다.
function otherSolution(s, skip, index){
  let answer = '';
  const matched = 'abcdefghijklmnopqrstuvwxyz'.match(
    new RegExp(`[^${skip}]`, 'g')
  );
  for(let str of s){
    // 알파벳에 해당되는 인덱스 번호를 찾음과 동시에 index 값을 더해준다.
    let newIdx = matched.indexOf(str) + index;
    answer += matched[newIdx % matched.length];
  }
  return answer;
}

console.log(solution('aukks', 'wbqd', 5));