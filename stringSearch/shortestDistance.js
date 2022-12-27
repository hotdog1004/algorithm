/**
 * 가장 짧은 문자거리
 * @param {string} str 문자열
 * @param {string} specialChar 주어진 문자
 * @returns {Array} specialChar와 떨어진 최소거리를 담은 배열
 * 문자열의 각 문자가 주어진 문자 specialChar와 떨어진 최소거리를 출력
 * 문자열과 문자는 소문자로만 주어진다.
 */

function solution(str, specialChar) {
  /* 풀이 참고
    문자열의 크기만큼 반복문을 진행해서 같은 문자면 0으로 다른 문자면 +1을 해준다.
    반복문을 진행하면 왼쪽->오른쪽으로 순회하게 되는데 이렇게 구한 배열을
    기존 문자열을 오른쪽->왼쪽으로 순회하며 비교해서 구한 값 p와 비교해서 
    p가 최솟값이면 p로 변경해주면된다.
  */

  // 내 풀이

  let answer = [];
  let p = 0;

  [...str].forEach((s) => {
    if (s !== specialChar) p++;
    else {
      p = 0;
    }
    answer.push(p);
  });

  p = 1000;
  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] !== specialChar) p++;
    else {
      p = 0;
    }
    if (answer[i] > p) answer[i] = p;
  }
  return answer;

  // 강의풀이
  /*
  let answer = [];
  let p = 1000;
  for (let x of str) {
    if (x === specialChar) {
      p = 0;
      answer.push(p);
    } else {
      p++;
      answer.push(p);
    }
  }
  p = 1000;
  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] === specialChar) p = 0;
    else {
      p++;
      answer[i] = Math.min(answer[i], p);
    }
  }
  return answer;
  */
}

let str = 'teachermode';
console.log(solution(str, 'e'));
