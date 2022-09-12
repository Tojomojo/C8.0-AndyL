// importing the employee constructor
const Employee = require('./Employee');

// manager constructor extends to employee constructor
class manager extends Employee {
    constructor (name, id, email, officeNumber) {
        //caling the employee constructor
        super (name, id, email)

        this.officeNumber = officeNumber;
    }

    //changing employee role to manager
    getRole () {
        return "Manager";
    }
}

// to be exported
module.exports = manager;