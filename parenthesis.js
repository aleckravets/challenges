function verifyParenthesis(text) {
    const pairs = [
        ['(', ')'],
        ['[', ']'],
        ['<', '>']
    ];
    const open = [];

    for (let char of text) {
        for (let i = 0; i < pairs.length; i++) {
            if (char == pairs[i][0]) open.push(i);
            else if (char == pairs[i][1]) {
                if (open[open.length - 1] != i) return false;
                open.pop();
            }
        }
    }

    return open.length == 0;
}

module.exports = verifyParenthesis;