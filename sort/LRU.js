/**
 * Least Recently Used(카카오 캐시 문제 변형)
 * @param {number} size 캐시의 크기 size
 * @param {number[]} arr 처리순으로 주어진 작업번호
 * @returns {number[]} 가장 최근 사용된 작업 순으로 정렬된 배열
 * LRU 알고리즘은 Least Recently Used 의 약자로 직역하자면 가장 최근에 사용되지 않은 것 정도의 의미를 가지고 있습니다.
 * 캐시에서 작업을 제거할 때 가장 오랫동안 사용하지 않은 것을 제거하겠다는 알고리즘입니다
 * 1) Cache Miss : 해야할 작업이 캐시에 없는 상태로 위 상태에서 만약 새로운 작업인 5번 작업을 CPU가 사용한다면
 * Cache miss가 되고 모든 작업이 뒤로 밀리고 5번작업은 캐시의 맨 앞에 위치합니다.
 * 2) Cache Hit : 해야할 작업이 캐시에 있는 상태로 위 상태에서 만약 3번 작업을 CPU가 사용한다면
 * Cache Hit가 되고, 63번 앞에 있는 5, 2번 작업은 한 칸 뒤로 밀리고, 3번이 맨 앞으로 위치하게 됩니다.
 * 캐시의 크기가 주어지고, 캐시가 비어있는 상태에서 N개의 작업을 CPU가 차례로 처리한다면 N개의 작업을 처리한 후
 * 캐시메모리의 상태를 가장 최근 사용된 작업부터 차례대로 출력하는 프로그램을 작성하세요.
 */

// 내 풀이
function solution(size, arr) {
  let answer = [];
  let idx = 0;
  arr.forEach((num) => {
    idx = answer.indexOf(num);
    if (idx !== -1) {
      answer.unshift(...answer.splice(idx, 1));
    } else {
      if (answer.length >= 5) {
        answer.pop();
      }
      answer.unshift(num);
    }
  });
  return answer;
}

// 강의 풀이
// 1. 삽입정렬 알고리즘을 활용한 방법
// size크기만큼의 answer 배열을 생성한 후 0으로 초기화한다.
// miss 일땐 i-1을 i에 땡겨서 넣고, hit일 땐 hit 지점부터 answer[1]까지 땡겨서 넣는다.
// answer[0]엔 현재 값인 num를 세팅
function solution(size, arr) {
  let answer = Array.from({ length: size }).fill(0);

  arr.forEach((num) => {
    let pos = -1;
    // hit인지 miss인지 체크
    for (let i = 0; i < size; i++) {
      // pos에 값이 있으면 hit. -1이면 miss
      if (num === answer[i]) pos = i;
    }

    // miss일 떄
    if (pos === -1) {
      for (let i = size - 1; i >= 1; i--) {
        // answer의 값들을 하나씩 뒤로 땡겨줌
        answer[i] = answer[i - 1];
      }
    } else {
      // hit일 떼: hit된 지점부터 처리해야함
      for (let i = pos; i >= 1; i--) {
        answer[i] = answer[i - 1];
      }
    }
    // 맨 앞에는 현재 num을 넣음
    answer[0] = num;
  });
  return answer;
}

console.log(solution(5, [1, 2, 3, 2, 6, 2, 3, 6, 7]));
