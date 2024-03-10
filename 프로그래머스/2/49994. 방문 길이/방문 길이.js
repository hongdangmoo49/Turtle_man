function solution(dirs) {
    let currentPosition = { x: 0, y: 0 };
    const visitedPaths = new Set();

    const move = {
        'U': { x: 0, y: 1 },
        'D': { x: 0, y: -1 },
        'R': { x: 1, y: 0 },
        'L': { x: -1, y: 0 }
    };

    for (let dir of dirs) {
        const newX = currentPosition.x + move[dir].x;
        const newY = currentPosition.y + move[dir].y;

        if (newX < -5 || newX > 5 || newY < -5 || newY > 5) continue;

        const path = `${currentPosition.x},${currentPosition.y},${newX},${newY}`;
        const reversePath = `${newX},${newY},${currentPosition.x},${currentPosition.y}`;
        
        visitedPaths.add(path);
        visitedPaths.add(reversePath);

        currentPosition.x = newX;
        currentPosition.y = newY;
    }

    return visitedPaths.size / 2;
}