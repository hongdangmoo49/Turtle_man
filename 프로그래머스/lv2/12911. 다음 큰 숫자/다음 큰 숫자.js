function solution(n) {

    const numOfOnes = n.toString(2).split('').filter(bit => bit === '1').length;
    
    while (true) {
        n += 1;
        if (n.toString(2).split('').filter(bit => bit === '1').length === numOfOnes) {
            return n;
        }
    }
}