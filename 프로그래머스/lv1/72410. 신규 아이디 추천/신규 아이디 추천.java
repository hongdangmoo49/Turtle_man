    class Solution{
        public String solution(String new_id) {
            String answer = "";

            new_id = new_id.toLowerCase();
            // 소문자

            answer = new_id.replaceAll("[^-_.a-z0-9]", "");
            // 정규식으로 제거

            answer = answer.replaceAll("[.]{2,}", ".");
            // 정규식으로 연속된 '.' 제거

            answer = answer.replaceAll("^[.]|[.]$", "");
            // 정규식으로 '.' 제거

            if (answer.length() == 0)
                answer += 'a';
            // 문자열의 길이가 0일 때, 'a' 추가

            if (answer.length() >= 16) {
                answer = answer.substring(0, 15);
                // 잘라내고
                answer = answer.replaceAll("^[.]|[.]$", "");
                // 남은거 중 처음과 마지막 '.'
            }
            
            if (answer.length() <= 2) {
                String temp = answer.substring(answer.length() - 1, answer.length());
                while (answer.length() < 3)
                {
                    answer += temp;
                }
            }
            return answer;
        }
    }