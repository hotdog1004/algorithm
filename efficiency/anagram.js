/**
 * [Hash Map]
 * 아나그램
 * @param {string} a 
 * @param {string} b 
 * @returns {string} 
 * 길이가 같은 두 개의 단어가 주어지면 두 단어가 아나그램인지 판별
 * 아나그램이면 'YES'를 아니면 'NO'를 출력한다.
 * 아나그램 : 두 문자열이 알파벳의 나열 순서는 다르지만 구성이 일치한다면 아나그램이라고 한다.
 * e.g. AbaAeCe와 baeeACA는 서로 다른 문자열이지만 그 구성을 살펴보면 A(2), a(1), C(1), e(2)로
 * 알파벳과 그 개수가 모두 일치한다.
 */

function solution(str1,str2) {
  // 사실 이건 오름차순 or 내림차순으로 정렬을 한 후 두 값을 비교하면 판단할 수 있긴한데..
  // hash 로 풀라고 써있으니...그렇게 풀어보려고 한다.
  // 전에 했던 것 처럼 map을 생성해 key에는 알파벳을 value에는 개수를 넣어주고 비교
  // hashMapA, hashMapB 두개를 만들어서 비교해주려고 했는데, 강의를 보니 그럴 필요 없이 한번에 비교가 가능했음

  let hashMapA = new Map();
  for(let x of str1){
    if(hashMapA.has(x)) hashMapA.set(x,hashMapA.get(x)+1);
    else hashMapA.set(x, 1);
  }

  for(let x of str2){
    // 비교해주면서 키 값이 존재하지 않거나 해당 키의 value가 0이면 바로 'NO'를 리턴
    // 그게 아니면 해당 키의 value에 -1 해주기
    if(!hashMapA.has(x) || hashMapA.get(x) === 0) return 'NO';
    hashMapA.set(x, hashMapA.get(x)-1)
  }
  return 'YES'
}

let a = 'abaCC';
let b = 'CCCab';
console.log(solution(a, b));
