/**
 * This function returns an object that has the properties: 'name', 'age', and 'city'.
 *
 * @returns {Object} - An object with properties 'name', 'age', and 'city'.
 *
 * Usage:
 * const person = createPersonObject();
 * // person might be { name: 'John Doe', age: 30, city: 'New York' }
 */
function CreatePersonObject(name, age, city) {
    this.name = name;
    this.age = age;
    this.city = city;
    
}
const person = new CreatePersonObject("John Doe", 30, "New York")
console.log(person);
// Giver fuld rød i checkliste, men jeg har et objekt med alle de givne object-ting - samme problem som i onsdags
/**
 * This function returns the name of the given person object.
 *
 * @param {Object} person - The person object.
 * @returns {string} - The name of the person.
 *
 * Usage:
 * const personName = getPersonName({ name: 'John Doe', age: 30, city: 'New York' });
 * // personName will be 'John Doe'
 */
function getPersonName(person) {
    return person.name
}
const personName = getPersonName({name: 'John Doe', age: 30, city: 'New York' });
console.log(personName);

/**
 * This function finds a person from an array of persons based on their name.
 *
 * @param {Object[]} persons - Array of person objects.
 * @param {string} name - Name of the person to be found.
 * @returns {Object} - The person object with the given name, or null if not found.
 *
 * Usage:
 * const john = findPersonByName([{ name: 'John Doe', age: 30 }, { name: 'Jane Doe', age: 25 }], 'John Doe');
 * console.log(john); // Outputs { name: 'John Doe', age: 30 }
 *
 */

function findPersonByName(persons, name) {
    let realName = "";
    for (let i = 0; i <= persons.length; i++) {
        if (persons[i].name === name) {
            realName = name
        }
    }
    return realName
}
const john = findPersonByName([{name: "John doe", age: 30}, {name: "Jane Doe", age: 30}], "John Doe");
console.log(john);
// persons[i] virker ikke - Kode stopper her hvis man ikke commenter koden, så getTotalAge under kører ikke hvis man ik gør det lol

/**
 * This function calculates the total age of all persons in an array.
 *
 * @param {Object[]} persons - Array of person objects.
 * @returns {Object} - The total age of all persons.
 *
 * Usage:
 * const totalAge = getTotalAge([{ name: 'John Doe', age: 30 }, { name: 'Jane Doe', age: 25 }]);
 * // totalAge will be 55
 */

function getTotalAge(persons) {
    let aggregateAge = 0
    for (let i = 0; i <persons.length ; i++) {
        aggregateAge = aggregateAge + persons[i].age
    }
    return aggregateAge;

}

console.log(getTotalAge([{name: "John Doe", age: 30}, {name: "jane Doe", age: 25}]));
