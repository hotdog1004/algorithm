/**
 * 컨트롤 제트
 * @param {string} s 숫자와 'Z'가 공백으로 구부되어 담긴 문자열
 * @returns {number} 계산값
 * 문자열에 있는 숫자를 차례대로 더 해서 출력
 * 단 'Z'가 나오면 바로 전에 더했던 숫자를 뺀다는 뜻(말 그대로 컨트롤+Z임)
 * 1 <= s의 길이 <= 200
 * 1000 < s의 원소 중 숫자 < 1000
 * 0을 제외하고 0으로 시작하는 숫자는 없다.
 * 
 */

function solution(s) {
  let answer = 0;
  let arr = s.split(' ');
  let newArr = [];
  for(let i = 0; i < arr.length; i++){
      // 'Z'여도 일단 push
      newArr.push(arr[i]);
      if(arr[i] === 'Z'){
          // 'Z'와 그 앞의 숫자를 꺼내기 위해 두번 pop()한다.
          newArr.pop();
          newArr.pop();
      }
  }
  newArr.forEach(item=>{
      answer += Number(item)
  });
  return answer;
}

console.log(solution('1 2 Z 3'));