/**
 * 숫자 짝꿍
 * @param {string} X 
 * @param {string} Y 
 * @returns {string} 
 * 두 정수 X, Y의 임의의 자리에서 공통으로 나타나는 정수 k(0 ≤ k ≤ 9)들을 이용하여 만들 수 있는 가장 큰 정수를 두 수의 짝꿍이라 합니다
 * (단, 공통으로 나타나는 정수 중 서로 짝지을 수 있는 숫자만 사용합니다).
 * X, Y의 짝꿍이 존재하지 않으면, 짝꿍은 -1입니다. X, Y의 짝꿍이 0으로만 구성되어 있다면, 짝꿍은 0입니다.
 * e.g. X = 3403이고 Y = 13203이라면, X와 Y의 짝꿍은 X와 Y에서 공통으로 나타나는 3, 0, 3으로 만들 수 있는 가장 큰 정수인 330입니다.
 * 두 정수 X, Y가 주어졌을 때, X, Y의 짝꿍을 return하는 solution 함수를 완성해주세요.
 * 3 ≤ X, Y의 길이(자릿수) ≤ 3,000,000입니다.
 * X, Y는 0으로 시작하지 않습니다.
 * X, Y의 짝꿍은 상당히 큰 정수일 수 있으므로, 문자열로 반환합니다.
 */

function solution(X,Y) {
  const numArr = [];
  const xArr = new Array(10).fill(0);
  const yArr = new Array(10).fill(0);

  // 개수 파악
  X.split('').forEach(num => xArr[num]++)
  Y.split('').forEach(num => yArr[num]++)
  for(let i = 0; i < 10; i++){
    // 겹치는 숫자를 찾아야하는거니까 최소값으로 처리
    const min = Math.min(xArr[i], yArr[i]);
    for(let j = 0; j < min; j++){
      numArr.push(i)
    }
  }
  
  if(numArr.length === 0) return '-1';
  numArr.sort((a,b)=>b-a);
  if(numArr[0] === 0 ) return '0';
  return String(numArr.join(''));
}

console.log(solution('12321', '42531'))