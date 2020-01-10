const assert = require('assert');
const {isPalindrome, unique, isReallyNaN, howMuchILoveYou, factorial, greet, validatePin, digitize, divisibleBy} = require('../index.js');

const {expect} = require('chai');

//testing with Mocha
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


//testing with mocha and chai
describe('Testing function howMuchILoveYou()', () => {
    it('should function howMuchILoveYou() return "Please provide number of petals" ' +
        'for calling function with no argument', () => {

    });

    it('should function howMuchILoveYou() return "Please provide number of petals" ' +
        'for number -1', () => {

    });

    it('should function howMuchILoveYou() return "Please provide number of petals" ' +
        'for number 0', () => {

    });

    it('should function howMuchILoveYou() return "Please provide number of petals" ' +
        'for not a number argument, String "2"', () => {

    });

    it('should function howMuchILoveYou() return "Please provide number of petals" ' +
        'for null', () => {

    });

    it('should function howMuchILoveYou() return "I love you" ' +
        'for 1', () => {

    });

    it('should function howMuchILoveYou() return "a little" ' +
        'for 2', () => {

    });

    it('should function howMuchILoveYou() return "a lot" ' +
        'for 9', () => {

    });

    it('should function howMuchILoveYou() return "passionately" ' +
        'for 10', () => {

    });

    it('should function howMuchILoveYou() return "madly" ' +
        'for 11', () => {

    });

    it('should function howMuchILoveYou() return "not at all" ' +
        'for 18', () => {

    });
});



describe('Testing function factorial', () => {
    it('should function factorial return factorial of number 0 equals 1 ', () => {

    });

    it('should function factorial return factorial of number 1 equals 1 ', () => {

    });

    it('should function factorial return factorial of number 5 equals 120 ', () => {

    });

    it('should function factorial return factorial of number 12 equals 479001600', () => {

    });

    it('should function factorial throw RangeError for number 13', () => {

    });

    it('should function factorial throw RangeError for number -1', () => {

    });
});



describe('Testing function greet()', () => {
    it('should function greet return "Welkom" for dutch language, ' +
        'which exist in our database', () => {

    });

    it('should function greet return "Welcome" for english language, ' +
        'which exist in our database', () => {

    });

    it('should function greet return "Welcome" for russian language, ' +
        'which does not exist in our database', () => {

    });

    it('should function greet return "Welcome" for invalid input - ' +
        'string "Hello",', () => {

    });

    it('should function greet return "Welcome" for no argument,', () => {

    });

    it('should function greet return "Welcome" for data type argument ' +
        'different than string, for array', () => {

    });

    it('should function greet return "Welcome" for data type argument ' +
        'different than string, for null', () => {

    });
});



describe('Testing function validatePn()', () => {
    it('should function ValidatePin() return true for valid Pin 1234', () => {

    });

    it('should function ValidatePin() return true for valid Pin 123456', () => {

    });

    it('should function ValidatePin() return true for valid Pin 0000', () => {

    });

    it('should function ValidatePin() return false for Pin ".14567" ' +
        'which contains characters other than digits', () => {

    });

    it('should function ValidatePin() return false for Pin "a11b" ' +
        'which contains characters other than digits', () => {

    });

    it('should function ValidatePin() return false for Pin with length less than 4, for Pin "1"', () => {

    });

    it('should function ValidatePin() return false for Pin with length more than 6, for Pin "1122334"', () => {

    });

    it('should function ValidatePin() return false for Pin with length 5, for Pin "44553"', () => {

    });

    it('should function ValidatePin() return false for Pin with negative digits, for Pin "-44553"', () => {

    });

    it('should function ValidatePin() return false for Pin with floating digits, for Pin "44.553"', () => {

    });

    it('should function ValidatePin() return false for calling function with no argument', () => {

    });

    it('should function ValidatePin() return false for argument different data type than String, ' +
        'for Number 44553', () => {

    });
});



describe('Testing function digitize()', () => {
    it('should function digitize() return [0] for number 0', () => {

    });

    it('should function digitize() return [1] for number 1', () => {

    });

    it('should function digitize() return [1,3,5] for number 531', () => {

    });

    it('should function digitize() return [-0,1] for number -10', () => {

    });

    it('should function digitize() return [] for number 23.23', () => {

    });

    it('should function digitize() return [] for calling function with no arguments', () => {

    });

    it('should function digitize() return [] for different data type argument, than number ' +
        'for String "10"', () => {

    });

    it('should function digitize() return [] for different data type argument, than number ' +
        'for undefined', () => {

    });
});



describe('Testing function divisibleBy()', () => {
    it('should function divisibleBy() return empty array ' +
        'for calling function with one argument, divisibleBy(5)', () => {

    });

    it('should function divisibleBy() return empty array ' +
        'for calling function with no arguments', () => {

    });

    it('should function divisibleBy() return empty array ' +
        'for calling function with array with different data type than number, ' +
        'divisible(["2", "1"], 1', () => {

    });

    it('should function divisibleBy() return empty array ' +
        'for calling function with array where some elements not numbers, ' +
        'divisible([{1: "j"}, 3], 1', () => {

    });

    it('should function divisibleBy() return empty array ' +
        'for calling function with first argument not an array, ' +
        'divisible("12345", 1)', () => {

    });

    it('should function divisibleBy() return 0 ' +
        'for calling function with empty array, ' +
        'divisible([], 1)', () => {

    });

    it('should function divisibleBy() return empty array ' +
        'for calling function with first argument undefined, ' +
        'divisible(undefined, 5)', () => {

    });

    it('should function divisibleBy() return NaN ' +
        'for calling function with divisor = undefined, ' +
        'divisible([2,1,3], undefined)', () => {

    });

    it('should function divisibleBy() return NaN ' +
        'for calling function with divisor = NaN, ' +
        'divisible([2,1,3], NaN)', () => {

    });

    it('should function divisibleBy() return NaN ' +
        'for calling function with divisor different type other than number, ' +
        'divisible([2,1,3], "1")', () => {

    });

    it('should function divisibleBy() return Infinity ' +
        'for calling function with divisor = null, ' +
        'divisible([2,1,3], null)', () => {

    });

    it('should function divisibleBy() return NaN ' +
        'for calling function with divisor = 0, ' +
        'divisible([2,1,3], 0)', () => {

    });

    it('should function divisibleBy() return [-3,9,12] ' +
        'with divisor = 3, for array [-3, 2, -10, 0, 9, 12]', () => {

    });
});




