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
        if (jonah.hasOwnProperty(key)) {
            const person1Value = person1[key];
            const person2Value = person2[key];
    
            if (Array.isArray(person1Value) && Array.isArray(person2Value)) {
                const commonArrayValues = person1Value.filter(value => person2Value.includes(value));
                if (commonArrayValues.length > 0) {
                    similarValues[key] = commonArrayValues;
                }
            } else if (person1Value === person2Value) {
                similarValues[key] = person1Value;
            }
        }
    }

    if(similarValues){
        let result = [];
        for (const key in similarValues) {
            const value = similarValues[key];
            result.push(`${key}:  ${value}`);
            }
        if(result.length > 0){
            return `The similarities between both partners are ${[...result]} `;

        }else {
            return `No similarities were found between the two partners`;
        }
    }

  };

  console.log(short(lewis, jonah))