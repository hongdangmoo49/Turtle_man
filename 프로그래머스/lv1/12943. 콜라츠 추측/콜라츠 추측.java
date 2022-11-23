class Solution {
    public long solution(long num) {
        long answer = 0;
        long cnt = 0;
        for (int i = 0; i < 500; i++) {
            if(num == 1){
                answer = 1;
            }else if (num % 2 ==0){
                num /= 2;
                cnt++;
                if(num == 1){
                    break;
                }
            } else if(num % 2 == 1) {
                num = (num*3)+1;
                cnt++;
                if(num==1){
                    break;
                }
            }
            if (cnt == 500) {
                cnt = -1;
            }
        }
        answer = cnt;
        System.out.println(cnt);
        return answer;
    }
}