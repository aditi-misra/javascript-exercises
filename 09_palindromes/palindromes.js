const palindromes = function (string) {
    //first we create a string with all valid characters ie all alphanumerical lowercase characters
    const valid = 'abcdefghijklmnopqrstuvwxyz0123456789';
    
    //now to create the valid string
    const newString = string
        .toLowerCase()
        .split('')
        .filter((character) => valid.includes(character))
        .join('');

    const reverse = newString.split('').reverse().join('');

    return reverse === newString;
};

// Do not edit below this line
module.exports = palindromes;
