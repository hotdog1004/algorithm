/**
 * k번째로 큰 수
 * @param {number} n 카드 개수
 * @param {Array} card 자연수 배열
 * @param {number} k k번째 중 k
 * @returns {number} k번째로 큰 수 
 * 1부터 100사이의 자연수가 적힌 n장의 카드가 있다. 같은 숫자의 카드가 여러장 있을 수도 있다.
 * 이 중 3장을 뽑아 각 카드에 적힌 수를 합한 값을 기록
 * 그 후 k번째로 큰 수를 출력
 * 자연수 n은 3 <= n <= 100 / 1 <= k <= 50
 * k번째 수는 반드시 존재한다.
 */

function solution(n, k, card) {
  let tmp = new Set();
  let sortedArr = [];
  // 문제는 card 배열에서 3장을 뽑아 카드에 적힌 수를 합한 후 기록하고
  // 그 기록 중 k번째로 큰 수를 구하는 것임(k번째니까 중복제거 필요)
  for(let i = 0; i < n; i++){
    for(let j = i+1; j < n; j++){
      for(let s = j+1; s < n; s++){
        tmp.add(card[i]+card[j]+card[s]);
      }
    }
  }
  sortedArr = [...tmp].sort((a,b)=>b-a);
  return sortedArr[k-1];

}

// wrongSolution은 문제를 잘못 이해한 풀이
// 기존 배열을 내림차순으로 정렬한 후 그걸 중복제거한 배열의 k번째 값을 찾은뒤
// 정렬된 기존 배열에서 해당 값을 다시 찾은 후 
// 0~k번째까지의 카드 중 세 장을 뽑아 더한 값들 중 최대값을 구하는 걸로 이해함  
function wrongSolution(n, k, card) {
  card.sort((a, b)=> b-a);
  
  let set = new Set(card);
  let bigNum = [...set][k-1];

  const idx = card.lastIndexOf(bigNum);
  let answer = 0;
  let result = 0;
  for(let i = 0; i <= idx; i++){
    for(let j = i+1; j <= idx; j++){
      for(let s = j+1; s <= idx; s++){
        result = 0;
        result = card[s]+card[j]+card[i];
        answer = Math.max(answer, result);
      }
    }
  }
  return answer;
}



let arr=[13, 15, 34, 23, 45, 65, 33, 11, 26, 42];
console.log(solution(10, 3, arr));