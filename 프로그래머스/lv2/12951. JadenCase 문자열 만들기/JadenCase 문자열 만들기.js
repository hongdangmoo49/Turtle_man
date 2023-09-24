function solution(s) {
    let answer = '';
    let is_new_word = true;
    
    for(let c of s) {
        if(c === ' ') {
            answer += c;
            is_new_word = true;
        } else {
            if(is_new_word) {
                answer += c.toUpperCase();
                is_new_word = false;
            } else {
                answer += c.toLowerCase();
            }
        }
    }
    
    return answer;
}