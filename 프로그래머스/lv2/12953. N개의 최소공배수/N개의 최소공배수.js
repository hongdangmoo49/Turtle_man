function solution(arr) {

    function gcd(a, b) {
        while (b !== 0) {
            let temp = a % b;
            a = b;
            b = temp;
        }
        return a;
    }

    function lcmOfTwoNumbers(a, b) {
        return a * b / gcd(a, b);
    }

    let resultLCM = arr[0];
    for (let i = 1; i < arr.length; i++) {
        resultLCM = lcmOfTwoNumbers(resultLCM, arr[i]);
    }
    
    return resultLCM;
}