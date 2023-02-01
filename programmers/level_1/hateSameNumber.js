/**
 * 같은 숫자는 싫어
 * @param {Array} arr
 * @returns {Array} 
 * 배열 arr에서 연속적으로 나타나는 숫자는 하나만 남기고 전부 제거한다.
 * 배열의 맨 앞에 최대공약수를, 그 다음엔 최소공배수를 넣어서 리턴한다.
 * 단, 제거된 후 남은 수들을 반환할 때는 배열 arr의 원소들의 순서를 유지해야한다.
 * 배열 arr의 크기 : 1,000,000 이하의 자연수
 * 배열 arr의 원소의 크기 : 0보다 크거나 같고 9보다 작거나 같은 정수
 */

function solution(arr)
{
    let answer = [];

    arr.forEach((num, idx)=>{
        if(idx === 0) answer.push(num);
        else if(num !== arr[idx-1]) answer.push(num);
    })
    return answer;
}

console.log(solution([1,1,3,3,0,1,1]));