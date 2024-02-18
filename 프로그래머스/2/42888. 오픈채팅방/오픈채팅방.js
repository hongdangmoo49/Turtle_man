function solution(record) {
    let answer = [];
    let userMap = {};

    record.forEach((log) => {
        const [action, userId, nickname] = log.split(' ');
        if (action === 'Enter' || action === 'Change') {
            userMap[userId] = nickname;
        }
    });


    record.forEach((log) => {
        const [action, userId] = log.split(' ');
        if (action === 'Enter') {
            answer.push(`${userMap[userId]}님이 들어왔습니다.`);
        } else if (action === 'Leave') {
            answer.push(`${userMap[userId]}님이 나갔습니다.`);
        }

    });

    return answer;
}