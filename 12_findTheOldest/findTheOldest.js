const findTheOldest = function(people) {
  const today = new Date();
  let oldest = {
    name: people[0].name,
    age: 0
  };
  for (person of people) {
    let death = 'yearOfDeath' in person 
      ? person.yearOfDeath : today.getFullYear();
    let age = death - person.yearOfBirth;
    if (age >= oldest.age) {
      oldest.name = person.name;
      oldest.age = age;
    }
  }
  for (person of people) {
    if (person.name === oldest.name) {
      return person;
    }
  }
};

// Do not edit below this line
module.exports = findTheOldest;
