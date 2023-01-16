/**
 * [Two Pointers Algorithm]
 * 연속 부분 수열
 * @param {number} m 특정 숫자 m
 * @param {Array} arr n개의 수로 이루어진 수열
 * @returns {number} m이 되는 경우의 횟수
 * 수열에서 연속부분수열의 합이 특정숫자 M이 되는 경우가 몇 번 있는지 구하기
 * m=6이고 arr = [1,2,1,3,1,1,1,2] 이면 합이 6이 되는 연속 부분 수열은 
 * {2, 1, 3}, {1, 3, 1, 1}, {3, 1, 1, 1}로 총 3가지
 * 수열의 원소값은 1000을 넘지 않는 자연수이다.
 */
function solution(m, arr) {
  let answer = 0;
  let lt = rt = 0;
  let sum = 0;
  for(let rt = 0; rt < arr.length; rt++){
    sum += arr[rt];
    if(sum === m) answer++;
    // if 조건문의 영역에 while문이 있는 거 아님!! 따로따로임 헷갈리지 말 것..
    while(sum >= m){ // sum의 값이 m보다 크거나 '같으면' 뺴주고 비교
      sum -= arr[lt++]; // 빼주고 증가
      if(sum === m ) answer++; // 값을 빼줬으면 확인
    }
  }
  /*
  위의 for문 대신 이렇게 써도 가능하다.
  for (let rt = 0; rt < arr.length; rt++) {
    sum += arr[rt];
    while (sum >= m) {
      if (sum === m) answer++;
      sum -= arr[lt++];
    }
  }
  */
  return answer;
}
let a=[1, 2, 1, 3, 1, 1, 1, 2];
console.log(solution(6, a));