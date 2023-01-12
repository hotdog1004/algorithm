/**
 * 직사각형 넓이 구하기
 * @param {Array} dots 직사각형 네 꼭짓점의 좌표 이중배열
 * @returns {number} 넓이를 리턴
 */

function solution(dots) {
  /* 풀이 참고
    어떤 좌표가 어디에 들어있는지는 미정
    x와 y는 두개씩 값이 같을 것임 
    x값을 기준으로 배열을 정렬해서 처리해도되고, 최소값과 최댓값을 구해서 처리해도된다.
    서로 다른 x값 두개로 가로의 길이를 구할 수 있고, 서로 같은 x값이 가지고 있는 y의 값 두개로 세로의 길이를 구할 수 있다.
    */
  let x,
    y = 0;
  /*
    x값을 기준으로 배열을 정렬(index 0을 기준으로 정렬)
    sort함수를 사용하면 일차 배열 뿐만 아니라 이중배열도 정렬할 수 있다
    */
  dots.sort((a, b) => {
    return a[0] - b[0];
  });

  x = Math.abs(dots[0][0] - dots[2][0]);
  y = Math.abs(dots[0][1] - dots[1][1]);

  return x * y;
}

console.log(
  solution([
    [1, 1],
    [2, 1],
    [2, 2],
    [1, 2],
  ])
);
