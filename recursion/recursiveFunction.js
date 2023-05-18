/**
 * 재귀함수
 * @param {number} n
 * @return {}
 * 자연수 N이 입력되면 재귀함수를 이용하여 1부터 N까지를 출력하는 프로그램을 작성하세요.
 */

// 재귀함수와 스택프레임을 이해해야한다!
// 스택 : 반환주소와 함수 매개변수, 지역변수 등 함수 호출과 관련된 데이터를 위한 메모리 영역
// L이 0일 때 return 되면 스택에서 pop() 이 발생하여 최상단에 위치한 스택프레임이 사라진다.
function solution(n) {
  const DFS = (L) => {
    if (L === 0) return;
    else {
      DFS(L - 1);
      console.log(L);
    }
  };
  DFS(n);
}

solution(3);
