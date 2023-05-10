/**
 * 이분검색
 * @param {number}  target
 * @param {number[]} arr
 * @return {number} M의 값의 위치 번호
 * 임의의 N개의 숫자가 입력으로 주어집니다.
 * N개의 수를 오름차순으로 정렬한 다음 N개의 수 중 한 개의 수인 M이 주어지면 이분검색으로 M이 정렬된 상태에서 몇 번째에 있는지 구하는 프로그램을 작성하세요.
 * 단 중복값은 존재하지 않습니다.
 */

// 이분검색 : 정렬되어있는 리스트에서 탐색 범위를 절반씩 좁혀가며 데이터를 탐색하는 방법. 시간복잡도 : O(logn)
// cf) 순차탐색 : 앞에서부터 하나씩 탐색하는 것. 일일이 탐색하기 때문에 시간복잡도는 최악의 경우 O(n)
// 배열 내부의 데이터가 정렬되어있어야만 사용이 가능함!
// 변수 3개(start, end, mid)를 이용해서 탐색
// 내 풀이
function solution(target, arr) {
  let start = 0;
  let end = arr.length - 1;

  // 정수만 사용하기 위해 parseInt해줌
  // mid : index를 가리키는 변수
  let mid = Number.parseInt((start + end) / 2);

  arr.sort((a, b) => a - b);

  // 찾으려는 데이터와 중간점 위치에 있는 데이터를 반복적으로 비교해서 원하는 데이터를 ㅏㅊㅈ는다.
  while (arr[mid] !== target) {
    if (arr[mid] > target) end = mid - 1;
    else start = mid + 1;
    // mid제외니까!!!! 그 다음값, 전값으로 대입

    mid = Number.parseInt((start + end) / 2);
  }

  return mid + 1;
}

// 강의 풀이
function otherSoultion(target, arr) {
  let answer;
  arr.sort((a, b) => a - b);
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = parseInt((start + end) / 2);
    if (arr[mid] === target) {
      answer = mid + 1;
      break;
    } else if (arr[mid] > target) end = mid - 1;
    else start = mid + 1;
  }
  return answer;
}

console.log(solution(32, [23, 87, 65, 12, 57, 32, 99, 81]));
