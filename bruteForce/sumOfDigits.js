/**
 * 자릿수의 합
 * @param {Array} arr 자연수 배열
 * @returns {number} 가장 큰 숫자
 * 자연수 배열이 입력되면 각 자연수의 자릿수의 합을 구하고
 * 그 합이 최대인 자연수를 출력
 * 자연수의 합이 같은 경우 원래의 숫자가 큰 숫자를 답으로 한다.
 */

function solution(n, arr) {
  // 내 풀이
  // 숫자를 하나씩 쪼개기 위해 string으로 형변환 후 전개연산자를 사용하여 배열로 만들고
  // recude 함수를 사용해서 값을 더해주고 난 후 비교를 해서 처리하려고 했다.
  // 강의풀이를 보니 변수를 너무 남발한 것 같다는 생각이 든다.

  let result = Number.MIN_SAFE_INTEGER;
  let bigRes = Number.MIN_SAFE_INTEGER;
  let answer = Number.MIN_SAFE_INTEGER;

  arr.forEach((num, index) => {
    result = [...String(num)].reduce(
      (prev, curr) => Number(prev) + Number(curr),
      0
    );
    if (result > bigRes) {
      bigRes = result;
      answer = num;
    } else if (result === bigRes) {
      if (num > answer) answer = num;
    }
  });
  return answer;

  // 강의 풀이
  /*
  // while 사용
  // reduce 함수나 전개 연산자를 사용하지 않고 반복문과 간단한 연산을 통해 
  // 자연수의 숫자들을 각각 더해서 처리하는 방법도 있다.

  let answer,
    max = Number.MIN_SAFE_INTEGER;
  for (let x of arr) {
    let sum = 0,
      tmp = x;
    while (tmp) {
      sum += tmp % 10;
      tmp = Math.floor(tmp / 10);
    }
    if (sum > max) {
      max = sum;
      answer = x;
    } else if (sum === max) {
      if (x > answer) answer = x;
    }
  }
  return answer;

  
  // reduce 사용
  let answer,
    max = Number.MIN_SAFE_INTEGER;
  for (let x of arr) {
    let sum = x
      .toString()
      .split('')
      .reduce((a, b) => a + Number(b), 0);
    if (sum > max) {
      max = sum;
      answer = x;
    } else if (sum === max) {
      if (x > answer) answer = x;
    }
  }
  return answer;
  */
}

let arr = [128, 460, 603, 40, 521, 137, 123];
console.log(solution(arr));
