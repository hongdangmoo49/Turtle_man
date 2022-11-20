class Solution {
    boolean solution(String s) {
        boolean answer = true;
        String py = s.toLowerCase();
        int ycount = 0;
        int pcount = 0;
        for (int i = 0; i < py.length(); i++) {
           if (py.charAt(i) == 112){
               pcount++;
           } else if(py.charAt(i) == 121){
               ycount++;
           }
        }
        if (pcount != ycount)
            answer = false;

        // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
        System.out.println("Hello Java");

        return answer;
    }
}