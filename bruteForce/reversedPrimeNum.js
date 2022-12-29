/**
 * 뒤집은 소수
 * @param {Array} arr 자연수 배열
 * @returns {Array} 소수배열
 * 각 자연수를 뒤집은 후 뒤집은 수가 소수이면 그 소수를 출력
 * 첫 자리부터 연속된 0은 무시
 * 소수 : 1과 자기 자신만으로 나누어 떨어지는 1보다 큰 양의 정수
 */

function solution(arr) {
  // 내 풀이
  // 자연수를 뒤집어서 배열형태로 만들기 위해 map()을 사용
  // 자연수를 뒤집기 위해 숫자를 String()을 사용하여 형변환 후
  // 전개 연산자와 reverse() 함수를 사용해서배열로 만든 후
  // 다시 join('')으로 합친 string을 Number.parseInt() 를 사용하여 정수로 만들었다.
  let answer = [];
  let reversedArr = [];
  reversedArr = arr.map((num) => {
    return Number.parseInt([...String(num)].reverse().join(''));
  });

  // 그리고 뒤집어진 배열을 반복문을 통해 isPrime() 함수를 호출하여 결과에 따라 answer 배열에 push
  reversedArr.forEach((num) => {
    if (isPrime(num)) answer.push(num);
  });

  return answer;
}

function isPrime(num) {
  if (num === 1) return false;

  for (let i = 2; i < num / 2; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

/* ===================================================== */

// 강의 풀이
// 1. 반복문만 사용하여 처리하는 법
function solution1(arr) {
  let answer = [];
  for (let x of arr) {
    let res = 0;
    while (x) {
      let t = x % 10;
      // 10으로 나눈 나머지를 통해 일의 자리의 값을 찾을 수 있음
      // 32로 치면 처음 t는 2가 된다.
      res = res * 10 + t;
      // 0 * 10 + 2 니까 res도 2가 된다.
      x = parseInt(x / 10);
      // 32/10 을 하면 3.2 이
      // 값을 정수화하면 3이 된다.
    }
    // for 반복문이 한번 돌 때 같이 처리할 수 있음.
    if (isPrime1(res)) answer.push(res);
  }
}

// 2. split(), reverse(), join() 사용해서 간단하게 처리하는 방법
function solution2(arr) {
  let answer = [];
  for (let x of arr) {
    let res = Number(x.toString().split('').reverse().join(''));
    if (isPrime(res)) answer.push(res);
  }
}

// 소수 판별법 1. 직접 나눠서 계산하기(시간복잡도 : O(N))
function isPrime1(num) {
  if (num === 1) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}
// 소수 판별법 2. n/2 까지만 나눠서 계산하기(시간복잡도 : O(N))
// 약수 특성상 num의 절반을 넘을 수 없음.
function isPrime2(num) {
  if (num === 1) return false;
  for (let i = 2; i < parseInt(num / 2); i++) {
    if (num % i === 0) return false;
  }
  return true;
}
// 소수 판별법 3. n의 제곱근까찌만 나눠서 계산하기(시간복잡도 : O(√N)) 가장 빠르다.
// num의 제곱근보다 작은 수에서 나눠지는 수가 나오지않으면
// 제곱근보다 큰 수에서도 나눠지는 수가 나올 수 없음
// 굳이 제곱근보다 큰 수까지 반복문을 돌려서 판별할 필요가 없음
function isPrime3(num) {
  if (num === 1) return false;
  for (let i = 2; i < parseInt(Math.sqrt(num)); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

let arr = [32, 55, 62, 20, 250, 370, 200, 30, 100];
console.log(solution(arr));
