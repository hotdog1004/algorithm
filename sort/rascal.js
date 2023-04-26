/**
 * 장난꾸러기 현수
 * @param {number} size 캐시의 크기 size
 * @param {number[]} arr 처리순으로 주어진 작업번호
 * @returns {number[]} 가장 최근 사용된 작업 순으로 정렬된 배열
 * 현수네 반에는 N명의 학생들이 있습니다.
 * 선생님은 반 학생들에게 반 번호를 정해 주기 위해 운동장에 반 학생들을 키가 가장 작은 학생부터 일렬로 키순으로 세웠습니다.
 * 제일 앞에 가장 작은 학생부터 반 번호를 1번부터 N번까지 부여합니다. 현수는 짝꿍보다 키가 큽니다.
 * 그런데 현수가 앞 번호를 받고 싶어 짝꿍과 자리를 바꿨습니다. 선생님은 이 사실을 모르고 학생들에게 서있는 순서대로 번호를 부여했습니다.
 * 현수와 짝꿍이 자리를 바꾼 반 학생들의 일렬로 서있는 키 정보가 주어질 때 현수가 받은 번호와 현수 짝꿍이 받은 번호를 차례로 출력하는 프로그램을 작성하세요.
 * 인자로는 제일 앞에부터 일렬로 서있는 학생들의 키가 주어집니다.
 * 키(높이) 값 H는 (120<=H<=180)의 자연수 입니다.
 */

function solution(arr) {
  let answer = [];
  let sortedArr = arr.slice();
  sortedArr = sortedArr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    if (sortedArr[i] !== arr[i]) answer.push(i + 1);
    // 번호는 1부터 시작되니까 i+1
  }
  return answer;
}

console.log(solution([120, 130, 150, 150, 130, 150]));
