class Solution {
    public String solution(String phone_number) {
        String answer = "";
        int a = phone_number.length();
        String num = phone_number.substring(phone_number.length() - 4, phone_number.length());
        if (a > a-4){
            for (int j = 0; j < phone_number.length()-4; j++) {
                answer += "*";
            }
        }
        answer += num;

        return answer;
    }
}