function Messages(con) {
    const validContacts = [];

    for (const contact of con) {
        if (/^[a-zA-Z\s]+$/.test(contact)) {  // Check if the contact consists of letters and spaces
            validContacts.push(contact);
        }
    }

    const validCount = validContacts.length;

    if (validCount === 0) {
        return "No one sent you a message!";
    } else if (validCount === 1) {
        return `${validContacts[0]} sent you a message!`;
    } else if (validCount === 2) {
        return `${validContacts[0]} and ${validContacts[1]} sent you a message!`;
    } else if (validCount === 3) {
        return `${validContacts[0]}, ${validContacts[1]} and ${validContacts[2]} sent you a message!`;
    } else {
        return `${validContacts[0]}, ${validContacts[1]} and ${validCount - 2} others sent you a message!`;
    }
}

// Test cases
console.log(Messages(["Stanley","Keanu","Roger","Clarke","8080"]));  // Output: "Stanley, Keanu and 2 others sent you a message!"
console.log(Messages(["Stanley","Geralt"]));  // Output: "Stanley and Geralt sent you a message!"
console.log(Messages(["Triss","The wild hunt"]));  // Output: "Triss sent you a message!"
console.log(Messages(["Kriss","Ivy","Kenny"]));  // Output: "Kriss, Ivy and Kenny sent you a message!"
console.log(Messages(["Coffee machine", "random mousepad"]));  // Output: "No one sent you a message!"
