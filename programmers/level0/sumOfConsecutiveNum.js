/**
 * 연속된 수의 합
 * @param {number} num 연속된 수의 개수
 * @param {number} total 연속된 수 num개를 더한 값
 * @returns {Array} 정수배열
 * 연속된 수 num개를 더한 값이 total이 될 때, 정수배열을 오름차순으로 담아서 return
 * num개의 연속된 수를 더해서 total이 될 수 없는 테스트 케이스는 없다.
 * 1 <= num <= 100, 0 <= total <= 1000
 */
function solution(num, total) {
  // 초기값을 구하는 과정이 중요
  // 반복문 이용해서 푸는 방식으로 접근하려고 했는데
  // 0 <= total <= 1000 이어서 범위가 너무 넓었고 어떻게 접근해야할지 모르겠어서 검색했다.
  // Math.ceil(total/num) - (num/2) 을 해준 후
  // 결과를 올림처리(ceil이용)해서 초기값을 구할 수 있다.

  let answer = [];
  let n = Math.ceil(total / num);
  let m = num / 2;

  let firstNumber = Math.ceil(n - m);
  for (let i = 0; i < num; i++) {
    answer.push(firstNumber);
    firstNumber++;
  }
  return answer;
}

function solution1(num, total) {
  let answer = [];
  let n = Math.ceil(total / num);
  let m = num / 2;

  let firstNumber = Math.ceil(n - m);
  // 위에서 처럼 반복문을 사용하지않고 Array.from()을 사용해서도 풀 수 있다.
  return Array.from({ length: num }, (_, i) => i + firstNumber);
}

console.log(solution(5, 5));
