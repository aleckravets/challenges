const verifyParenthesis = require('../parenthesis');
const assert = require('assert');

describe('parenthesis - verify correct parenthesis pairs and ordering', function() {
    it('should pass', function() {
        [
            'abc(123<---->345)[]',
            '(<[]>)',
            'qwerty<123[aaa(bbb)]>',
            'aaaa(bbbb)cccc'
        ].forEach(s => assert(verifyParenthesis(s), s));
    });

    it('should fail', function() {
        [
            'qwerty<()]>abc',
            '(])',
            '123(abc<qwerty)>[]'
        ].forEach(s => assert(!verifyParenthesis(s), s));
    }) ;
});