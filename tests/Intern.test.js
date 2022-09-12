// Using Intern constructor
const intern = require('../lib/Intern');

// creating an intern object
test('creates an Intern object', () => {
    const intern = new intern('John', 22, 'john@fakemail.com', 'ZUniversity');

    expect(intern.school).toEqual(expect.any(String));
});

// returns school from getSchool
test('get employee school', () => {
    const intern = new intern('John', 22, 'john@fakemail.com', 'ZUniversity');

    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

// return role from getRole
test('returns employee role', () => {
    const intern = new intern('John', 22, 'john@fakemail.com', 'ZUniversity');

    expect(intern.getRole()).toEqual("Intern");
});