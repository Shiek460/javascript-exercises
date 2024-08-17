const removeFromArray = function(array, ...elements) {
    for (let i = 0; i < elements.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[j] === elements[i]) {
                array.splice(j, 1);
            }
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
