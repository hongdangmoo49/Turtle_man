class Solution {
    public int solution(int n) {
        int answer = 0;
        for(int i = 1; i<n; i++)
        {
            if(n%i == 1) //n을 i로 나눈 나머지가 1인경우
            {
                return i; //i를 return
            }
        }
        return answer;
    }
}