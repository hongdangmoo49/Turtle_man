function solution(s) {
    const sets = s.slice(2, -2).split('},{')
        .map(set => set.split(',').map(num => parseInt(num)))
        .sort((a, b) => a.length - b.length);

    const tuple = [];
    sets.forEach(set => {
        set.forEach(num => {
            if (!tuple.includes(num)) {
                tuple.push(num);
            }
        });
    });

    return tuple;
}