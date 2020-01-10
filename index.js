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
it will return phase for last petal in he flower:
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
    if (n < 0 || n > 12) throw new RangeError("Range must be between 0 and 12");
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


module.exports = {isPalindrome, unique, isReallyNaN, howMuchILoveYou, factorial, greet };