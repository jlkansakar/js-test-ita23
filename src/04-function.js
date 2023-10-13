/**
 * This function generates a personalized message based on the user's name and age.
 *
 * @param {string} name - Name of the user.
 * @param {number} age - Age of the user.
 * @returns {string} - Personalized message for the user.
 *
 * Usage:
 * const message = generateMessage("Jack", 25); // message will be "Hey Jack, at 25, you are in the prime of your life!"
 */
function generateMessage(name, age) {
    if (age < 20) {
        return "Hey" + " " + name + ", at" + " " + age + ", you have your whole life ahead of you!"
    }
    if (age < 30) {
        return "Hey" + " " + name + ", at" + " " + age + ", you are in the prime of your life!"
    }
}
const message = generateMessage("Jack", 25);
console.log(message)
// Ved ikke lige hvorfor den ikke giver god for "non-standard name" men oh well
/**
 * This function capitalizes the first letter of every word in a sentence.
 *
 * @param {string} sentence - The sentence to be title cased.
 * @returns {string} - The title cased sentence.
 *
 * Usage:
 * const title = titleCase("hello world"); // title will be "Hello World"
 */
const titleCase = sentence => sentence.split(" ").map(w => w.substring(0,1).toUpperCase()+w.substring(1)).join(" ")

const title = titleCase("hello world");
console.log(title);
/**
 * This function returns the sum of a range of numbers in an array.
 *
 * @param {number} start - The starting number.
 * @param {number} end - The ending number.
 * @returns {number} - The sum of the range.
 *
 * Usage:
 * const sum = sumOfRange(1, 4); // sum will be 10
 */
function sumOfRange(start, end) {
    let sum = 0;
    for (let i = start; i <= end; i++) {
        sum = sum + i;
    }
    return sum;
}

console.log(sumOfRange(1,4));





