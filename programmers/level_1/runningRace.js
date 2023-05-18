/**
 * 달리기 경주
 * @param {string[]} players 선수들의 이름이 1등부터 현재 등수 순서대로 담긴 문자열 배열
 * @param {string[]} callings 해설진이 부른 이름을 담은 문자열 배열
 * @returns {string[]} 경주가 끝났을 때 선수들의 이름을 1등부터 등수 순서대로 담은 배열
 * 얀에서는 매년 달리기 경주가 열립니다. 해설진들은 선수들이 자기 바로 앞의 선수를 추월할 때 추월한 선수의 이름을 부릅니다. 
 * 예를 들어 1등부터 3등까지 "mumu", "soe", "poe" 선수들이 순서대로 달리고 있을 때, 
 * 해설진이 "soe"선수를 불렀다면 2등인 "soe" 선수가 1등인 "mumu" 선수를 추월했다는 것입니다. 즉 "soe" 선수가 1등, "mumu" 선수가 2등으로 바뀝니다.
 * 선수들의 이름이 1등부터 현재 등수 순서대로 담긴 문자열 배열 players와 해설진이 부른 이름을 담은 문자열 배열 callings가 매개변수로 주어질 때,
 * 경주가 끝났을 때 선수들의 이름을 1등부터 등수 순서대로 배열에 담아 return 하는 solution 함수를 완성해주세요.
 * 5 ≤ players의 길이 ≤ 50,000
 * players에는 중복된 값이 들어가 있지 않습니다.
 * 3 ≤ players[i]의 길이 ≤ 10
 * 2 ≤ callings의 길이 ≤ 1,000,000
 * callings는 players의 원소들로만 이루어져 있습니다.
 * 경주 진행중 1등인 선수의 이름은 불리지 않습니다.
 */

function solution(players, callings) {
	let playHistory = new Map();

	// 맵으로 선수 목록 만들기
	players.forEach((player, idx)=>{
		playHistory.set(player,idx);
	})

	callings.forEach(calling=>{
		const idx = playHistory.get(calling);

		// 앞에 있는 선수 찾기
		const prevPlayer = players[idx-1];

		// 맵에 새로 세팅(+,-)
		// 앞으로 보내기
		playHistory.set(calling, playHistory.get(calling)-1); 
		// 뒤로 보내기
		playHistory.set(prevPlayer, playHistory.get(prevPlayer)+1); 
		
		// players 배열 수정
		[players[idx], players[idx-1]]=[players[idx-1], players[idx]]
	})

	return players;
}