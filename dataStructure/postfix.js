/**
 * [Stack]
 * 후위식 연산(postfix)
 * @param {string} str
 * @returns {number}
 * 후위연산식이 주어지면 연산한 결과를 출력하는 프로그램을 작성하세요.
 * 만약 3*(5+2)-9 을 후위연산식으로 표현하면 352+*9- 로 표현되며 그 결과는 12입니다
 * 연산식의 길이는 50을 넘지 않습니다.
 * 식은 1~9의 숫자와 +, -, *, / 연산자로만 이루어집니다.
 */


/*
  풀이 방식 
  stack 배열을 만들어서 숫자면 push를, 연산자면 pop을 두번하여 연산자에 맞는 처리를 해준다.
  나는 숫자를 체크하기위해 정규식을 사용했는데, isNaN 함수를 사용하면 간단하게 숫자 체크를 할 수 있다.
  또 문자열은 굳이 split('') 을 사용하여 배열로 만들지 않아도 for of 반복문과 함께 사용하면 간단하게 처리할 수 있다.
*/
function solution(str) {
  const stack = [];
  const reg = /\d/;
  let rt = 0;
  let lt = 0;
  let result = 0;

  const calc = (lt, rt, operator)=>{
    if(operator === '+') return lt+rt;
    else if(operator === '-') return lt-rt;
    else if(operator === '*') return lt*rt;
    else return lt/rt;
  }
  str.split('').forEach(val=>{
    if(reg.test(val)){
      stack.push(Number(val));
    }else{
      // 숫자가 아니면 꺼내서 처리
      rt = stack.pop();
      lt = stack.pop();
      result = calc(lt, rt, val);
      stack.push(result);
    }
  })
  return stack.pop();
}

function otherSolution(str) {
  const stack = [];
  for(let x of str){
    if(!isNaN(x)) stack.push(Number(x));
    else{
      let rt = stack.pop();
      let lt = stack.pop();
      if(x === '+') stack.push(lt+rt);
      else if(x === '-') stack.push(lt-rt);
      else if(x === '*') stack.push(lt*rt);
      else if(x === '/') stack.push(lt/rt);
    }
  }
  return stack.pop();
}

console.log(solution('352+*9-'));