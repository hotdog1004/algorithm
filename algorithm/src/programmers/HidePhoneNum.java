package programmers;

// 22.04.21 
// 핸드폰 번호 가리기
// https://programmers.co.kr/learn/courses/30/lessons/12948
// 전화번호 뒷 4자리를 제외한 나머지 숫자를 "*"으로 가린 문자열을 리턴
public class HidePhoneNum {
	public String solution(String phone_number) {
     String answer = "";
     int idx = phone_number.length()-4;
     for(int i = 0; i < idx; i++) {
     	answer += "*";
		}
     String keepNum = phone_number.substring(idx);
     answer = answer.concat(keepNum);
     return answer;
 }
	
	// toCharArray() 이용한 풀이 
	// toCharArray() : String을 char[]로 변경해줌
	public String solution1(String phone_number) {
		char[] ch = phone_number.toCharArray();
		for(int i = 0; i < ch.length - 4; i ++){
		    ch[i] = '*';
		}
	    return String.valueOf(ch);
	}
	
	public static void main(String[] args) {
		HidePhoneNum hide = new HidePhoneNum();
		// 아래는 테스트로 출력해 보기 위한 코드입니다.
		System.out.println("01033334444 : " +hide.solution("01033334444"));
	}
}

