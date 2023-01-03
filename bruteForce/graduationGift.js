/**
 * 졸업선물
 * @param {number} budget 예산
 * @param {Array} product 상품의 가격과 배송비가 담긴 배열
 * @returns {number} 현재 예산으로 선물할 수 있는 최대 학생 수
 * 선생님의 예산으로 최대 몇명의 학생에게 선물을 사줄 수 있는지 구하기
 * 선생님은 상품 하나를 50% 할인해서 살 수 있는 쿠폰을 가지고 있다.
 * 단, 배송비는 할인에 포함되지 않는다.
 * 1 <= 학생수 <= 1000, 1 <= 예산 <= 100000000
 * 상품가격과 배송비는 각각 100000을 넘지 않는다. 상품가격은 짝수로만 입력된다.
 */

// 처음 풀이
// product 배열의 각각의 값을 더한 기준으로 오름차순 정렬을 한 후 for 반복문으로 예산과 비교해서 처리 하려고 했다.
// 반복문을 이용해서 배송비와 가격을 누적시켜서 더한 값이 예산보다 적으면 cnt+1 을 해주고
// 반대의 경우엔 누적된 값 + 상품 가격을 2로 나눈 값 + 배송비가 예산과 같으면 cnt+1을 한 후 반복문을 빠져나가게 처리했었다.
// 하지만 문제는 현재 예산으로 선물할 수 있는 최대 학생 수를 구하는 것이기 때문에
// **모든 케이스를 따지고 비교해야한다.
// 상품이 할인 받을 경우의 수를 모두 따져서 처리해야함.
function solution(budget, product) {
  let answer = 0;
  let n = product.length;
  product.sort((a, b) => a[0] + a[1] - (b[0] + b[1]));

  for (let i = 0; i < n; i++) {
    // 처음부터 비교할 money에 예산-(할인가격+배송비)를 대입해준 후 시작
    // money는 모든 경우의 수(상품 중 하나가 할인 되었을 때)를 체크한다.
    let money = budget - (product[i][0] / 2 + product[i][1]);
    let cnt = 1; // 할인된 상품을 이미 빼주었으므로 cnt=1로 초기화한다.
    for (let j = 0; j < n; j++) {
      if (j !== i && product[i][0] + product[i][1] <= money) {
        money -= product[i][0] + product[i][1];
        cnt++;
      } else if (j !== i && product[j][0] + product[j][1] > money) break;
    }
    // answer엔 바깥 for문이 돌면서 처리된 cnt 값 중 최대값이 들어가도록 처리
    answer = Math.max(answer, cnt);
  }

  return answer;
}

// let arr = [
//   [6, 6],
//   [2, 2],
//   [4, 3],
//   [4, 5],
//   [10, 3],
// ];
// console.log(solution(28, arr));

console.log(
  solution(41, [
    [8, 6],
    [2, 2],
    [4, 3],
    [4, 5],
    [12, 1],
  ])
);
