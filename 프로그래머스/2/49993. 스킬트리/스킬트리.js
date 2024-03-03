function solution(skill, skill_trees) {
    let answer = 0;

    skill_trees.forEach(tree => {
        let skillOrder = skill.split('');

        for(let i = 0; i < tree.length; i++) {
            if(skillOrder.includes(tree[i])) {

                if(tree[i] !== skillOrder.shift()) {
                    return;
                }
            }
        }

        answer++;
    });

    return answer;
}