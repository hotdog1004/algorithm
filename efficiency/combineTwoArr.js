/**
 * [Two Pointers Algorithm]
 * 두 배열 합치기
 * @param {Array} arr1 오름차순으로 정렬된 배열1
 * @param {Array} arr2 오름차순으로 정렬된 배열2
 * @returns {Array} 합친 배열
 * 오름차순으로 정렬이 된 두 배열을 오름차순으로 합쳐서 출력하기
 */

function solution(arr1, arr2) {
  // 내 풀이
  // 이미 정렬된 두 배열을 오름차순으로 합쳐서 출력하는 문제이기 때문에 
  // 배열을 합친 후 sort 함수로 정렬했다.
  let arr = arr1.concat(arr2);
  arr.sort((a, b)=> a-b);

  return arr;
}

// sort 함수의 시간복잡도 : O(nlogn)
// sort 함수는 입력의 크기가 커질 경우 효율적으로 정렬하기 위해 
// 퀵 정렬과 같은 정렬방식을 사용하기 때문에 O(nlogn)의 시간복잡도를 가질 수 있다.

function solution1(arr1, arr2) {
  // 강의 풀이
  // two-pointer방식으로 풀이 
  // 포인터 두개를 두고 두 배열을 비교하여 처리
  let answer = [];
  let n = arr1.length;
  let m = arr2.length;
  // 포인터 변수
  let p1 = p2 = 0;

  while(p1 < n && p2 < m){
    // p1++ p2++ 는 후위연산자이므로 배열에 push된 후 값이 1씩 증가한다.
    if(arr1[p1] <= arr2[p2]) answer.push(arr1[p1++]);
    else answer.push(arr2[p2++]);
  }

  while(p1 < n) answer.push(arr1[p1++]);
  while(p2 < m) answer.push(arr2[p2++]);

  return answer;

  return arr;
}

let a=[1, 3, 5];
let b=[2, 3, 6, 7, 9];
console.log(solution1(a, b));