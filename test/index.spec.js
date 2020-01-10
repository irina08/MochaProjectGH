const assert = require('assert');
const {isPalindrome, unique, isReallyNaN, howMuchILoveYou, factorial, greet, validatePIN, digitize, countLetters, firstNonConsecutive} = require('../index.js');

const {expect} = require('chai');
//const {should} = require('chai');

//testing with Mocha
describe('Testing function unique(array)', () => {
    it('should function unique return unique array [1,2,4,3] ' +
        'for number array [1,2,2,4,3,3])', () => {
        assert.deepStrictEqual(unique([1,2,2,4,3,3]), [1,2,4,3]);
    });

    it('should function unique return unique array for number array with 1 element ' +
        'only, [4] for [4]', () => {
        assert.deepStrictEqual(unique([4]), [4]);
    });

    it('should function unique return unique string array ["a","b"] ' +
        'for string array ["a","b","a"]', () => {
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


//testing with Mocha and Chai
describe('Testing function howMuchILoveYou()', () => {
    it('should function howMuchILoveYou() return "Please provide number of petals" ' +
        'for calling function with no argument', () => {
        expect(howMuchILoveYou()).to.equal("Please provide number of petals");
    });

    it('should function howMuchILoveYou() return "Please provide number of petals" ' +
        'for negative number -1', () => {
        expect(howMuchILoveYou(-1)).to.equal("Please provide number of petals");
    });

    it('should function howMuchILoveYou() return "Please provide number of petals" ' +
        'for number 0', () => {
        expect(howMuchILoveYou(0)).to.equal("Please provide number of petals");
    });

    it('should function howMuchILoveYou() return "Please provide number of petals" ' +
        'for not a number argument, String "2"', () => {
        expect(howMuchILoveYou("2")).to.equal("Please provide number of petals");
    });

    it('should function howMuchILoveYou() return "Please provide number of petals" ' +
        'for null', () => {
        expect(howMuchILoveYou(null)).to.equal("Please provide number of petals");
    });

    it('should function howMuchILoveYou() return "I love you" ' +
        'for 1', () => {
        expect(howMuchILoveYou(1)).to.equal("I love you");
    });

    it('should function howMuchILoveYou() return "a little" ' +
        'for 2', () => {
        expect(howMuchILoveYou(2)).to.equal("a little");
    });

    it('should function howMuchILoveYou() return "a lot" ' +
        'for 9', () => {
        expect(howMuchILoveYou(9)).to.equal("a lot");
    });

    it('should function howMuchILoveYou() return "passionately" ' +
        'for 10', () => {
        expect(howMuchILoveYou(10)).to.equal("passionately");
    });

    it('should function howMuchILoveYou() return "madly" ' +
        'for 11', () => {
        expect(howMuchILoveYou(11)).to.equal("madly");
    });

    it('should function howMuchILoveYou() return "not at all" ' +
        'for 18', () => {
        expect(howMuchILoveYou(18)).to.equal("not at all");
    });
});



describe('Testing function factorial', () => {
    it('should function factorial return factorial of number 0 equals 1 ', () => {
        expect(factorial(0)).to.be.equal(1);
    });

    it('should function factorial return factorial of number 1 equals 1 ', () => {
        expect(factorial(1)).to.be.equal(1);
    });

    it('should function factorial return factorial of number 5 equals 120 ', () => {
        expect(factorial(5)).to.be.equal(120);
    });

    it('should function factorial return factorial of number 12 equals 479001600', () => {
        expect(factorial(12)).to.be.equal(479001600);
    });

    it('should function factorial throw RangeError for number 13', () => {
        let q = factorial(13);
        expect(q).to.throw(new RangeErro('Range must be between 0 and 12'));
        //expect(q).to.throw('RangeError');
        //assert.throws(factorial(13), RangeError, "Range must be between 0 and 12");
       //expect(factorial(13)).to.throw(new RangeError('Range must be between 0 and 12')).and.equal('Range must be between 0 and 12');
        //assert.throw(factorial(13), 'Range must be between 0 and 12');
        //expect(factorial(13)).to.deepEqual(new RangeError('Range must be between 0 and 12'));
    //should.throws(factorial(-13), RangeError);
    //expect(factorial(13)).to.throw('Range must be between 0 and 12");
        //expect(factorial(-10)).to.throw(/RangeError/);

    });

    it('should function factorial throw RangeError for number -1', () => {
        //assert.throws(factorial(-1), RangeError, "Range must be between 0 and 12");
    });
});



describe('Testing function greet()', () => {
    it('should function greet return "Welkom" for dutch language, ' +
        'which exist in our database', () => {
        expect(greet('dutch')).to.be.equal("Welkom");
    });

    it('should function greet return "Welcome" for english language, ' +
        'which exist in our database', () => {
        expect(greet('english')).to.be.equal("Welcome");
    });

    it('should function greet return "Welcome" for russian language, ' +
        'which does not exist in our database', () => {
        expect(greet('russian')).to.be.equal("Welcome");
    });

    it('should function greet return "Welcome" for invalid input - ' +
        'string "Hello",', () => {
        expect(greet('Hello')).to.be.equal("Welcome");
    });

    it('should function greet return "Welcome" for no argument,', () => {
        expect(greet()).to.be.equal("Welcome");
    });

    it('should function greet return "Welcome" for data type argument ' +
        'different than string, for array', () => {
        expect(greet(123)).to.be.equal("Welcome");
    });

    it('should function greet return "Welcome" for data type argument ' +
        'different than string, for undefined', () => {
        expect(greet(undefined)).to.be.equal("Welcome");
    });
});



describe('Testing function validatePIN()', () => {
    it('should function ValidatePIN() return true for valid 4digit Pin 1234', () => {
        expect(validatePIN('1234')).to.be.true;
    });

    it('should function ValidatePIN() return true for valid 6digit Pin 123456', () => {
        expect(validatePIN('123456')).to.be.true;
    });

    it('should function ValidatePIN() return true for valid 4digit Pin 0000', () => {
        expect(validatePIN('0000')).to.be.true;
    });

    it('should function ValidatePIN() return false for Pin ".14567" ' +
        'which contains characters other than digits', () => {
        expect(validatePIN('.14567')).to.be.false;
    });

    it('should function ValidatePIN() return false for Pin "a11b" ' +
        'which contains characters other than digits', () => {
        expect(validatePIN('.14567')).to.be.false;
    });

    it('should function ValidatePIN() return false for Pin with length less than 4, for Pin "1"', () => {
        expect(validatePIN('1')).to.be.false;
    });

    it('should function ValidatePIN() return false for Pin with length more than 6, for Pin "1122334"', () => {
        expect(validatePIN('1122334')).to.be.false;
    });

    it('should function ValidatePIN() return false for Pin with length 5, for Pin "44553"', () => {
        expect(validatePIN('44553')).to.be.false;
    });

    it('should function ValidatePIN() return false for Pin with negative digits, for Pin "-44553"', () => {
        expect(validatePIN('44553')).to.be.false;
    });

    it('should function ValidatePIN() return false for calling function with no argument', () => {
        expect(validatePIN()).to.be.false;
    });

    it('should function ValidatePIN() return false for argument different data type than String, ' +
        'for Number 44553', () => {
        expect(validatePIN(44553)).to.be.false;
    });
});



describe('Testing function digitize()', () => {
    it('should function digitize() return [0] for integer number 0', () => {
        expect(digitize(0)).to.deep.equal([0]);
    });

    it('should function digitize() return the digits of given number within ' +
        'an array of 1 number in reverse order[1] for integer number 1', () => {
        expect(digitize(1)).to.deep.equal([1]);
    });

    it('should function digitize() return the digits of given number ' +
        'within an array of positive integer numbers in reverse order, for [1,3,5] for number 531', () => {
        expect(digitize(531)).to.deep.equal([1,3,5]);
    });

    it('should function digitize() return [] for negative number ' +
        '[] for negative number -10', () => {
        expect(digitize(-10)).to.deep.equal([]);
    });

    it('should function digitize() return [] for float number, ' +
        'for number 23.23', () => {
        expect(digitize(23.23)).to.deep.equal([]);
    });

    it('should function digitize() return [] for calling function with no arguments', () => {
        expect(digitize()).to.deep.equal([]);
    });

    it('should function digitize() return [] for different data type argument, than number ' +
        'for String "10"', () => {
        expect(digitize("10")).to.deep.equal([]);
    });

    it('should function digitize() return [] for different data type argument, than number ' +
        'for undefined', () => {
        let x;
        expect(digitize(x)).to.deep.equal([]);
    });
});



describe('Testing function countLetters()', () => {
    it('should function countLetters() return null for argument with different ' +
        'data type, than string, for array ["a", "b", "c"]', () => {
        expect(countLetters(["a", "b", "c"])).to.be.null;
    });

    it('should function countLetters() return null for calling function ' +
        'with no argument', () => {
        expect(countLetters()).to.be.null;
    });

    it('should function countLetters() return object for string with letters ' +
        'only ignore case, { d:1, e:1, h:1, l:3, o:2, r:1, w:1 } for ' +
        'string "Hello World"', () => {
        expect(countLetters("Hello World")).to.eql({d:1, e:1, h:1, l:3, o:2, r:1, w:1});
    });

    it('should function countLetters() return object for string ' +
        'with different characters than letters, { d:1, e:1, h:1, l:3, o:2, r:1, w:1 } for ' +
        'string "Hello23  World [1,2] $?!."', () => {
        expect(countLetters("Hello23  World [1,2] $?!.")).to.eql({d:1, e:1, h:1, l:3, o:2, r:1, w:1});
    });
});



describe('Testing function firstNonConsecutive()', () => {
    it('should function firstNonConsecutive() return null for ' +
        'the whole consecutive array, for [-1,0,1,2,3,4,5]', () => {
        expect(firstNonConsecutive([-1,0,1,2,3,4,5])).to.be.null;
    });

    it('should function firstNonConsecutive() return null with no argument', () => {
        expect(firstNonConsecutive()).to.be.null;
    });

    it('should function firstNonConsecutive() return null for argument ' +
        'different data type than array, for string', () => {
        expect(firstNonConsecutive("12345")).to.be.null;
    });

    it('should function firstNonConsecutive() return null for array with length < 2', () => {
        expect(firstNonConsecutive([0])).to.be.null;
    });

    it('should function firstNonConsecutive() return null for array with ' +
        'elements are not numbers, for array ["1", "1", "a"]', () => {
        expect(firstNonConsecutive(["1", "1", "a"])).to.be.null;
    });

    it('should function firstNonConsecutive() return first nonconsecutive number ' +
        'for array with value NaN, NaN for array [-1,NaN,1,3]', () => {
        expect(firstNonConsecutive([-1,NaN,1,3])).to.be.NaN;
    });

    it('should function firstNonConsecutive() return first nonconsecutive number ' +
        'for array with value NaN, -2 for array [-1,-2,NaN,1,3]', () => {
        expect(firstNonConsecutive([-1,-2,NaN,1,3])).to.equal(-2);
    });

    it('should function firstNonConsecutive() return first nonconsecutive number ' +
        'for sorted array with positive numbers, 6 for array [1,2,3,4,6,7,8]', () => {
        expect(firstNonConsecutive([1,2,3,4,6,7,8])).to.equal(6);
    });

    it('should function firstNonConsecutive() return first nonconsecutive number ' +
        'for array with negative and positive numbers, -6 for array [-10, -6, 1,2,3]', () => {
        expect(firstNonConsecutive([-10, -6, 1,2,3])).to.equal(-6);
    });
});