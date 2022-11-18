class Solution {
    public int solution(int[] absolutes, boolean[] signs) {
        int answer = 123456789;
        int sum = 0;
        int a = 0;
        for (int i = 0; i < absolutes.length; i++) {
            a = (signs[i] == true ? absolutes[i] : -1 * absolutes[i]);
            sum += a;
        }
        return answer = sum;
    }
}