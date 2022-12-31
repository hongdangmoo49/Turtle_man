import java.util.*;
class Solution {
    public int[] solution(int N, int[] stages) {
        int[] answer = new int[N];
        double[][] per = new double[N][3];
        
        //per[i][0]에 각각의 스테이지 넘버 넣기
        for(int i = 0; i < N; i++) {
            per[i][0] = i+1;
        }
        
        //per[i][2]에 각 스테이지에 도달했으나 클리어하지 못한 플레이어의 수 넣기
        for(int i = 0; i < stages.length; i++) {
            if(stages[i] < N+1) {
                per[stages[i] - 1][2]++;
            }
        }
        
        double stage = stages.length; // stage는 스테이지에 도달한 플레이어의 수
        
        //per[i][1]에 각 스테이지의 실패율 넣어주기
        for(int i = 0; i < N; i++) {
            per[i][1] = per[i][2]/stage;
            stage -= per[i][2];
            if(stage == 0)
                break; // 중요
        }
        
        // 실패율을 기준으로 내림차순 정렬
        Arrays.sort(per, (a, b) -> Double.compare(b[1], a[1]));
        
        // per[i][1]을 기준으로 내림차순 정렬된 per배열의 per[i][0]값을 차례로 answer에 넣기
        for(int i = 0; i < per.length; i++) {
            answer[i] = (int)per[i][0];
        }
        return answer;
    }
}