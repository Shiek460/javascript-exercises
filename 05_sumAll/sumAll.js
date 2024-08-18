const sumAll = function(num, num2) {
    let sum = 0;
    if (num < 0 || num2 < 0) {
        return "ERROR";
    } else if (num % 1 != 0 || num2 % 1 != 0 ) {
        return "ERROR";
    } else if (typeof(num) !== 'number' || typeof(num2) !== 'number') {
        return "ERROR"
    } else if (num < num2) {
        for (i = num; i <= num2; i++) {
            sum += i;
        }
    } else if (num2 < num) {
        for (i = num2; i <= num; i++) {
            sum += i;
        }
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
