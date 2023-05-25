/**
 * 비밀지도(2018 KAKAO BLIND RECRUITMENT)
 * @param {number} n
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {string[]} 비밀지도를 해독해서 만든 문자열배열('#'과 공백으로 구성)
 * 네오는 평소 프로도가 비상금을 숨겨놓는 장소를 알려줄 비밀지도를 손에 넣었다. 그런데 이 비밀지도는 숫자로 암호화되어 있어 위치를 확인하기 위해서는 암호를 해독해야한다.
 * 다행히 지도 암호를 해독할 방법을 적어놓은 메모도 함께 발견했다.
 * 1. 지도는 한 변의 길이가 n인 정사각형 배열 형태로, 각 칸은 "공백"(" ") 또는 "벽"("#") 두 종류로 이루어져 있다.
 * 2. 전체 지도는 두 장의 지도를 겹쳐서 얻을 수 있다. 각각 "지도 1"과 "지도 2"라고 하자. 지도 1 또는 지도 2 중 어느 하나라도 벽인 부분은 전체 지도에서도 벽이다.
 *    지도 1과 지도 2에서 모두 공백인 부분은 전체 지도에서도 공백이다.
 * 3. "지도 1"과 "지도 2"는 각각 정수 배열로 암호화되어 있다.
 * 4. 암호화된 배열은 지도의 각 가로줄에서 벽 부분을 1, 공백 부분을 0으로 부호화했을 때 얻어지는 이진수에 해당하는 값의 배열이다.
 * 네오가 프로도의 비상금을 손에 넣을 수 있도록, 비밀지도의 암호를 해독하는 작업을 도와줄 프로그램을 작성하라.
 * [입력 형식]
 * 입력으로 지도의 한 변 크기 n 과 2개의 정수 배열 arr1, arr2가 들어온다.
 * 1 ≦ n ≦ 16
 * arr1, arr2는 길이 n인 정수 배열로 주어진다.
 * 정수 배열의 각 원소 x를 이진수로 변환했을 때의 길이는 n 이하이다. 즉, 0 ≦ x ≦ 2n - 1을 만족한다.
 */

function solution(n, arr1, arr2) {
  let answer = new Array(n);
  // 10진수 -> 2진수로 변환해서
  // 반복문 돌려서 1이면 true 0이면 패스! (arr1,2 둘다 해줄것)
  // 완성됐으면...그걸로 다시 한번 반복문 돌려서 문자열 만들고 answer 배열에 넣기
  const getDecryption = (binary1, binary2) => {
    let decryption = "";
    for (let i = 0; i < n; i++) {
      if (binary1[i] === "1" || binary2[i] === "1") {
        decryption += "#";
      } else {
        decryption += " ";
      }
    }
    return decryption;
  };

  for (let i = 0; i < n; i++) {
    let binary1 = arr1[i].toString(2);
    let binary2 = arr2[i].toString(2);
    if (binary1.length < n) binary1 = "0".repeat(n - binary1.length) + binary1;
    if (binary2.length < n) binary2 = "0".repeat(n - binary2.length) + binary2;

    let decryption = getDecryption(binary1, binary2);
    answer[i] = decryption;
  }

  return answer;
}

function otherSolution(n, arr1, arr2) {
  return arr1.map((a, i) =>
    (a | arr2[i])
      .toString(2)
      .padStart(n, 0)
      .replace(/0/g, " ")
      .replace(/1/g, "#")
  );
}

const n = 5;
const arr1 = [9, 20, 28, 18, 11];
const arr2 = [30, 1, 21, 17, 28];
// 출력 ["#####","# # #", "### #", "# ##", "#####"]
console.log(otherSolution(n, arr1, arr2));
