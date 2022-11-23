import java.util.ArrayList;
import java.util.Collections;

class Solution {
    public ArrayList<Integer> solution(long n) {
        ArrayList<Integer> answer = new ArrayList<>();
        ArrayList<String> arr = new ArrayList<String>();
        String a = String.valueOf(n);
        String[] b = a.split("");
        for (int i = 0; i < b.length; i++) {
            arr.add(b[i]);
        }
        if(b.length == 1){

        } else if (b.length == 2) {
            Collections.swap(arr, 0, 1);
        } else if (b.length == 3) {
            Collections.swap(arr, 0, 2);
        } else if(b.length % 2 == 0){
            for (int i = 0; i <b.length/2; i++) {
                Collections.swap(arr, i, (b.length-1)-i);
            }
        }else if(b.length % 2 == 1){
            for (int i = 0; i <= (b.length/2)-1; i++) {
                Collections.swap(arr, i, (b.length-1)-i);
            }


        }

        for (int i = 0; i < b.length; i++) {
            answer.add(Integer.parseInt(arr.get(i)));
        }
        

        return answer;
    }
}