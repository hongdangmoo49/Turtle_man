function replaceSharp(melody) {
    return melody.replace(/C#/g, 'c').replace(/D#/g, 'd').replace(/F#/g, 'f').replace(/G#/g, 'g').replace(/A#/g, 'a');
}

function calculatePlayTime(start, end) {
    const [startHour, startMinute] = start.split(':').map(Number);
    const [endHour, endMinute] = end.split(':').map(Number);
    return (endHour - startHour) * 60 + (endMinute - startMinute);
}

function getActualMelody(playTime, sheetMusic) {
    const length = sheetMusic.length;
    const repeats = Math.floor(playTime / length);
    const remainder = playTime % length;
    return sheetMusic.repeat(repeats) + sheetMusic.substring(0, remainder);
}

function solution(m, musicinfos) {
    m = replaceSharp(m);
    let answer = { title: '(None)', playTime: 0 };

    musicinfos.forEach(info => {
        let [start, end, title, sheetMusic] = info.split(',');
        sheetMusic = replaceSharp(sheetMusic);
        const playTime = calculatePlayTime(start, end);
        const actualMelody = getActualMelody(playTime, sheetMusic);

        if (actualMelody.includes(m) && playTime > answer.playTime) {
            answer = { title, playTime };
        }
    });

    return answer.title;
}