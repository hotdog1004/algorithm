/**
 * 다항식 더하기
 * @param {string} polynomial 다항식 문자열
 * @returns {string} return type은 string
 */

function solution(polynomial) {
  // 계산된 결과가 없을 땐 return '0'
  // 계수 1은 생략할 것 (1x는 x로 표기할 것)
  // polynomial은 0부터 9까지의 정수, 공백, ‘x’, ‘+'로 이루어진다.

  let answer = '';
  let mark = '';
  let arr = polynomial.split(' + ');
  let xNum = 0;
  let num = 0;
  arr.forEach((item) => {
    if (item.includes('x')) {
      if (item.length === 1) xNum++;
      else {
        xNum += Number(item.replace('x', ''));
      }
    } else {
      num += Number(item);
    }
  });
  mark = num > 0 && xNum >= 1 ? ' + ' : '';

  if (xNum > 1) {
    answer = `${xNum}x${mark}`;
  } else if (xNum === 1) {
    answer = `x${mark}`;
  } else if (xNum === 0) {
    answer = '';
  }

  answer += num > 0 ? `${num}` : '';

  if (num === 0 && xNum === 0) return '0';
  return answer ? answer : '0';
}

console.log(solution('x'));
