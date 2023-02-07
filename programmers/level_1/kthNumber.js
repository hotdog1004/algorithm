/**
 * k번째 수 
 * @param {Array} array 
 * @param {Array} commands
 * @returns {Array} 
 * 배열 array의 i번째 숫자부터 j번째 숫자까지 자르고 정렬했을 때, k번째에 있는 수를 구한다.
 * 배열 array, [i, j, k]를 원소로 가진 2차원 배열 commands가 매개변수로 주어질 때,
 * commands의 모든 원소에 대해 앞서 설명한 연산을 적용했을 때 나온 결과를 배열에 담아 return
 * array의 길이는 1 이상 100 이하
 * array의 각 원소는 1 이상 100 이하
 * commands의 길이는 1 이상 50 이하
 * commands의 각 원소는 길이가 3
 */

function solution(array, commands) {
  let answer = [];
  let arr = [];
  answer = commands.map((referVal,idx)=>{
      arr.length = 0;
      const [start, end, value] = [referVal[0]-1, referVal[1], referVal[2]-1];
      
      arr = array.slice(start, end).sort((a,b)=>a-b);
      return arr[value];
      
  })
  return answer;
}

console.log(solution([1, 5, 2, 6, 3, 7, 4], [[2, 5, 3], [4, 4, 1], [1, 7, 3]]));