import java.util.ArrayList;
import java.util.Arrays;

class Solution {
    public int[] solution(int[] arr, int divisor) {

        int[] answer = {};
        ArrayList<Integer> A = new ArrayList<Integer>();

        for (int i = 0; i < arr.length; i++) {
            if(arr[i]%divisor==0){
                A.add(arr[i]);          //array의 각 element 중 divisor로 나누어 떨어지는 값을
            }
        }
        if (A.isEmpty()){           //divisor로 나누어 떨어지는 element가 하나도 없다면 배열에 -1을 담아 반환하세요.
            A.add(-1);
        }
        answer = new int[A.size()];

        for (int i = 0; i < A.size(); i++) {
            answer[i] = A.get(i);
        }
        Arrays.sort(answer);        // 오름차순으로 정렬한 배열을 반환하는 함수, solution을 작성해주세요.
        return answer;
    }
}