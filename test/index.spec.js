const assert = require('assert');
const {isPalindrome, unique, isReallyNaN} = require('../index.js');

describe(' Testing function isPalindrome for Strings', () => {
    it('should function isPalindrome to be true for string "a"', () => {
        assert.equal(isPalindrome('a'), true);
    });
    it('should function isPalindrome to be true for string "1"', () => {
        assert.equal(isPalindrome('1'), true);
    });
    it('should function isPalindrome to be true for palindrome string "aba"', () => {
        assert.equal(isPalindrome('aba'), true);
    });

    it('should function isPalindrome to be case insensitive for string "Bob"', () => {
        assert.equal(isPalindrome('Bob'), true);
    });

    it('should function isPalindrome to be true for empty string ""', () => {
        assert.equal(isPalindrome(''), true);
    });

    it('should function isPalindrome to be true for string "123.321"', () => {
        assert.equal(isPalindrome('123.321'), true);
    });

    it('should function isPalindrome do not accept string with more than 1 word ' +
        '"Was it a car or a cat I saw"', () => {
        assert.equal(isPalindrome('Was it a car or a cat I saw'), 'Wrong argument');
    });

    it('should function isPalindrome to be false for non-palindrome string "hello"', () => {
        assert.equal(isPalindrome('hello'), false);
    });

    it('should function isPalindrome to be false for "123.21"', () => {
        assert.equal(isPalindrome('123.21'), false);
    });

    it('should function isPalindrome return "Wrong argument" for other data type ' +
        'than String, for number 1', () => {
        assert.equal(isPalindrome(1), 'Wrong argument');
    });

    it('should function isPalindrome return "Wrong argument" without argument', () => {
        assert.equal(isPalindrome(), 'Wrong argument');
    });
});

describe('Testing function unique(array)', () => {
    it('should function unique return unique array [1,2,4,3] ' +
        'for [1,2,2,4,3,3])', () => {
        assert.deepStrictEqual(unique([1,2,2,4,3,3]), [1,2,4,3]);
    });

    it('should function unique return unique array for array with 1 element ' +
        'only, [4] for [4]', () => {
        assert.deepStrictEqual(unique([4]), [4]);
    });

    it('should function unique return unique string array ["a","b"] ' +
        'for string ["a","b","a"]', () => {
        assert.deepStrictEqual(unique(["a","b","a"]), ["a","b"]);
    });

    it('should function unique do not return not unique array [1,2,2,5] ' +
        'for [1,2,2,5,5]', () => {
        assert.notDeepStrictEqual(unique([1,2,2,5,5]), [1,2,2,5]);
    });

    it('should function unique do not accept empty array', () => {
        assert.equal(unique([]), false);
    });

    it('should function unique do not work with no argument', () => {
        assert.equal(unique(), false);
    });

    it('should function unique accept only arrays like arguments, not strings', () => {
        assert.equal(unique('String'), false);
    });

    it('should function unique accept only arrays like arguments, not numbers', () => {
        assert.equal(unique(2345), false);
    });
});

describe('Testing function isReallyNaN, that returns true only if passed in ' +
    'an argument that evaluates to NaN,and returns false otherwise', () => {

    it('should function isReallyNaN return false for number 10', () => {
        assert.equal(isReallyNaN(10), false);
    });

    it('should function isReallyNaN return false for number -∞', () => {
        assert.equal(isReallyNaN(-Infinity), false);
    });

    it('should function isReallyNaN return false for String', () => {
        assert.equal(isReallyNaN('100'), false);
    });

    it('should function isReallyNaN return false for undefined', () => {
        assert.equal(isReallyNaN(undefined), false);
    });

    it('should function isReallyNaN return false for null', () => {
        assert.equal(isReallyNaN(null), false);
    });

    it('should function isReallyNaN return false for object', () => {
        assert.equal(isReallyNaN({name: "Irina"}), false);
    });

    it('should function isReallyNaN return false for Boolean value false', () => {
        assert.equal(isReallyNaN(false), false);
    });

    it('should function isReallyNaN do not return false for value NaN. ' +
        'isReallyNan(NaN) should return true', () => {
        assert.notEqual(isReallyNaN(NaN), false);
    });
});

