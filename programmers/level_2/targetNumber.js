/**
 * 타겟 넘버
 * @param {number} a
 * @param {number} b
 * @returns {string}
 * n개의 음이 아닌 정수들이 있습니다. 이 정수들을 순서를 바꾸지 않고 적절히 더하거나 빼서 타겟 넘버를 만들려고 합니다.
 * 사용할 수 있는 숫자가 담긴 배열 numbers, 타겟 넘버 target이 매개변수로 주어질 때
 * 숫자를 적절히 더하고 빼서 타겟 넘버를 만드는 방법의 수를 return 하도록 solution 함수를 작성해주세요.
 * [제한사항]
 * 주어지는 숫자의 개수는 2개 이상 20개 이하입니다.
 * 각 숫자는 1 이상 50 이하인 자연수입니다.
 * 타겟 넘버는 1 이상 1000 이하인 자연수입니다.
 */

function solution(numbers, target) {
  let answer = 0;
  const DFS = (L, sum) => {
    if (L === numbers.length) {
      if (sum === target) answer++;
    } else {
      DFS(L + 1, sum + numbers[L]);
      DFS(L + 1, sum - numbers[L]);
    }
  };
  DFS(0, 0);
  return answer;
}

console.log(solution([4, 1, 2, 1], 4));
