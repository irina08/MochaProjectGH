function isPalindrome(x) {
    if (typeof x === 'string')
        return x.toLowerCase() === x.toLowerCase().split('').reverse().join('');
    else return 'Wrong argument';
}

function unique(arr) {
    if (!Array.isArray(arr) || !arr.length)
        return false;
     else
        return arr.filter((el, i) => arr.indexOf(el) === i);
}

const isReallyNaN = (val) => {
    return Number.isNaN(val);
};

module.exports = {isPalindrome, unique, isReallyNaN};