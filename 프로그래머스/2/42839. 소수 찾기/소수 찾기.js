function solution(numbers) {
    const nums = numbers.split('');
    const permutations = new Set();

    const isPrime = (num) => {
        if (num < 2) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    };

    const makePermutations = (arr, str) => {
        if (str.length > 0) permutations.add(parseInt(str));

        for (let i = 0; i < arr.length; i++) {
            let newArr = [...arr];
            let newStr = str + newArr.splice(i, 1);
            makePermutations(newArr, newStr);
        }
    };

    makePermutations(nums, '');

    return Array.from(permutations).filter(isPrime).length;
}