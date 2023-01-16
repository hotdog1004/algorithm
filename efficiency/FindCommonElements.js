/**
 * [Two Pointers Algorithm]
 * 공통 원소 구하기
 * @param {Array} arr1 배열1
 * @param {Array} arr2 배열2
 * @returns {Array} 공통원소 배열
 * 두 배열의 공통 원소를 오름차순으로 정렬하여 출력
 */
function solution(arr1, arr2) {
  // 내 풀이
  // two-pointer 알고리즘을 활용해서 했어야했는데...
  // 방법이 잘 떠오르지 않아서 그냥 마음대로 풀었다.
  // 각 배열을 오름차순으로 정렬한 후 arr2 배열에 arr[p1]의 값이 있다면
  // answer 배열에 push후 p1을 증가시켰고 값이 없다면 p1의 값만 증가시켰다. 
  let answer = [];
  arr1.sort((a,b)=>a-b);
  arr2.sort((a,b)=>a-b);
  let n = arr1.length;
  let p1 = 0;
  while(p1 < n){
    if(arr2.includes(arr1[p1])) answer.push(arr1[p1++]);
    else{
      p1++;
    }
  }
  return answer;
}
function solution1(arr1, arr2) {
  // 강의 풀이
  let answer = [];
  arr1.sort((a,b)=>a-b);
  arr2.sort((a,b)=>a-b);
  let p1 = p2 = 0;

  while(p1 < arr1.length && p2 < arr2.length){
    if(arr1[p1] === arr2[p2]){
      answer.push(arr1[p1++]);
      p2++;

    }else if(arr1[p1] < arr2[p2]) p1++;
    // 각 배열이 오름차순으로 정렬이 되어있기때문에
    // 정확한 비교를 위해선 크기가 작은 값을 가리키는 포인터 변수의 값을 증가시켜야한다.
    else p2++;
  }
  return answer;
}
let a=[1, 3, 9, 5, 2];
let b=[3, 2, 5, 7, 8];
console.log(solution1(a, b));
