/**
 * [Hash Map, Two Pointers, Sliding Window]
 * 모든 아나그램 찾기
 * @param {string} s
 * @param {string} t
 * @returns {number} 
 * S문자열에서 T문자열과 아나그램이 되는 S의 부분문자열의 개수를 구하기
 * S문자열의 길이는 10,000을 넘지 않으며, T문자열은 S문자열보다 길이가 작거나 같다.
 * 아나그램 판별시 대소문자가 구분된다.
 * 부분문자열은 연속된 문자열이어야한다.
 * e.g. 'bacaAacba' 와 'abc'가 입력됐을 때,
 * {bac}, {acb}, {cba} 3개의 부분문자열이 "abc"문자열과 아나그램이니 3이 출력된다.
 */

function compareMaps(map1, map2){
  if(map1.size !== map2.size) return false;
  for(let [key, val] of map1){
    if(!map2.has(key) || map2.get(key) !== val) return false;
  }
  return true;
}

function solution(s, t){
  // 이중 for문 말고 그냥 for문 한번에 처리가능
  // t문자열에 대한 map을 만들어서 key에는 알파벳을, value에는 알파벳에 해당하는 갯수를 세팅
  // s문자열은 투포인터로..lt와 rt를 잡고 그 기준으로 map을 만들어서 슬라이딩 윈도우로 밀어주면서 비교
  // 비교할 때 그냥 비교할 수 없고 size와 각각의 값이 같은지 비교해야함
  let answer = 0;
  let sH = new Map();
  let tH = new Map();
  // t문자열에 대한 map 변수에 값 세팅해주기
  for(let x of t){
    if(tH.has(x)) tH.set(x, tH.get(x)+1);
    else tH.set(x, 1);
  }
  // 처음엔 t문자열의 length-1 값으로 sh를 세팅
  // rt는 t.length-1 의 값으로 세팅 lt는 0으로 세팅
  // rt인덱스의 값을 추가하는 순간 sh 와 hs를 비교한다.
  // key의 value값이 0이면 delete
  let len = t.length-1; // 일단 t.lenght-1 까지만 sH 세팅해주기
  for(let i = 0; i < len; i++){
    if(sH.has(s[i])) sH.set(s[i], sH.get(s[i])+1);
    else sH.set(s[i], 1);
  }
 
  let lt = 0;
  for(let rt = len; rt < s.length; rt++){
    if(sH.has(s[rt])) sH.set(s[rt], sH.get(s[rt])+1);
    else sH.set(s[rt], 1);
    // rt추가하면 비교
    if(compareMaps(sH,tH)) answer++;
    sH.set(s[lt], sH.get(s[lt])-1);
    if(sH.get(s[lt])===0) sH.delete(s[lt]);
    lt++;
  }

  console.log(answer)
  return answer
}

// 밑의 코드가 더 효율적임 시간복잡도가 O(n)
function bestSolution(s, t){
  let answer=0;
  let sH = new Map();
  for(let x of t){
      sH.set(x, (sH.get(x) || 0)-1);
  }
  let len=t.length-1;
  for(let i=0; i<len; i++){
      sH.set(s[i], (sH.get(s[i]) || 0)+1);
      if(sH.get(s[i])===0) sH.delete(s[i]);
  }
  let lt=0;
  for(let rt=len; rt<s.length; rt++){
      sH.set(s[rt], (sH.get(s[rt]) || 0)+1);
      if(sH.get(s[rt])===0) sH.delete(s[rt]);
      if(sH.size===0) answer++;
      sH.set(s[lt], (sH.get(s[lt]) || 0)-1);
      if(sH.get(s[lt])===0) sH.delete(s[lt]);
      lt++;
  }
  return answer;
}


const s = 'bacaAacba'
const t = 'abc'
console.log(bestSolution(s,t));

