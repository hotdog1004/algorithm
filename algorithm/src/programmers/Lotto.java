package programmers;

// 22.04.11
// 로또의 최고 순위와 최저 순위
// https://programmers.co.kr/learn/courses/30/lessons/77484

public class Lotto {
	public int[] solution(int[] lottos, int[] win_nums) {
        int[] answer = {0,0};
        
        int chkZero = 0; // 0의 개수 
        int chkWin = 0;  // 맞은 숫자 개수 
        for(int i = 0; i < lottos.length; i++){
            if(lottos[i] == 0){
                // 0일 때 갯수 체크
                chkZero++;
            }else{
                for(int j = 0; j < win_nums.length; j++){
                    if(win_nums[j]  == lottos[i]){
                        // 맞은 번호 갯수 체크
                        chkWin++;
                    }
                }
            }
        }
        
        // 최고순위 구하기
        // 비교해서 맞은 숫자 + 0 갯수 -> 최대
        answer[0] = getRank(chkWin+chkZero);
        
        // 최저순위 구하기
        // 비교해서맞은숫자만 -> 최소
        answer[1] = getRank(chkWin);

        return answer;
    }
	
	// 당첨 순위 찾아주는 메서드
	public int getRank(int num) {
		int res = 0;
		switch (num) {
		case 6:res = 1;
			break;
		case 5:res = 2;
			break;
		case 4:res = 3;
			break;	
		case 3:res = 4;
			break;
		case 2:res = 5;
			break;
		default:res = 6;
			break;
		}
		return res;
	}
	
	public static void main(String[] args) {
		Lotto lotto = new Lotto();
		int[] lottos = {44, 1, 0, 0, 31, 25};
		int[] win_nums = {31, 10, 45, 1, 6, 19};
		// 아래는 테스트로 출력해 보기 위한 코드입니다.
		int[] answer = lotto.solution(lottos, win_nums);
		for(int i = 0; i < answer.length; i++) {
			System.out.println(answer[i]);
        }
	}
}
