function solution(n, words) {
    const usedWords = new Set();
    let previousWord = words[0];
    usedWords.add(previousWord);

    for (let i = 1; i < words.length; i++) {
        const currentWord = words[i];

        if (previousWord[previousWord.length - 1] !== currentWord[0] || usedWords.has(currentWord)) {
            return [(i % n) + 1, Math.floor(i / n) + 1];
        }
        
        usedWords.add(currentWord);
        previousWord = currentWord;
    }
    
    return [0, 0];
}