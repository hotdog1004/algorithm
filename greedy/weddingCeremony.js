/**
 * 결혼식
 * @param {number[][]} arr
 * @return {number} 피로연장에 동시에 존재하는 최대 인원
 * 현수는 다음 달에 결혼을 합니다. 현수는 결혼식 피로연을 장소를 빌려 3일간 쉬지 않고 하려고 합니다.
 * 피로연에 참석하는 친구들 N명의 참석하는 시간정보를 현수는 친구들에게 미리 요구했습니다.
 * 각 친구들은 자신이 몇 시에 도착해서 몇 시에 떠날 것인지 현수에게 알려주었습니다.
 * 현수는 이 정보를 바탕으로 피로연 장소에 동시에 존재하는 최대 인원수를 구하여 그 인원을 수용할 수 있는 장소를 빌리려고 합니다.
 * 만약 한 친구가 오는 시간 13, 가는시간 15라면 이 친구는 13시 정각에 피로연 장에 존재하는 것이고 15시 정각에는 존재하지 않는다고 가정합니다.
 * 시간은 첫날 0시를 0으로 해서 마지막날 밤 12시를 72로 하는 타임라인으로 오는 시간과 가는 시간이 음이 아닌 정수로 표현됩니다.
 * 피로연장에 동시에 존재하는 최대 인원을 출력하세요.
 */

function solution(arr) {
  let timeLine = [];
  let answer = 0;
  let cnt = 0;
  for (const times of arr) {
    timeLine.push([times[0], "s"]); // 오는시간
    timeLine.push([times[1], "e"]); // 가는시간
  }
  timeLine.sort((a, b) => {
    // 문자는 아스키코드 넘버 기준으로 sort필요!
    if (a[0] === b[0]) return a[1].charCodeAt() - b[1].charCodeAt();
    else return a[0] - b[0];
  });

  for (const times of timeLine) {
    if (times[1] === "s") cnt++;
    else cnt--;
    answer = Math.max(answer, cnt);
  }

  return answer;
}

let arr = [
  [14, 18],
  [12, 15],
  [15, 20],
  [20, 30],
  [5, 14],
];
console.log(solution(arr));
