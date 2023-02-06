/**
 * 최소 직사각형
 * @param {Array} sizes 
 * @returns {number} 
 * 가장 긴 가로 길이와 세로 길이가 각각 80, 70이기 때문에 80(가로) x 70(세로) 크기의 
 * 지갑을 만들면 모든 명함들을 수납할 수 있습니다. 하지만 2번 명함을 가로로 눕혀 수납한다면 
 * 80(가로) x 50(세로) 크기의 지갑으로 모든 명함들을 수납할 수 있습니다. 
 * 이때의 지갑 크기는 4000(=80 x 50)입니다.
 * 모든 명함의 가로 길이와 세로 길이를 나타내는 2차원 배열 sizes가 매개변수로 주어집니다. 
 * 모든 명함을 수납할 수 있는 가장 작은 지갑을 만들 때, 지갑의 크기를 return 하도록 solution 함수를 완성해주세요
 * sizes의 길이는 1 이상 10,000 이하
 * w : 명함의 가로 길이 / h : 명함의 세로 길이
 * w와 h는 1 이상 1,000 이하인 자연수
 */

// 완전탐색 관련 문제라고 나와있어서 가로*세로 곱해서 일일이 비교하려고 했는데...
// 생각해보니 어떤 모서리는 가로가 될 수도, 세로가 될 수도 있음....
// 한 쪽이 가로면 다른 한 쪽은 세로가 되어야하니 애매함...고민을 계속하다가 힌트보고 풀었다..ㅜㅜ
// 힌트 : 각 가로세로의 값을 비교해서 큰 값은 가로게 두고, 작은 값은 전부 세로로 둔 다음에 각 최대값을 곱하면 구할 수 있음!
function solution(sizes) {
  let width = [];
  let height = [];
  
  sizes.map((arr, idx)=>{
      width[idx] = Math.max(...arr);
      height[idx] = Math.min(...arr); 
      
  })
  
  // map혹은 forEach로 풀 수 있음.
  // sizes.forEach(arr=>{
  //     width.push(Math.max(...arr));
  //     height.push(Math.min(...arr))
  // })
  
  return Math.max(...width)*Math.max(...height)
}

console.log(solution([[60, 50], [30, 70], [60, 30], [80, 40]]));