class Solution {
    public static boolean solution(int x) {
        boolean answer = true;
        int ss = 0;
        int j = 0;
        j = x;
        while (x>0){
            ss += x % 10;
            x = x/10;
        }
        if(j %ss ==0){
            answer = true;
        } else{
            answer = false;
        }

        return answer;
    }
}