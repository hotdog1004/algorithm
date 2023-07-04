/**
 * 순열구하기
 * @param {number} m
 * @param {number[]} arr
 * @return {number} 총 경우의 수
 */

function solution(m, arr) {
  let answer = [];
  let check = Array.from({ length: arr.length }).fill(0);
  let tmp = Array.from({ length: m });
  const DFS = (L) => {
    if (L === m) {
      answer.push(tmp.slice());
    } else {
      for (let i = 0; i < arr.length; i++) {
        if (check[i] === 0) {
          check[i] = 1; // 사용중임을 표시하기 위해 1로 체크
          tmp[L] = arr[i];
          DFS(L + 1);
          // 밑에서 부턴 back 하는 쪽이니까 1로 체크한 거 0으로 풀기
          check[i] = 0;
        }
      }
    }
  };
  DFS(0);
  return answer;
}
console.log(solution(2, [3, 6, 9]));
