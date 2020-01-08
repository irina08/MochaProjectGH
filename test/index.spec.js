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