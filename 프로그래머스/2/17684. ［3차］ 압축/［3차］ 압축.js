function solution(msg) {
    const dictionary = {};
    const result = [];
    let dictSize = 26;

    for (let i = 1; i <= 26; i++) {
        const char = String.fromCharCode(64 + i);
        dictionary[char] = i;
    }

    for (let i = 0; i < msg.length;) {
        let w = msg[i];
        let c = '';
        let index = i + 1;

        while (dictionary[w + c] && index <= msg.length) {
            w += c;
            c = msg[index++];
        }

        result.push(dictionary[w]);

        if (c) {
            dictSize++;
            dictionary[w + c] = dictSize;
        }

        i += w.length;
    }

    return result;
}