function isPalindrome(x) {
    if (typeof x === 'string')
        return x.toLowerCase() === x.toLowerCase().split('').reverse().join('');
    else return (x + ' not a String');
}

function unique(arr) {
    return arr.filter((el, i) => arr.indexOf(el) === i);
}

module.exports = {isPalindrome, unique};