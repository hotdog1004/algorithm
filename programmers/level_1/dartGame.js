/**
 * 다트게임 
 * @param {string} dartResult
 * @returns {number}
 * 다트 게임의 점수 계산 로직은 아래와 같다
 * 1. 다트 게임은 총 3번의 기회로 구성된다.
 * 2. 각 기회마다 얻을 수 있는 점수는 0점에서 10점까지이다.
 * 3. 점수와 함께 Single(S), Double(D), Triple(T) 영역이 존재하고 각 영역 당첨 시 점수에서 1제곱, 2제곱, 3제곱 (점수¹ , 점수² , 점수³ )으로 계산된다.
 * 4. 옵션으로 스타상(*) , 아차상(#)이 존재하며 스타상(*) 당첨 시 해당 점수와 바로 전에 얻은 점수를 각 2배로 만든다. 아차상(#) 당첨 시 해당 점수는 마이너스된다.
 * 5. 스타상(*)은 첫 번째 기회에서도 나올 수 있다. 이 경우 첫 번째 스타상(*)의 점수만 2배가 된다.
 * 6. 스타상(*)의 효과는 다른 스타상(*)의 효과와 중첩될 수 있다. 이 경우 중첩된 스타상(*) 점수는 4배가 된다. 
 * 7. 스타상(*)의 효과는 아차상(#)의 효과와 중첩될 수 있다. 이 경우 중첩된 아차상(#)의 점수는 -2배가 된다. 
 * 8. Single(S), Double(D), Triple(T)은 점수마다 하나씩 존재한다.
 * 9. 스타상(*), 아차상(#)은 점수마다 둘 중 하나만 존재할 수 있으며, 존재하지 않을 수도 있다.
 * 10. 0~10의 정수와 문자 S, D, T, *, #로 구성된 문자열이 입력될 시 총점수를 반환하는 함수를 작성하라.
*/

function solution(dartResult){
  const scores = ['S', 'D', 'T'];
  let sum = []
  const arr = dartResult.match(/\d+[A-Z*#]+/g);
  let score = 0;

  // 상 두개 받았는지 체크
  const isTwoAwards = (str)=>{
      const len = str.replaceAll(/[*#]/g, '').length;
      if(len === str.length-2) return true;
      return false
  }

  arr.forEach((str,index) => {
      const idx = str.search(/[A-Z]+/g)
      score = Math.pow(Number(str.substr(0,idx)),scores.indexOf(str[idx])+1);
      if(str.includes('*')){ // 스타상일 때
          score *= 2;
          // 첫번째 기회가 아니면 첫번째 점수*2해주기
          if(index > 0) sum[index-1] *= 2;;
      }else if(str.includes('#')) score *= (-1); // 아차상일 때
      sum.push(score)
  });

  return sum.reduce((prev, curr) =>{
      return prev+curr;
  },0)
}

console.log(solution('1S*2T*3S'));