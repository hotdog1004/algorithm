/**
 * Special Sort(구글 인터뷰 문제)
 * @param {number[]} arr
 * @returns {number[]} 
 * N개의 정수가 입력되면 당신은 입력된 값을 정렬해야 한다.
 * 음의 정수는 앞쪽에 양의정수는 뒷쪽에 있어야 한다. 또한 양의정수와 음의정수의 순서에는 변함이 없어야한다.
 * 음수를 포함한 정수 배열이 주어진다. 정렬해서 출력할 것
 * 단, 숫자 0은 입력되지 않는다.
 */

// 내풀이 : 정렬 불필요. 음수인지 정수인지 체크해서 처리
function solution(arr){
  let frontArr = [];
  let backArr = [];
  arr.forEach(num=>{
    if(num < 0) frontArr.push(num);
    else backArr.push(num)
  })

   return frontArr.concat(backArr);

}

// 강의풀이 : 버블정렬이용해서 양수, 음수일 떄 자리변경
function otherSoultion(arr){
  let answer  = arr;
  for(let i = 0; i < arr.length-1; i++){
    for(let j = 0; j < arr.length-i-1; j++){
      // 앞이 양수고 뒤가 음수면 자리 변경!
      if(arr[j] > 0 && arr[j+1] < 0) [arr[j], arr[j+1]] = [arr[j+1], arr[j]]; 
    }
  }
  return answer;
}

let arr=[1, 2, 3, -3, -2, 5, 6, -6];
console.log(solution(arr));