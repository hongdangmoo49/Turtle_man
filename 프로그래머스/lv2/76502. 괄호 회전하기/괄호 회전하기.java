import java.util.Stack;

class Solution {
        static public int solution(String s) {
            int answer = 0;
            for (int i = 0; i < s.length(); i++) {
                Stack<Character> stack = new Stack<>();
                String str = s.substring(i, s.length()) + s.substring(0, i);
                for (int j = 0; j < str.length(); j++) {
                    char tmp = str.charAt(j);
                    if (stack.isEmpty()) {
                        stack.push(tmp);
                    } else if (tmp == ')' && stack.peek() == '(') {
                        stack.pop();
                    } else if (tmp == '}' && stack.peek() == '{') {
                        stack.pop();
                    } else if (tmp == ']' && stack.peek() == '[') {
                        stack.pop();
                    } else {
                        stack.push(tmp);
                    }
                }
                if (stack.isEmpty()) {
                        answer++;
                    }
            }
            return answer;
        }
    }