class Solution {
    public long solution(int a, int b) {
        long answer = 0;
        if (a > b) {
            while (a >= b) {
                answer += b;
                b++;
            }
        } else if (b > a) {
            while (b >= a) {
                answer += a;
                a++;
            }
        } else {
            answer = a;

        }

        return answer;
    }
}