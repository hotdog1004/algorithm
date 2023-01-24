/**
 * 서울에서 김서방 찾기
 * @param {Array} seoul String형 배열 seoul
 * @returns {number} 
 * "Kim"의 위치 x를 찾아, "김서방은 x에 있다"는 String을 반환
 * seoul은 길이 1 이상, 1000 이하인 배열
 * seoul의 원소는 길이 1 이상, 20 이하인 문자열
 * "Kim"은 반드시 seoul 안에 포함됨
 */

function solution(seoul) {
  const answer = seoul.findIndex((firstName)=>firstName === 'Kim');
  return `김서방은 ${answer}에 있다`;
}

console.log(solution(['Jane', 'Kim']	));