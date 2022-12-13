class Solution {
    public int[] solution(int[] lottos, int[] win_nums) {
        int cnt = 0; // win_nums 중 맞은 수
        int zeroCnt = 0; // 내 번호 중 0의 갯수
        
        for (int lotto : lottos) {
            if (lotto == 0) {
                zeroCnt++;
                continue;
            }
            for (int win_num : win_nums) {
                if (lotto == win_num) {
                    cnt++;
                    break;
                }
            }
        }
        
        int maxTotal = zeroCnt + cnt; // 최대로 맞춘 갯수
        
        if (maxTotal == 0) { // 맞힌 갯수가 0이면 1을 넣는다.
            maxTotal = 1;
        }
        if (cnt == 0) { // 맞힌 갯수가 0개면 1을 넣는다.
            cnt = 1;
        }
        int[] answer = {7 - maxTotal, 7 - cnt};
        // 7에서 0의 갯수와 일치하는 갯수를 더한 수를 빼면 등수가 나옴
        // 7에서 일치하는 번호의 갯수를 빼주면 등수가 나옴
        return answer;
    }
}