/**
 * 명예의 전당(1)
 * @param {number} k 명예의 전당 목록의 점수의 개수
 * @param {Array} score 1일부터 마지막 날까지 출연한 가수들의 점수
 * @returns {Array} 매일 발표된 명예의 전당의 최하위 점수 Array
 * "명예의 전당"이라는 TV 프로그램에서는 매일 1명의 가수가 노래를 부르고, 시청자들의 문자 투표수로 가수에게 점수를 부여합니다. 
 * 매일 출연한 가수의 점수가 지금까지 출연 가수들의 점수 중 상위 k번째 이내이면 해당 가수의 점수를 명예의 전당이라는 목록에 올려 기념합니다.
 * 즉 프로그램 시작 이후 초기에 k일까지는 모든 출연 가수의 점수가 명예의 전당에 오르게 됩니다.
 * k일 다음부터는 출연 가수의 점수가 기존의 명예의 전당 목록의 k번째 순위의 가수 점수보다 더 높으면, 출연 가수의 점수가 명예의 전당에 오르게 되고 기존의 k번째 순위의 점수는 명예의 전당에서 내려오게 됩니다.
 * 명예의 전당 목록의 점수의 개수 k, 1일부터 마지막 날까지 출연한 가수들의 점수인 score가 주어졌을 때, 매일 발표된 명예의 전당의 최하위 점수를 return하는 solution 함수를 완성해주세요.
 * 3 ≤ k ≤ 100
 * 7 ≤ score의 길이 ≤ 1,000
 * 0 ≤ score[i] ≤ 2,000
 */

function solution(k,score) {
  // 반복문 돌아갈 때마다 Math.min() 으로 최소값 구해서 처리
  let fameArr = new Array(k).fill(Number.MAX_SAFE_INTEGER);
  let answer = new Array(score.length).fill(0);
  // 첫번째 값은 무조건 같음
  answer[0] = score[0];
  fameArr[0] = score[0];
  for(let i = 1; i < score.length; i++){
    if(i < k){
      fameArr[i] = score[i];
    }else{
      if(score[i] > Math.min(...fameArr)) {
        // 최하위 값으로 변경
        fameArr[fameArr.indexOf(Math.min(...fameArr))] = score[i]
      }
    }
    answer[i] = Math.min(...fameArr);
  }
  return answer;
}

// sort() 를 이용하여 정렬하고 stack 처럼 활용하여 풀 수도 있음 
function otherSolution(k,score) {
  const answer = [];
  const fameArr = [];

  score.forEach((num, idx) => {
    fameArr.push(num);
    // 내림차순 정렬
    fameArr.sort((a,b)=>b-a);
    
    if(fameArr.length >= k) answer.push(fameArr[k-1]);
    else answer.push(fameArr[fameArr.length-1])
    console.log(fameArr)
  });
  return answer;
}
console.log(solution(4, [0, 300, 40, 300, 20, 70, 150, 50, 500, 1000]))