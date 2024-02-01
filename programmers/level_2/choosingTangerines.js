/**
 * 귤 고르기
 * @param {number} k
 * @param {number[]} tangerine
 * @return {number} result
 * 경화는 과수원에서 귤을 수확했습니다. 경화는 수확한 귤 중 'k'개를 골라 상자 하나에 담아 판매하려고 합니다.
 * 그런데 수확한 귤의 크기가 일정하지 않아 보기에 좋지 않다고 생각한 경화는 귤을 크기별로 분류했을 때 서로 다른 종류의 수를 최소화하고 싶습니다.
 * 예를 들어, 경화가 수확한 귤 8개의 크기가 [1, 3, 2, 5, 4, 5, 2, 3] 이라고 합시다. 경화가 귤 6개를 판매하고 싶다면,
 * 크기가 1, 4인 귤을 제외한 여섯 개의 귤을 상자에 담으면, 귤의 크기의 종류가 2, 3, 5로 총 3가지가 되며 이때가 서로 다른 종류가 최소일 때입니다.
 * 경화가 한 상자에 담으려는 귤의 개수 k와 귤의 크기를 담은 배열 tangerine이 매개변수로 주어집니다.
 * 경화가 귤 k개를 고를 때 크기가 서로 다른 종류의 수의 최솟값을 return 하도록 solution 함수를 작성해주세요.
 * [제한조건]
 * 1 <= k <= tangerine의 길이 <= 100,000
 * 1 <= tangerine의 원소 <= 10,000,000
 */

// map에 담아준다.
// map을 개수 별로 정렬
// 반복문으로 돌리면서 k만큼 빼주기
// k가 0일 때 리턴

function solution(k, tangerine) {
  let answer = 0;
  if (k === 1) return 1;
  let map = new Map();
  for (let val of tangerine) {
    if (map.has(val)) map.set(val, map.get(val) + 1);
    else map.set(val, 1);
  }

  const arr = [...map];
  arr.sort((a, b) => b[1] - a[1]);
  for (let num of arr) {
    answer++;
    k -= num[1];
    if (k < 1) {
      return answer;
    }
  }
  return answer;
}

console.log(solution(6, [1, 3, 2, 5, 4, 5, 2, 3])); // 3
// console.log(solution(4, [1, 3, 2, 5, 4, 5, 2, 3])); // 2
// console.log(solution(2, [1, 1, 1, 1, 2, 2, 2, 3])); // 1
