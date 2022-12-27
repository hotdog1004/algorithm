/**
 * OX퀴즈
 * @param {Array} quiz 문자열 배열
 * @returns {string} O or X
 * ‘X [연산자] Y = Z‘의 형태로 들어있는 문자열 배열을 가지고
 * 수식이 옳다면 O를 틀리다면 X를 순서대로 담은 배열을 return
 * 제한사항
 * 연산기호와 숫자 사이에는 항상 하나의 공백이 존재(음수의 경우 공백 x)
 * X,Y,Z는 0-9까지의 숫자로 이루어진 정수이며 음수가 될 수도 있다.
 * [연산자] +와 - 중 하나
 */

function solution(quiz) {
  let answer = [];
  quiz.forEach((str) => {
    answer.push(getResult(str));
  });
  return answer;
}

function getResult(quizStr) {
  const quizArr = quizStr.split(' ');
  let result = Number(quizArr[0]) + Number(quizArr[2]);
  if (quizArr[1] === '-') result = Number(quizArr[0]) - Number(quizArr[2]);
  return result === Number(quizArr[4]) ? 'O' : 'X';
}

console.log(solution(['3 - 4 = -3', '5 + 6 = 11']));
