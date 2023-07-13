function solution(num_list) {
    const result = [];
    const evenLength = num_list.filter(num => num % 2 ===0).length;
    
    return [evenLength, num_list.length - evenLength];
}