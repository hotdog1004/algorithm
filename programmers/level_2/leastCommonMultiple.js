/**
 * n개의 최소공배수
 * @param {number[]} arr
 * @return {number} result
 * 두 수의 최소공배수(Least Common Multiple)란 입력된 두 수의 배수 중 공통이 되는 가장 작은 숫자를 의미합니다.
 * 예를 들어 2와 7의 최소공배수는 14가 됩니다.
 * 정의를 확장해서, n개의 수의 최소공배수는 n 개의 수들의 배수 중 공통이 되는 가장 작은 숫자가 됩니다.
 * n개의 숫자를 담은 배열 arr이 입력되었을 때 이 수들의 최소공배수를 반환하는 함수, solution을 완성해 주세요.
 * [제한조건]
 * arr은 길이 1이상, 15이하인 배열입니다.
 * arr의 원소는 100 이하인 자연수입니다.
 */

// 두 수의 최소 공배수는 두 수의 곱을 두 수의 최대공약수로 나눈것과 같다.
// 스택에 쌓아서 맨 위에있는 두 개의 수를 꺼내 최소공배수 구하고 추가하고 반복.
// 스택에 한개의 값만 있을 때 이 값이 n개수의 최소공배수가 된다.
function solution(arr) {
  const gcd = (a, b) => {
    let c = 0;
    while (b !== 0) {
      c = a % b;
      a = b;
      b = c;
    }
    return a;
  };
  while (arr.length >= 2) {
    let a = arr.pop();
    let b = arr.pop();
    let lcm = (a * b) / gcd(a, b);
    arr.push(lcm);
  }
  return arr.pop();
}
console.log(solution([2, 6, 8, 14])); // 168
// console.log(solution([1, 2, 3])); // 6
