/**
 * [선택정렬]
 * @param {Array} numbers
 * @returns {Array}
 * N개의 숫자가 입력되면 오름차순으로 선택 정렬하여 출력하는 프로그램을 작성하세요. 
 * N개의 자연수가 공백을 사이에 두고 입력됩니다. 각 자연수는 정수형 범위 안에 있습니다.
 * 1<=N<=100 입니다.
 */

// 내 풀이
function solution(numbers) {
  for(let i = 0; i < numbers.length; i++){
    for(let j = i+1; j < numbers.length; j++){
      if(numbers[i] > numbers[j]){
        let tmp = numbers[i];
        numbers[i] = numbers[j];
        numbers[j] = tmp;
      }
    }
  }
  return numbers;
}

// 강의풀이
function otherSolution(numbers) {
  let answer = numbers;
  for(let i = 0; i < numbers.length-1; i++){
    let idx = i;
    for(let j = i+1; j < numbers.length; j++){
      // 비교해서 작은 수가 나타날 때마다 값을 교환하지 않고(내가 푼 방법)
      // idx를 사용해서 j for문이 끝날 때 한번만 두 값의 교환을 하도록 함 -> 교환 횟수를 최소화할 수 있다.
      if(numbers[idx] > numbers[j]) idx = j;
    }

    // 구조분해할당 방식을 사용하면 tmp변수를 굳이 선언하지 않아도 짧은 코드로 값을 할당할 수 있다.
    [numbers[i], numbers[idx]] = [numbers[idx], numbers[i]];
  }
  return answer;
}
const numbers = [13,5,11,7,23,15];
console.log(solution(numbers))
