/**
 * 삼총사
 * @param {Array} number
 * @returns {number} 
 * 한국중학교에 다니는 학생들은 각자 정수 번호를 갖고 있습니다. 
 * 이 학교 학생 3명의 정수 번호를 더했을 때 0이 되면 3명의 학생은 삼총사라고 합니다. 
 * 예를 들어, 5명의 학생이 있고, 각각의 정수 번호가 순서대로 -2, 3, 0, 2, -5일 때, 
 * 첫 번째, 세 번째, 네 번째 학생의 정수 번호를 더하면 0이므로 세 학생은 삼총사입니다. 
 * 또한, 두 번째, 네 번째, 다섯 번째 학생의 정수 번호를 더해도 0이므로 세 학생도 삼총사입니다. 
 * 따라서 이 경우 한국중학교에서는 두 가지 방법으로 삼총사를 만들 수 있습니다.
 * 한국중학교 학생들의 번호를 나타내는 정수 배열 number가 매개변수로 주어질 때, 
 * 학생들 중 삼총사를 만들 수 있는 방법의 수를 return 하도록 함수를완성하세요.
 * 3 <= number의 길이 <= 13
 * -1,000 <= number의 각 원소 <= 1,000
 * 서로 다른 학생의 정수 번호가 같을 수 있음 
 */

function solution(number) {
  // [반복문으로 풀기]
  // 학생 세명의 정수 번호를 더했을 때 0이 되는 경우를 찾는거라 반복문 세번 돌려서 풀 수 있음
  let cnt = 0;
  for(let i = 0; i < number.length; i++){
      for(let j = i+1; j < number.length; j++){
          for(let k = j+1; k < number.length; k++){
              if(number[i]+number[j]+number[k] === 0) cnt++
          }
      }
  }
  return cnt;
}

// [재귀 함수로 풀기]
// 주어진 배열이 길어지면 반복문으로 푸는건 비효율적임
function solution1(number) {
  // 재귀 함수 만들기 
	const combination = (current, start) => {
		if(current.length === 3){
			// 학생 3명이니까 3으로 체크
			cnt += current.reduce((acc, cur)=> acc+cur, 0) === 0 ? 1 : 0;
			// reduce함수로 값을 더해주고 그 값이 0이면 1을 0이 아니면 0을 리턴			
			// 하여 cnt에 누적해준다.	
			return;
		}
		for(let i = start; i < number.length; i++){
			combination([...current, number[i]], i+1);
				// current 배열을 펼친 후 number[i]의 값을 붙여서 배열을 만들어줌 
				// 반복될 때마다 number[i]가 추가됨		
		}
	}
	combination([], 0); // 함수 호출
	
	return cnt;
}

console.log(solution([-2, 3, 0, 2, -5]));