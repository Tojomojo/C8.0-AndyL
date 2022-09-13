// importing the employee constructor
const Employee = require('./Employee');

// intern constructor extends to employee constructor
class intern extends Employee {
    constructor (name, id, email, school) {
        // calling the employee constructor
        super (name, id, email);

        this.scool = school;
    }

    // getting a school from input
    gitSchool () {
        return this.school;
    }

    //changing employee role to intern
    getRole () {
        return "Intern";
    }
}

// to be exported
module.exports = intern;