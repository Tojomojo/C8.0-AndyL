// importing the employee constructor
const Employee = require('./Employee');

// engineer constructor extends to employee constructor
class engineer extends Employee {
    constructor (name, id, email, github) {
        //calling the employee constructor
        super (name, id, email);
        
        this.github = github;
    }

    //gtting a github from input
    getGithub () {
        return this.github;
    }

    // change employee role to engineer
    getRole () {
        return "Engineer";
    }
}

// exported to
module.exports = engineer; 