class Solution {
  public int solution(int[] nums) {
        int answer = 0;
        int sum = 0;
		boolean flag = false; // true = 소수가 아님!!
		 for(int i = 0; i < nums.length - 2; i++){
			 
	            for(int o = i + 1; o < nums.length - 1; o++){
	            	
	                for(int p = o + 1; p < nums.length; p++){
	                	sum = nums[i] + nums[o] + nums[p];
	           		 	flag = false;
	                	for(int j = 2; j <= sum -1; j++) {
	                		if(sum % j == 0) {
	                			flag = true;
	                			break;
	                		}
	                	}
	                	if(flag == false) {
	                		answer += 1;
	                	}
	                	
	                }
	            }
	        }

        // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
        System.out.println("Hello Java");

        return answer;
    }
}