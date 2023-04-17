/**
 * [삽입정렬]
 * @param {number[]} arr
 * @returns {number[]}
 * N개의 숫자가 입력되면 오름차순으로 정렬하여 출력하는 프로그램을 작성하세요.
 * 정렬하는 방법은 삽입정렬입니다.
 * 1<=N<=100 입니다.
 */

// j는 i-1~0까지 돌고. i앞의 값들을 다 탐색함
// tmp 변수엔 arr[i]값을 임시 저장
// 비교해서 값 변경.
function solution(arr) {
	for(let i = 0; i < arr.length; i++){
		let tmp = arr[i], j;
		for(j=i-1; j >= 0; j--){
			if(arr[j] > tmp) arr[j+1]=arr[j];
			else break;
		}
	arr[j+1] =tmp;
	}
	return arr;
}

console.log(solution([11,7,5,6,10,9]));