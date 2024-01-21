function solution(brown, yellow) {
    for (let yellowHeight = 1; yellowHeight <= Math.sqrt(yellow); yellowHeight++) {
        if (yellow % yellowHeight === 0) {
            const yellowWidth = yellow / yellowHeight;

            const totalBrown = (yellowWidth + 2) * (yellowHeight + 2) - yellow;

            if (totalBrown === brown) {
                return [yellowWidth + 2, yellowHeight + 2];
            }
        }
    }
}