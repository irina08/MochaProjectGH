/*
It checks if a given one-word string (case insensitive) is a palindrome.
If argument not a String or no argument or contains more than 1 word
it will return 'Wrong argument'.
 */
function isPalindrome(x) {
    if (typeof x === 'string' && x.split(' ').length === 1)
        return x.toLowerCase() === x.toLowerCase().split('').reverse().join('');
    else return 'Wrong argument';
}


/*
It takes an Array and returns it free of duplicates. If argument not an array
or empty array, or no argument, it will return false. Other way it will return
array without duplicates.
 */
function unique(arr) {
    if (!Array.isArray(arr) || !arr.length)
        return false;
     else
        return arr.filter((el, i) => arr.indexOf(el) === i);
}


/*
It returns true only if passed in an argument that evaluates to NaN,
and returns false otherwise.
 */
function isReallyNaN(val) {
    return Number.isNaN(val);
};


/*
it will return phase for last petal in the flower:
'I love you' for first petal; 'a little' for second petal;
'a lot' for third petal; 'passionately' for fourth petal;
'madly' for fifth petal; 'not at all' for six petal
and continue again to the last petal.
Return string 'No petals' if petals <= 0;
 */
function howMuchILoveYou(nbPetals) {
    const str = [
        'not at all',
        'I love you',
        'a little',
        'a lot',
        'passionately',
        'madly'
    ]
    if(typeof nbPetals !== 'number' || nbPetals <= 0) return 'Please provide number of petals';
    else return str[nbPetals % str.length];
}


/*
It calculates factorial for a given input. If input is below 0 or above 12 it
throw an exception of type ArgumentOutOfRangeException
 */
function factorial(n)
{
    if (n < 0 || n > 12) {
        throw new RangeError('Range must be between 0 and 12');
    }
    return (n > 0) ? n * factorial(n - 1) : 1;
}


/*
It takes a parameter 'language' (always a string), and returns a greeting -
if we have it in our database. It should default to English if the language
is not in the database, or in the event of an invalid input.
 */
function greet(language) {
    const database = {
        english: 'Welcome',
        czech: 'Vitejte',
        danish: 'Velkomst',
        dutch: 'Welkom',
        estonian: 'Tere tulemast',
        finnish: 'Tervetuloa',
        flemish: 'Welgekomen',
        french: 'Bienvenue',
        german: 'Willkommen',
        irish: 'Failte',
        italian: 'Benvenuto',
        latvian: 'Gaidits',
        lithuanian: 'Laukiamas',
        polish: 'Witamy',
        spanish: 'Bienvenido',
        swedish: 'Valkommen',
        welsh: 'Croeso'
    };
    return database[language] || database.english;
}


/*
It return true, if ATM machine Pin Code contains exactly 4 digits or exactly 6 digits.
Other way it will return false. It accept only strings.
 */
function validatePIN(pin) {
    return /^(\d{4}|\d{6})$/.test(pin)
}


/* It returns the digits of given positive integer number within an
array in reverse order. In other way return empty array.
 */
function digitize(n) {
    if (typeof n === 'number' && n >=0 && Number.isInteger(n) && String(n).length > 0)
        return String(n).split('').reverse().map(Number)
    else return [];
}

/* It counts the letters in a string in object notation.
Input
A string. Case-insensitive. Ignore whitespace. Ignore anything not a-z.
If input is anything other than a string, it should return null
Output
Should be an object of the letters and how often they show up. e.g. { d:1 e:1 h:1 l:3 o:2 r:1 w:1 }
 */
function countLetters (str) {
    if(typeof str !== 'string') return null;
    let obj = {};
    str = str.toLowerCase().replace(/[^a-zA-Z]/g,'');
    for(let i = 0; i < str.length; i++) {
        if(obj[str[i]]) {
            obj[str[i]] = obj[str[i]] + 1;
        } else {
            obj[str[i]] = 1;
        }
    }
    return obj;
}


/*
It returns the first element of an array that is not consecutive.
If the whole array is consecutive it returns null.
Input: The array always has at least 2 elements1 and all elements are numbers.
The numbers are also all be unique and in ascending order.
The numbers could be positive or negative
 */
function firstNonConsecutive (arr) {
    if(Array.isArray(arr) && arr.length >=2 && arr.every(el => typeof el === 'number')) {
        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] + 1 !== arr[i + 1]) {
                return arr[i + 1];
            }
        }
    }
    return null;
}


module.exports = {isPalindrome, unique, isReallyNaN, howMuchILoveYou, factorial, greet, validatePIN, digitize, countLetters, firstNonConsecutive  };