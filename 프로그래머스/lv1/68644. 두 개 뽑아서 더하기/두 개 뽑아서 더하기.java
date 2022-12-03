import java.util.ArrayList;
import java.util.Arrays;

class Solution {
    public int[] solution(int[] numbers) {
        int[] answer = {};
        ArrayList<Integer> list = new ArrayList<Integer>();
        
        for(int i=0;i<numbers.length;i++) {
            for(int j=i+1;j<numbers.length;j++) {
                int add_result = numbers[i] + numbers[j];
                if(list.contains(add_result)) continue;
                else list.add(add_result);
            }
        }
        
        answer = new int[list.size()];
        for (int i=0;i<list.size();i++) {
            answer[i] = list.get(i);
        }
        Arrays.sort(answer);  
        
        return answer;
    }
}