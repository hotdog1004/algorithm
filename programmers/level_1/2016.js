/**
 * 2016년
 * @param {number} a 
 * @param {number} b
 * @returns {string} 
 * 2016년 1월 1일은 금요일입니다. 2016년 a월 b일은 무슨 요일일까요? 
 * 두 수 a ,b를 입력받아 2016년 a월 b일이 무슨 요일인지 리턴하는 함수를 완성하세요
 * 요일의 이름은 일요일부터 토요일까지 각각 SUN,MON,TUE,WED,THU,FRI,SAT입니다.
 * 2016년 a월 b일은 실제로 있는 날입니다. 
 */

function solution(a, b) {
  const days = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  const date = new Date(2016, a-1, b);
  return days[date.getDay()];
}

console.log(solution(5,24));