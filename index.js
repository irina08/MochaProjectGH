function isPalindrome(x) {
    if (typeof x === 'string')
        return x.toLowerCase() === x.toLowerCase().split('').reverse().join('');
    else return (x + ' not a String');
}

function unique(arr) {
    if (!Array.isArray(arr) || !arr.length)
        return false;
     else
        return arr.filter((el, i) => arr.indexOf(el) === i);
}

module.exports = {isPalindrome, unique};