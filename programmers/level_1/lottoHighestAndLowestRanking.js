/**
 * 로또의 최고 순위와 최저 순위
 * @param {Array} lottos 
 * @param {Array} win_nums
 * @returns {Array} 
 * 민우가 구매한 로또 번호를 담은 배열 lottos, 당첨 번호를 담은 배열 win_nums가 매개변수로 주어집니다. 
 * 이때, 당첨 가능한 최고 순위와 최저 순위를 차례대로 배열에 담아서 return 하도록 solution 함수를 완성해주세요.
 * lottos는 길이 6인 정수 배열입니다.
 * lottos의 모든 원소는 0 이상 45 이하인 정수입니다.
 * 0은 알아볼 수 없는 숫자를 의미합니다. 0을 제외한 다른 숫자들은 lottos에 2개 이상 담겨있지 않습니다. lottos의 원소들은 정렬되어 있지 않을 수도 있습니다.
 * win_nums은 길이 6인 정수 배열입니다.
 * win_nums의 모든 원소는 1 이상 45 이하인 정수입니다.
 * win_nums에는 같은 숫자가 2개 이상 담겨있지 않습니다. win_nums의 원소들은 정렬되어 있지 않을 수도 있습니다.
 */

function solution(lottos, win_nums) {
  let win = 0;
  let zero = 0;
  lottos.forEach(lotto => {
    if(win_nums.includes(lotto)) win++;
    if(lotto === 0) zero++;
  })

  let highest = 0;
  let lowest = 0;

  lowest = win_nums.length - win + (win === 0 ? 0 : 1);
  highest = lowest - zero + (zero === 6 ? 1 : 0);
  return [highest, lowest]
}

const lottos = [45, 4, 35, 20, 3, 9]	
const win_nums = 	[45, 4, 35, 20, 3, 9]	
console.log(solution(lottos, win_nums));