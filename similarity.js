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

function findSimilarities(person1, person2) {
    const array = [];
        for (const key in person1) {
            if (person1[key] === person2[key]) {
               array.push[key];
            }

            if(Array.isArray(person1[key])){
                let longestArray;
                let shortestArray; 

                if (person1[key].length > person2[key].length) {
                    longestArray = person1[key];
                    shortestArray = person2[key];
                } else {
                    longestArray = person2[key];
                    shortestArray = person1[key];
                }  

                for (let i = 0; i < longestArray.length; i++) {
                    if (longestArray.includes(shortestArray[i])) { 
                        if (!array.includes(key)) {
                          array.push(key);  
                        }
                    }
                }
            }     
        } 

    if(array.length > 0){
        return `The similarities between both partners are ${array.join(", ")}.`;
    } else {
        return `No similarities were found between both partners.`;
    }

  };

console.log(findSimilarities(lewis, jonah))

const similarValues = {};
const short = function findSimilarities(person1, person2) {

        for (const key in person1) {
            if (person1[key] === person2[key]) {
                similarValues[key] = person1[key];
            }
        }
    if(similarValues){
        let result = [];
        for (const key in similarValues) {
            const value = similarValues[key];
            result.push(`${key}:  ${value}`);
          }
        return `The similarities between both partners are ${[...result]} `;
    } else {
        return `No similarities were found between the two partners`;
    }

  };

console.log(short(lewis, jonah))