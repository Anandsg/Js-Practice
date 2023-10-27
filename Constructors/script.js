const Person = function (firstName, birthDate) {

    this.firstName = firstName;
    this.birthDate = birthDate;
};

const Anand = new Person('Anand', 1999);
console.log(Anand);

const Virat = new Person('Kohli', 1888);
console.log(Virat);

// Behind the scenes
// 1. New {} is created
// 2. function is called, this = {}
// 3. {} linked to function
// 4. function automatically return {}
