import java.util.Arrays;
class Solution {
    public String solution(String s) {
        String answer = "";
        String[] Real = s.split("");
        System.out.println(Arrays.toString(Real));
        int start = 0;
        for (int i = 0; i < Real.length; i++) {

            if (Real[i].equals(" ")) {
                answer += " ";
                start = 0;
            } else if (start % 2 == 0) {

                answer += Real[i].toUpperCase();
                start++;
            } else {
                answer += Real[i].toLowerCase();
                start++;
            }
        }
        return answer;
    }
}