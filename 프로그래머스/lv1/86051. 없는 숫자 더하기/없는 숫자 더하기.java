class Solution {
    public int solution(int[] numbers) {
        int answer = -1;
        int sum = 0;
        int Nsum = 0;
        for (int i = 0; i < 10; i++) {
            sum += i;
        }
        for (int i = 0; i < numbers.length; i++) {
           Nsum += numbers[i];
        }
        return answer = sum - Nsum;
    }
}