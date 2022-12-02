import java.util.*;

public class Solution {
    public int[] solution(int []arr) {
        int count = 1;
        for(int i=1; i<arr.length; i++){
          if(arr[i-1] != arr[i]){
             count++;
          }
        }
        
        int [] answer = new int [count];
        int index = 1;
        answer[0]=arr[0];
        for(int i=1; i<arr.length; i++){
          if(arr[i-1] != arr[i]){
              answer[index]= arr[i];
              index++;
          }
        }

        return answer;
    }
}