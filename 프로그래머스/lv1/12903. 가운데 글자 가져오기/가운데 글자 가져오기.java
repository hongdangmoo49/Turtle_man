class Solution {
    public String solution(String s) {
        String answer = "";
        int sLength = s.length();
        if(1 > sLength || sLength > 100) {
            answer = "";
            return answer;
        }
        if (sLength % 2 == 0) {
            answer = s.substring(sLength/2 -1, sLength/2 + 1);
        } else {
            answer = s.substring(sLength/2, sLength/2 +1 );
        }
        return answer;
    } 
}
