// Using Manager constructor
const intern = require('../lib/Manager');

// creating a manager object
test('creates an  Manager object', () => {
    const intern = new intern('Jared', 39, 'jared@fakemail.com', 1);

    expect(manager.officeNumber).toEqual(expect.any(Number));
});

// return role from getRole
test('returns employee role', () => {
    const manager = new intern('Jared', 39, 'jared@fakemail.com', 1);

    expect(manager.getRole()).toEqual("Manager");
});