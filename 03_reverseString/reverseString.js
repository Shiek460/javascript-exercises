const reverseString = function(string) {
    let reversedString = '';
    //iterate through string
    for (let i = string.length-1; i >= 0; i--) {
        //store each variable in a new string, backwards
        reversedString += string[i];
        //start at end, decrement until 0
    }
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
