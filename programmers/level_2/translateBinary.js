/**
 * 이진 변환 반복하기
 * @param {string} s
 * @return {number[]}
 * 0과 1로 이루어진 어떤 문자열 x에 대한 이진 변환을 다음과 같이 정의합니다.
 * 1. x의 모든 0을 제거합니다.
 * 2. x의 길이를 c라고 하면, x를 "c를 2진법으로 표현한 문자열"로 바꿉니다.
 * 예를 들어, x = "0111010"이라면, x에 이진 변환을 가하면 x = "0111010" -> "1111" -> "100" 이 됩니다.
 * 0과 1로 이루어진 문자열 s가 매개변수로 주어집니다. s가 "1"이 될 때까지 계속해서 s에 이진 변환을 가했을 때,
 * 이진 변환의 횟수와 변환 과정에서 제거된 모든 0의 개수를 각각 배열에 담아 return 하도록 solution 함수를 완성해주세요.
 * [제한조건]
 * s의 길이는 1 이상 150,000 이하입니다.
 * s에는 '1'이 최소 하나 이상 포함되어 있습니다.
 */

function solution(s) {
  let changedCnt = 0;
  let removedCnt = 0;
  let tmp = 0;
  const translate = (str) => {
    if (str === "1") return;
    tmp = str.length;
    str = str.replaceAll("0", "");
    removedCnt += tmp - str.length;
    s = str;
    changedCnt++;
    translate((str.length * 1).toString(2));
  };
  translate(s);
  return [changedCnt, removedCnt];
}

function solution1(s) {
  let changedCnt = 0;
  let removedCnt = 0;
  while (s !== "1") {
    changedCnt++;
    let zero = 0;
    for (let i of s) {
      if (i === "0") zero++;
    }
    removedCnt += zero;
    s = (s.length - zero).toString(2);
  }
  return [changedCnt, removedCnt];
}

console.log(solution1("110010101001"));
