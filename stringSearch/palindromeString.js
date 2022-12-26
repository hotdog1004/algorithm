function solution(s) {
  // 회문 문자열 : 앞으로 읽으나 뒤로 읽으나 같은 문자열. 우영우 같은거
  // return : 'YES' or 'NO'
  // 내 풀이
  /*
        s = s.toUpperCase();
        const reverseStr = [...s].reverse().join('')
        return s === reverseStr ? 'YES' : 'NO';
        */

  // 강의 풀이
  // 문자열을 반으로 나눈 만큼만 반복문 돌려서 직접 비교할 수 있다.
  // 반으로 나눴는데 소수점이 나오면 Math.floor() 를 사용해서 몫인 값의 인덱스만 사용하면됨
  let answer = 'YES';
  s = s.toLowerCase();
  const size = s.length;
  for (let i = 0; i < Math.floor(size / 2); i++) {
    if (s[i] !== s[size - i - 1]) return 'NO';
  }
  return answer;
}

console.log(solution('gooG'));
