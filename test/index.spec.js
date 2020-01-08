const assert = require('assert');
const {isPalindrome, unique} = require('../index.js');

describe('function isPalindrome for Strings', () => {
    it('should function isPalindrome to be true for "a"', () => {
        assert.equal(isPalindrome('a'), true);
    });
    it('should function isPalindrome to be true for "1"', () => {
        assert.equal(isPalindrome('1'), true);
    });
    it('should function isPalindrome to be true for "aba"', () => {
        assert.equal(isPalindrome('aba'), true);
    });

    it('should function isPalindrome to be true for "Bob"', () => {
        assert.equal(isPalindrome('Bob'), true);
    });

    it('should function isPalindrome to be true for "Madam"', () => {
        assert.equal(isPalindrome('Madam'), true);
    });

    it('should function isPalindrome to be true for ""', () => {
        assert.equal(isPalindrome(''), true);
    });

    it('should function isPalindrome to be true for "123.321"', () => {
        assert.equal(isPalindrome('123.321'), true);
    });

    it('should function isPalindrome to be false for "hello"', () => {
        assert.equal(isPalindrome('hello'), false);
    });

    it('should function isPalindrome to be false for "123.21"', () => {
        assert.equal(isPalindrome('123.21'), false);
    });

    it('should function isPalindrome to be false for "1"', () => {
        let x = 1;
        assert.equal(isPalindrome(1), x + ' not a String');
    });
});

describe('function unique(array)', () => {
    it('should function unique return unique array [1,2,4,3] ' +
        'for [1,2,2,4,3,3])', () => {
        assert.deepStrictEqual(unique([1,2,2,4,3,3]), [1,2,4,3]);
    });

    it('should function unique return unique array [4] for [4])', () => {
        assert.deepStrictEqual(unique([4]), [4]);
    });

    it('should function unique return unique array ["a","b"] for ["a","b","a"])', () => {
        assert.deepStrictEqual(unique(["a","b","a"]), ["a","b"]);
    });

    it('should function unique do not return not unique array [1,2,2,5] ' +
        'for [1,2,2,5,5])', () => {
        assert.notDeepStrictEqual(unique([1,2,2,5,5]), [1,2,2,5]);
    });

    it('should function unique do not accept empty arrays, ' +
        'return false in this case)', () => {
        assert.notEqual(unique([]), true);
    });

    it('should function unique accept only arrays like arguments, ' +
        'return false in this case)', () => {
        assert.notEqual(unique([]), true);
    });
});