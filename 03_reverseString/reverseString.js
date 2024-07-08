const reverseString = function(string) {
    let result = '';
    let count = string.length - 1;
    for(let i = count; i >= 0; i--){
        result = result.concat(string.at(i));
        
    }
    return result;
};

// Do not edit below this line
module.exports = reverseString;
