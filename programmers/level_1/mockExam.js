/**
 * 모의고사
 * @param {Array} answers
 * @returns {Array} 
 * 1번 수포자가 찍는 방식: 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, ...
 * 2번 수포자가 찍는 방식: 2, 1, 2, 3, 2, 4, 2, 5, 2, 1, 2, 3, 2, 4, 2, 5, ...
 * 3번 수포자가 찍는 방식: 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, ...
 * 1번 문제부터 마지막 문제까지의 정답이 순서대로 들은 배열 answers가 주어졌을 때, 
 * 가장 많은 문제를 맞힌 사람이 누구인지 배열에 담아 return 하도록 solution 함수를 작성해주세요.
 * 시험은 최대 10,000 문제로 구성되어있습니다.
 * 문제의 정답은 1, 2, 3, 4, 5중 하나입니다.
 * 가장 높은 점수를 받은 사람이 여럿일 경우, return하는 값을 오름차순 정렬해주세요.
 */

// answers의 길이에 맞춰서 풀도록 접근했으나 비효율적인 것 같음 ㅜㅜ
function solution(answers) {
  let answer = new Map()
  let scoreArr = [[1, 2, 3, 4, 5], [2, 1, 2, 3, 2, 4, 2, 5], [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]];
  // answers 길이 > 정답배열 -> 정답배열을 늘려야함
  // answers 길이 <= 정답배열 -> 그만큼 잘라서 보면됨
  const getScore = arr => {
    let arrSize = arr.length;
    let score = 0;
    if(answers.length > arrSize){
      
      let idx = 0;
      for(let i = arrSize+1; i <= answers.length; i++){
        arr.push(arr[idx]);
        idx++;
      }
      console.log(arr)
    }
    answers.forEach((num, index)=>{
      if(num === arr[index]) score++;
    })
    return score;
  }

  scoreArr.forEach((arr, idx)=>{
    answer.set(idx, getScore(arr))
  })
  
  const sortedAnswer =  [...answer].sort((a,b)=>b[1] - a[1]);
  const max = sortedAnswer[0][1];
  const result = [];
  sortedAnswer.forEach(arr=>{
    if(max === arr[1]){
      result.push(arr[0]+1);
    }
  })
  return result
}

// 밑은 다른사람의 풀이인데 좋은 풀이 같아서 추가
function otherSolution(answers) {
  let answer = [];
  const man1 = [1, 2, 3, 4, 5];
  const man2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const man3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  let count = [0, 0, 0];

  for(let i = 0; i < answers.length; i++) {
      if(answers[i] == man1[i % man1.length]) count[0]++;
      if(answers[i] == man2[i % man2.length]) count[1]++;
      if(answers[i] == man3[i % man3.length]) count[2]++;
  }

  const max = Math.max(count[0], count[1], count[2]);
  for(let i = 0; i < count.length; i++) {
      if(max == count[i]) answer.push(i + 1);
  }

  return answer;
}
  

console.log(solution([5, 5, 4, 2, 3]));
