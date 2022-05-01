package programmers;

import java.util.Arrays;

// 22.05.01
// 콜라츠 추측
// https://programmers.co.kr/learn/courses/30/lessons/12943
/*
 * 1937년 Collatz란 사람에 의해 제기된 이 추측은, 주어진 수가 1이 될때까지 다음 작업을 반복하면, 
 * 모든 수를 1로 만들 수 있다는 추측입니다. 작업은 다음과 같습니다.
 * 1-1. 입력된 수가 짝수라면 2로 나눕니다. 
 * 1-2. 입력된 수가 홀수라면 3을 곱하고 1을 더합니다.
 * 2. 결과로 나온 수에 같은 작업을 1이 될 때까지 반복합니다.
 * 위 작업을 몇 번이나 반복해야하는지 반환하는 함수, solution을 완성해 주세요. 
 * 단, 작업을 500번을 반복해도 1이 되지 않는다면 –1을 반환해 주세요.
 */

public class ConjectureCollatz {
	public int solution(int num) {
        int answer = 0;
        // 매개변수 타입은 int지만 곱하고 더하고 나누는 로직을 반복하다보면 
        // int 타입의 범위를 벗어날 수 있게된다.
        // cf) int의 표현 범위 : -2,147,483,648 ~ 2,147,483,647
        // 자바는 오버플로우가 발생할 때 예외를 발생시키지않는다.
        // 오버플로우 문제 방지 : long으로 형변환하여 사용
        
        long i = (long)num;
        
        while(i!= 1) {
        	
        	if(i % 2 == 0) { // 짝수
        		i /= 2;
        	}else { // 홀수
        		i *=3;
        		i += 1;
        	}
        	answer++;
        	if(answer == 500) {
        		answer = -1;
        		break;
        	}
        }
        return answer;
    }
	
	public static void main(String[] args) {
		ConjectureCollatz cc = new ConjectureCollatz();
		// 아래는 테스트로 출력해 보기 위한 코드입니다.
		System.out.println(cc.solution(626331));
	}
	
}
