class Solution {
    public String solution(int a, int b) {
        String answer = "";
        int[] day = {31,29,31,30,31,30,31,31,30,31,30,31};
        int month = 0;
        int today = 0;
        for (int i = 0; i < a-1; i++) {
            month += day[i];
        }
        today = month + b;
        switch(today%7){
            case 0:
                return "THU";
            case 1:
                return "FRI";
            case 2:
                return "SAT";
            case 3:
                return "SUN";
            case 4:
                return "MON";
            case 5:
                return "TUE";
            case 6:
                return "WED";
        }
        return answer;
    }
}