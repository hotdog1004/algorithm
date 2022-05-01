package programmers;

import java.util.Arrays;

// 22.04.20
// x만큼 간격이 있는 n개의 숫자 구하기 
// https://programmers.co.kr/learn/courses/30/lessons/12954
public class IncreaseNum {
	    public long[] solution(int x, int n) {
	        long[] answer = new long[n];
	        for(int i = 1; i <= n; i++){
	            long num = 0;
	            num = (long) x * i;
	            answer[i-1] = num;
	        }
	        return answer; 
	    }
	
	public static void main(String[] args) {
		IncreaseNum inum = new IncreaseNum();
		// 아래는 테스트로 출력해 보기 위한 코드입니다.
		System.out.println(Arrays.toString(inum.solution(2, 5)));
	}
}
