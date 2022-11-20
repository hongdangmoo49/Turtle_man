class Solution {
    public int solution(int[] a, int[] b) {
        int answer = 1234567890;
        int[] A = new int[a.length];
        int sum = 0;
        for (int i = 0; i < a.length; i++) {
            A[i] += a[i]*b[i];
            sum += A[i];
        }
        return answer=sum;
    }
}