function solution(files) {
    return files.sort((a, b) => {

        const filePattern = /^([a-zA-Z\s.-]+)(\d{1,5})(.*)$/;
        const matchA = a.match(filePattern);
        const matchB = b.match(filePattern);

        const headCompare = matchA[1].toLowerCase().localeCompare(matchB[1].toLowerCase());
        if (headCompare !== 0) return headCompare;

        const numA = parseInt(matchA[2], 10);
        const numB = parseInt(matchB[2], 10);
        return numA - numB;
    });
}