'use strict'
let user = {
    firstName: 'John',
    lastName: 'Doe',
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },
    set fullName(name) {
        let parts = name.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};

console.log(user.fullName); // John Doe

user.fullName = 'Jane Doe';

console.log(user.firstName); // Jane
console.log(user.lastName); // Doe
console.log(user.fullName); // Jane Doe