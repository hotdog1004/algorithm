/**
 * [버블정렬]
 * @param {Array} numbers
 * @returns {Array}
 * N개의 숫자가 입력되면 오름차순으로 버블 정렬하여 출력하는 프로그램을 작성하세요. 
 * N개의 자연수가 공백을 사이에 두고 입력됩니다. 각 자연수는 정수형 범위 안에 있습니다.
 * 1<=N<=100 입니다.
 */

function solution(numbers) {
  let size = numbers.length-1;
  
  while(size >= 2){
    // 안쪽 반복문은 i < size보다 i < size-1 해주는게 반복의 횟수를 줄일 수 있음.
    for(let i = 0; i < size; i++){
      if(numbers[i] > numbers[i+1]) [numbers[i], numbers[i+1]] = [numbers[i+1], numbers[i]];
    }
    size--;
  }
  return numbers;
}

function otherSolution(numbers) {
  let answer = numbers;
  for(let i = 0; i < numbers.length-1; i++){
    for(let j = 0; j < numbers.length-i-1; j++){
      // 앞에 있는 값이 뒤에 있는 값보다 크다면 교환. 큰 값을 뒤로 배치한다.
      if(numbers[i] > numbers[i+1]) [numbers[i], numbers[i+1]] = [numbers[i+1], numbers[i]];
    }
  }
  return answer;
}

const numbers = [13,5,11,7,23,15];
console.log(solution(numbers))