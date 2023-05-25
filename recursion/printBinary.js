/**
 * 재귀함수를 이용한 이진수 출력
 * @param {number} n
 * @return {number}
 * 10진수 n이 입력되면 2진수로 변환하여 출력하는 프로그램을 작성하세요.
 * 단 재귀함수를 이용해서 출력해야 합니다.
 */

function solution(n) {
  let answer = "";
  const DFS = (n) => {
    if (n === 0) return;
    else {
      DFS(parseInt(n / 2));
      //   console.log(n % 2);
      answer += String(n % 2);
    }
  };

  DFS(n);
  return answer;
}
console.log(solution(11));
