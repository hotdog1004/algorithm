package programmers;
// 22.05.07
// 서울에서 김서방 찾기
// https://programmers.co.kr/learn/courses/30/lessons/12919
/* String형 배열 seoul의 element중 "Kim"의 위치 x를 찾아, "김서방은 x에 있다"는 String을 반환하는 함수, solution을 완성하세요. 
 * seoul에 "Kim"은 오직 한 번만 나타나며 잘못된 값이 입력되는 경우는 없습니다.
 */

public class FindKimInSeoul {
	public String solution(String[] seoul) {
        String answer = "";
        int num = 0;
        for(int i = 0; i < seoul.length; i++) {
        	if(seoul[i].equals("Kim")) {
        		num = i;
        	}
        }
        answer = "김서방은 " + num + "에 있다";
        return answer;
    }
	// while 반복문 사용
	public String solution2(String[] seoul) {
        String answer = "";
        int num = 0;        
        while(num <= seoul.length ) {
        	if(seoul[num].equals("Kim")) {
        		break;
        	}else {
        		num++;
        	}
        }
        answer = "김서방은 " + num + "에 있다";
        return answer;
    }
	
	public static void main(String[] args) {
		FindKimInSeoul fk = new FindKimInSeoul();
		// 아래는 테스트로 출력해 보기 위한 코드입니다.
		String[] seoul= {"java", "Park", "Lee", "Kim"};
		System.out.println(fk.solution2(seoul));
	}
	
}
