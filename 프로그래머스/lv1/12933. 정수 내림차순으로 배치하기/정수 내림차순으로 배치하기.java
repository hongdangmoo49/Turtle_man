import java.util.Arrays;
import java.util.Collections;

class Solution {
    public long solution(long n) {
        long answer = 0;
        String a = String.valueOf(n);
        String[] b = a.split("");

        Arrays.sort(b, Collections.reverseOrder());
        System.out.println(Arrays.toString(b));
        String c = String.join("", b);
        System.out.println(c);
        answer = Long.parseLong(c);
        return answer;
    }
}