// Team 7 activity : <@696140711896023110> <@845647272326987786> //
const lewis = {
    name: 'Lewis',
    age: 20,
    hobbies: ['video game', 'comedy', 'drumming', 'coding'],
    music: 'reggea',
    gender: 'male',
    relationship_status: 'single',
    country: 'Nigeria',
    language: ['English', 'Chinese', 'Igbo'],
    discipline: 'Computer Science',
    vacation: ['Philippines', 'Bahamas'],
    favourite_food: ['Spaghetti', 'Rice'],
    sport: ['football', 'boxing']
};
const jonah = {
    name: 'Jonah',
    age: 20,
    hobbies: ['video game', 'research', 'swimming', 'flying'],
    music: 'R&B',
    gender: 'male',
    relationship_status: 'single',
    country: 'Nigeria',
    language: ['English', 'Chinese', 'French', 'Yoruba'],
    discipline: 'Aeronautically Engr',
    vacation: ['USA', 'Canada', 'Bahamas'],
    favourite_food: ['Spaghetti', 'Rice'],
    sport: ['football', 'tennis', 'basketball']
};

const similarValues = {};
const short = function findSimilarities(person1, person2) {
    const similarValues = [];
    for (const key in person1) {
        if (person2.hasOwnProperty(key)) {
            const person1Value = person1[key];
            const person2Value = person2[key];
    
            if (Array.isArray(person1Value) && Array.isArray(person2Value)) {
                // Compare arrays for similarity
                const commonArrayValues = person1Value.filter(value => person2Value.includes(value));
                if (commonArrayValues.length > 0) {
                    similarValues[key] = commonArrayValues;
                }
            } else if (person1Value === person2Value) {
                // Compare non-array values
                similarValues[key] = person1Value;
            }
        }
    }
}

// if(similarValues){
//     let result = [];
//     for (const key in similarValues) {
//         const value = similarValues[key];
//         result.push(`${key}:  ${value}`);
//         }
//     if(result.length > 0){
//         return `The similarities between both partners are ${[...result]} `;

//     }else {
//         return `No similarities were found between the two partners`;
//     }
// };

console.log(short(lewis, jonah))

// **Expected Output**

// 
// relationship_status: 'single',
// country: 'Nigeria',
// language: [ 'English', 'Chinese' ],
// favourite_food: [ 'Spaghetti', 'Rice' ],
// sport: [ 'football' ]
// This code is designed to compare two JavaScript objects,** lewis** and **jonah**, and identify similar values between them, including values within arrays. The purpose is to find shared attributes and characteristics between the two objects.

// i. Two objects, **lewis **and **jonah**, are defined, each containing various properties like name, age, hobbies, music preferences, and more, representing information about two individuals.

// ii. An empty object, **similarValues**, is created. This object will hold the keys and values that are similar between the two objects.

// iii. A **for...in** loop is used to iterate through the keys (properties) of the **lewis **object.

// iv. For each key, the code checks if the **jonah **object also has the same key using the **hasOwnProperty **method.

// v. If both objects have the same key, the values corresponding to that key are retrieved from both objects.

// vi. If the values for a key are arrays in both objects, the code filters out the common values between those arrays using the **filter **method and the **includes **method. These common array values are added to the **similarValues **object with the key as the property name.

// vii. If the values are not arrays but are equal, the key and value pair are added directly to the **similarValues **object.

// viii. Once all the keys have been checked, the **similarValues **object contains pairs of keys and similar values.

// ix. Finally, the **similarValues **object is logged to the console, showing the properties that have similar values in both objects, including those within arrays

