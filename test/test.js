const verifyParenthesis = require('../parenthesis');
const Deferred = require('../deferred');
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

describe('deferred', function() {
    it('should execute the callbacks in the right order', function(done) {
        const results = [];
        const d = new Deferred();
        d.then(val => {
            results.push(val);
            return 'b';
        });
        d.then(val => {
            results.push(val);
            const d = new Deferred();
            setTimeout(() => d.resolve('c'));
            return d;
        });
        d.then(val => {
            results.push(val);
            return 'd';
        });
        d.then(val => {
            results.push(val);
            assert.deepEqual(results, ['a', 'b', 'c', 'd']);
            done();
        });
        d.resolve('a');
    });
});