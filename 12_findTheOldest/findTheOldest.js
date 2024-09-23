const findTheOldest = function(array) {
    console.log(array);
    let lifeLengths = 
        array.map((person) => {
            if (!person.yearOfDeath) {
                person.yearOfDeath = (new Date()).getFullYear();
                return person.yearOfDeath;
            }
        array.sort((a, b) => {
            return (a.yearOfDeath - a.yearOfBirth) < (b.yearOfDeath - b.yearOfBirth) ? -1 : 1;
            })
        return person;
    });
    return array[array.length-1];
};

const people = [
    {
        name: "Carly",
        yearOfBirth: 1066,
      },
      {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
      },
      {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
      },
]

findTheOldest(people);

// Do not edit below this line
module.exports = findTheOldest;
