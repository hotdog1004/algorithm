/**
 * 직각삼각형 출력하기
 * "*"의 높이와 너비를 1이라고 했을 때, "*"을 이용해 직각 이등변 삼각형을 그리려고한다.
 * 정수 n 이 주어지면 높이와 너비가 n 인 직각 이등변 삼각형을 출력
 * 1 <= n <= 10
 */

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    const num = Number(input[0]);
    let resultStr = '';
    for(let i = 0; i < num; i++){
        for(let j = 0; j <= i; j++){
            resultStr += '*';
        }
        resultStr += '\n';
    }
    console.log(resultStr);
});