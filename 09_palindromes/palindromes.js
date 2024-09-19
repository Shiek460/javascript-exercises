const palindromes = function (string) {
    console.log(string);
    let modified = string
        .replaceAll(",", "")
        .replaceAll(" ", "")
        .replaceAll("!", "")
        .replaceAll(".", "")
        .toLowerCase();
    console.log(modified);
    let reverse = Array.from(modified);
    for (let i = 1; i <= reverse.length; i++) {
        reverse[i - 1] = modified[modified.length - i].toLowerCase();
    }
    reverse = reverse
        .toString()
        .replaceAll(",", "");
    console.log(reverse);
    if (reverse === modified) {
        return true;
    } else {
        return false;
    }
};
console.log(palindromes('Racecar!'));
// Do not edit below this line
module.exports = palindromes;
