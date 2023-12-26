/**
 * 카펫
 * @param {number} brown
 * @param {number} yellow
 * @return {number[]}
 * Leo는 카펫을 사러 갔다가 아래 그림과 같이 중앙에는 노란색으로 칠해져 있고 테두리 1줄은 갈색으로 칠해져 있는 격자 모양 카펫을 봤습니다.
 * Leo는 집으로 돌아와서 아까 본 카펫의 노란색과 갈색으로 색칠된 격자의 개수는 기억했지만, 전체 카펫의 크기는 기억하지 못했습니다.
 * Leo가 본 카펫에서 갈색 격자의 수 brown, 노란색 격자의 수 yellow가 매개변수로 주어질 때
 * 카펫의 가로, 세로 크기를 순서대로 배열에 담아 return 하도록 solution 함수를 작성해주세요.
 * [제한조건]
 * 갈색 격자의 수 brown은 8 이상 5,000 이하인 자연수입니다.
 * 노란색 격자의 수 yellow는 1 이상 2,000,000 이하인 자연수입니다.
 * 카펫의 가로 길이는 세로 길이와 같거나, 세로 길이보다 깁니다.
 */

// [약수를 이용한 풀이]
// yellow의 제곱근을 구하고(제곱근을 올림) 제곱근까지의 약수를 구하기
// 제곱근까지 yellow의 약수들로 나눠주면 가능한 yellow의 리스트를 알 수 있다.
// 그리고 (가로*2)+(세로*2)+4로 하면 brown의 수가 나오는 걸 이용해서 비교
// 맞으면 가로 세로 2씩 배열을 늘려서 return
function solution(brown, yellow) {
  let answer = [0, 0];
  let limit = Math.ceil(Math.sqrt(yellow));
  for (let i = 1; i <= limit; i++) {
    if (yellow % i === 0) {
      answer[0] = yellow / i;
      answer[1] = i;
    } else continue;

    if (answer[0] * 2 + answer[1] * 2 + 4 === brown) {
      answer[0] += 2;
      answer[1] += 2;
      return answer;
    }
  }

  return answer;
}
// [이분탐색을 이용한 풀이]
// 세로길이 x 가로길이 y (x <= y)
// x + y = (brown+4)/2
// x * y = brown + yellow
// (brown+4)/2  로 x,y를 잘 택해서 그 곱이 brown + yellow 가 되도록 하면 되는데, 이 때 x와 y의 차가 더 작을 수록 그 곱이 커진다.
// s =  Math.floor((brown+4)/2) 라고 하면 x는 1~ s/2의 범위를 가지게됨. 이를 통해 y = s-x로 x*y의 값을 구할 수 있다.
// x <= y라고 하면 x는 1부터 (x+y)/2의 값을 가진다.

function otherSolution(brown, yellow) {
  const m = brown + yellow;
  const s = Math.floor((brown + 4) / 2);

  // x가 가질 수 있는 최대 값
  let diff = Math.floor(s / 2);

  // x가 가질 수 있는 최대값의 절반
  let x = Math.floor(diff / 2);
  let y = s - x;
  diff = Math.floor(diff / 2);

  while (x * y !== m) {
    if (diff !== 1) diff = Math.floor(diff / 2);
    if (x * y > m) {
      x -= diff;
      y += diff;
    } else {
      x += diff;
      y -= diff;
    }
  }
  return [y, x];
}
// console.log(solution(10, 2)); // [4,3]
// console.log(solution(8, 1)); // [3,3]
console.log(otherSolution(24, 24)); // [8,6]
