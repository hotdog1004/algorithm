/**
 * [Queue]
 * 공주 구하기
 * @param {number} N 왕자의 수
 * @param {number} K 특정 숫자
 * @returns {number}
 * 정보 왕국의 이웃 나라 외동딸 공주가 숲속의 괴물에게 잡혀갔습니다. 
 * 정보 왕국에는 왕자가 N명이 있는데 서로 공주를 구하러 가겠다고 합니다. 정보왕국의 왕은 다음과 같은 방법으로 공주를 구하러 갈 왕자를 결정하기로 했습니다.
 * 왕은 왕자들을 나이 순으로 1번부터 N번까지 차례로 번호를 매긴다. 그리고 1번 왕자부터 N번 왕자까지 순서대로 시계 방향으로 돌아가며 동그랗게 앉게 합니다.
 * 그리고 1번 왕자부터 시계방향으로 돌아가며 1부터 시작하여 번호를 외치게 합니다.
 * 한 왕자가 K(특정숫자)를 외치면 그 왕자는 공주를 구하러 가는데서 제외되고 원 밖으로 나오게 됩니다.
 * 그리고 다음 왕자부터 다시 1부터 시작하여 번호를 외칩니다. 이렇게 해서 마지막까지 남은 왕자가 공주를 구하러 갈 수 있습니다.
 * N과 K가 주어질 때 공주를 구하러 갈 왕자의 번호를 출력하는 프로그램을 작성하시오.
 * 첫 줄에 자연수 N(5<=N<=1,000)과 K(2<=K<=9)가 주어진다.
 */

function solution(N, K) {
  // 내풀이 
  // 자바스크립트에선 queue도 배열을 사용한다!
  // queue라는 배열을 만들고 for문을 사용해서 초기값을 세팅해줌.
  let queue = [];
  for(let i = 1; i <= N; i++){
    queue.push(i);
  }

  // k를 체크하기 위해 idx 변수를 사용한다.
  let idx = 1;

  while(queue.length > 1){
    if(idx !== K){
      queue.push(queue[0]);
      idx++;
    }else idx = 1;

    queue.shift();
  }
  // while문을 빠져나올 떄 쯤엔 queue에는 하나의 원소만 존재.
  return queue[0];
}

function otherSolution(N, K) {
  let answer;
  let queue = Array.from({length:N}, (v,i)=>i+1);
  // Array.from() 를 사용해서 초기값 세팅까지 해줄 수 있다.
  while(queue.length){
    for(let i = 1; i < K; i++) queue.push(queue.shift());
    // 1부터 K 이전까지 반복문을 돌려서 shift() 해준 값을 그대로 push() 해줌.
    queue.shift();
    // K일 때는 그냥 shift();
    if(queue.length === 1) answer = queue.shift();
  }
  return answer;

}

console.log(solution(8,3));