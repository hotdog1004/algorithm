/**
 * 공원 산책
 * @param {string[]}
 * @param {string[]}
 * @returns {number[]}
 * 지나다니는 길을 'O', 장애물을 'X'로 나타낸 직사각형 격자 모양의 공원에서 로봇 강아지가 산책을 하려합니다. 
 * 산책은 로봇 강아지에 미리 입력된 명령에 따라 진행하며, 명령은 다음과 같은 형식으로 주어집니다. ["방향 거리", "방향 거리" … ]
 * 예를 들어 "E 5"는 로봇 강아지가 현재 위치에서 동쪽으로 5칸 이동했다는 의미입니다. 로봇 강아지는 명령을 수행하기 전에 다음 두 가지를 먼저 확인합니다.
 * 주어진 방향으로 이동할 때 공원을 벗어나는지 확인합니다. / 주어진 방향으로 이동 중 장애물을 만나는지 확인합니다.
 * 위 두 가지중 어느 하나라도 해당된다면, 로봇 강아지는 해당 명령을 무시하고 다음 명령을 수행합니다.
 * 공원의 가로 길이가 W, 세로 길이가 H라고 할 때, 공원의 좌측 상단의 좌표는 (0, 0), 우측 하단의 좌표는 (H - 1, W - 1) 입니다.
 * 공원을 나타내는 문자열 배열 park, 로봇 강아지가 수행할 명령이 담긴 문자열 배열 routes가 매개변수로 주어질 때, 로봇 강아지가 모든 명령을 수행 후 놓인 위치를 [세로 방향 좌표, 가로 방향 좌표] 순으로 배열에 담아 return 하도록 solution 함수를 완성해주세요.
 * 3 ≤ park의 길이 ≤ 50   /  3 ≤ park[i]의 길이 ≤ 50 /  park[i]는 다음 문자들로 이루어져 있으며 시작지점은 하나만 주어집니다. /  park는 직사각형 모양입니다.
 * 1 ≤ routes의 길이 ≤ 50   / routes의 각 원소는 로봇 강아지가 수행할 명령어를 나타냅니다. / 로봇 강아지는 routes의 첫 번째 원소부터 순서대로 명령을 수행합니다.
 * routes의 원소는 "op n"과 같은 구조로 이루어져 있으며, op는 이동할 방향, n은 이동할 칸의 수를 의미합니다.  / 1 ≤ n ≤ 9
 */

function solution(park, routes){
	// 공원의 가로 세로 길이 구하기
	const [maxRow, maxCol] = [park.length-1, park[0].length-1];
	// 시작지점 좌표 구하기('S'의 위치를 찾아라!)
	let row = col = 0;
	
	for(let i = 0; i < park.length; i++){
		if(park[i].search(/S/g) > -1){
			[row, col] = [i, park[i].indexOf('S')];
			break;		
		}
	}

	// 계산. 반복문을 사용하여 routes의 요소를 하나씩 확인.
	routes.forEach((position)=>{
		// 요소를 빈칸 기준으로 나눈다.
		// op : 방향 / n : 이동 거리 
		const [op, n] = position.split(' ');
		
		// 임시 좌표와 flag를 만듦
		let [tempRow, tempCol] = [row, col];
		let flag = true;

		// 구한 거리의 이동 수 만큼 반복
		for(let i = 0; i < Number(n); i++){
			// 동서쪽이면 행을 더하거나 뺴주고,
			// 남북쪽이면 열을 더하거나 빼준다.
			if(op === 'E') tempCol++;
			else if(op === 'W') tempCol--;
			else if(op === 'S') tempRow++;
			else if(op === 'N') tempRow--;

			// 행과 열이 공원을 벗어나는지, 장애물이 있는지 확인 
			if(tempRow > maxRow || tempRow < 0 || tempCol > maxCol || tempCol < 0 || park[tempRow][tempCol] === 'X'){
				flag = false;
				break;
			}
		}
		// for반복문을 통과했다면 이동에 성공한 것임 -> 임시좌표를 실제 좌표에 대입 
		if(flag) [row, col] = [tempRow, tempCol];
	});

  // 마지막 좌표 리턴 
  return [row, col];
}

// [2,1]
const park1 = ["SOO","OOO","OOO"]	;
const routes1 = ["E 2","S 2","W 1"]	;

// [0,1]
const park2 = ["SOO","OXX","OOO"]	;
const routes2 = ["E 2","S 2","W 1"]	;

// [0,0]
const park3 = ["OSO","OOO","OXO","OOO"]	;
const routes3 = ["E 2","S 3","W 1"]	;

console.log(solution(park1, routes1))