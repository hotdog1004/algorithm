/**
 * 다음에 올 숫자
 * @param {Array} common 등차수열 or 등비수열 배열
 * @returns {number} 다음에 올 숫자
 * 등차수열 or 등비수열인 common이 매개변수로 주어질 때
 * 마지막 원소 다음으로 올 숫자를 return
 * 등차수열 or 등비수열이 아닌 경우는 X
 * 공비가 0인 경우 X
 * 등차수열 : 연속하는 두 항의 차이가 모두 일정한 수열
 * 등비수열 : 연속하는 두 항이 일정한 비율을 가지는 수열
 */

function solution(common) {
  let answer = 0;
  let flag = true;
  let minus = common[1] - common[0];
  for (let i = 1; i < common.length - 1; i++) {
    let result = 0;
    result = common[i + 1] - common[i];
    if (minus !== result) flag = false;
  }
  const lastNum = common[common.length - 1];
  // flag 가 true면 등차수열
  if (flag) {
    return lastNum + minus;
  } else {
    answer = lastNum * (common[1] / common[0]);
  }
  return answer;
}

// 다른 사람들 풀이
function solution1(common) {
  const minus = common[1] - common[0] === common[2] - common[1];
  // 굳이 반복문 돌리지 않고 두 값의 비교로 등차수열인지 확인이 가능하다.
  if (minus) {
    return common[common.length - 1] + common[1] - common[0];
  } else {
    return common[common.length - 1] * (common[1] / common[0]);
  }
}

console.log(solution([1, 2, 3]));
