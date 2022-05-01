package programmers;

import java.util.ArrayList;

// 22.04.24 
// 하샤드 수인지 아닌지 검사하기
// https://programmers.co.kr/learn/courses/30/lessons/12947
// 하샤드 수 : 수의 각 자릿수 숫자의 합으로 그 수가 나눠지는 양의 정수 

public class IsHarshadNum {
	public boolean solution(int num) {
        boolean answer = false;
        int orgNum = num;
		ArrayList<Integer> numList = new ArrayList<Integer>();
		
		while(num > 0) {
			// num % 10 은 num mod 10 즉 나머지 구하기임 
			numList.add(num % 10); // 12 % 10 -> 나머지는 2 
			num /= 10; // 12  num을 10으로 나눈 후 다시 num에 대입  
		}
		int sumNum = 0;
		for(int i = 0; i < numList.size(); i++) {
			sumNum += numList.get(i);
		}
		if(orgNum % sumNum == 0) {
			answer = true;
		}
        return answer;
    }
	
	// split을 이용한 풀이
	public boolean solution1(int num){
		// int를 String 으로 형변환한 후 "" 기준으로 split
		// cf) String[] split(String regex)
	    String[] tmp = String.valueOf(num).split("");
	    for(int i = 0; i < tmp.length; i++) {
	    	System.out.println(tmp[i]);
	    }
	    int sum = 0;
	    for (String s : tmp) {
	        sum += Integer.parseInt(s);
	    }

	    if (num % sum == 0) {
	            return true;
	    } else {
	      return false;
	    }
    }
	
	
	public static void main(String[] args) {
		IsHarshadNum ih = new IsHarshadNum();
		// 아래는 테스트로 출력해 보기 위한 코드입니다.
		System.out.println("11 : " +ih.solution(11));
		System.out.println("10 : " +ih.solution(10));
		
	}
	
}
