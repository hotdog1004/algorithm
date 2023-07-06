/**
 * 팩토리얼
 * @param {number} n
 * @return {number}
 * 자연수 N을 입력하면 N!값을 구하세요.
 * N! = n*(n-1)*(n-2)*.....*2*1입니다.
 * 만약 N=5라면 5!=5*4*3*2*1=120입니다.
 * 첫째 줄에 자연수 N(3<=n<=10)이 입력됩니다.
 */

function solution(n) {
  let answer;
  const DFS = (L) => {
    if (L === 1) return 1;
    else return L * DFS(L - 1);
  };

  answer = DFS(n);
  return answer;
}

console.log(solution(5));
