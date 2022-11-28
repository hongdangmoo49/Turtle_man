class Solution {
    public int solution(int n) {
        int answer = 0;
        String str = "";
        while (n > 0){
            str = (n % 3) + str;
            n /= 3;
        }
        StringBuffer rev = new StringBuffer(str);
        str = rev.reverse().toString();

        answer = Integer.valueOf(str, 3);
        return answer;
    }
}