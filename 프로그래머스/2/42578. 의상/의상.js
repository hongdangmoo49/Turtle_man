function solution(clothes) {
    let clothesMap = new Map();

    for (let [name, type] of clothes) {
        clothesMap.set(type, (clothesMap.get(type) || 0) + 1);
    }

    let combinations = 1;
    
    for (let count of clothesMap.values()) {
        combinations *= (count + 1);
    }

    return combinations - 1;
}