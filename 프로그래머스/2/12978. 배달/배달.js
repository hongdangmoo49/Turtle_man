function solution(N, road, K) {
    const graph = Array.from({ length: N }, () => []);

    for (const [a, b, c] of road) {
        graph[a - 1].push([b - 1, c]);
        graph[b - 1].push([a - 1, c]);
    }

    const distances = Array(N).fill(Infinity);
    distances[0] = 0;

    const pq = [];
    enqueue(pq, 0, 0);

    while (!isEmpty(pq)) {
        const { value: currentVertex, priority: currentDistance } = dequeue(pq);

        if (distances[currentVertex] < currentDistance) continue;

        for (const [adjacent, weight] of graph[currentVertex]) {
            const distance = currentDistance + weight;

            if (distance < distances[adjacent]) {
                distances[adjacent] = distance;
                enqueue(pq, adjacent, distance);
            }
        }
    }

    return distances.filter(d => d <= K).length;
}

function enqueue(queue, value, priority) {
    queue.push({ value, priority });
    queue.sort((a, b) => a.priority - b.priority);
}

function dequeue(queue) {
    return queue.shift();
}

function isEmpty(queue) {
    return queue.length === 0;
}