const fibonacci = function(num) {
    let sequence = [1, 1];
    if (num > 0) {
        num = parseInt(num);
        for (let i = 2; i < num; i++) {
            sequence.push(sequence[i - 2] + sequence[i - 1]);
        }
        return sequence[num-1];
    } else if (parseInt(num) === 0) {
        return 0;
    } else if (num < 0) {
        return "OOPS";
    }
};
console.log(fibonacci(4));
console.log(fibonacci(6));
// Do not edit below this line
module.exports = fibonacci;
