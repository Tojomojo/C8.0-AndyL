// Using Engineer constructor
const engineer = require('../lib/Engineer');

// creating an engineer object
test('creates an Engineer object', () => {
    const engineer = new engineer('Grace', 34, 'grace@fakemail.com', 'gchoi2u');

    expect(engineer.github).toEqual(expect.any(String));
});

// return github from getGithub()
test('returns enginner github value', () => {
    const engineer = new engineer('Grace', 34, 'grace@fakemail.com', 'gchoi2u');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer,github.toString()));
});

// return role from getRole
test('returns employee role', () => {
    const engineer = new engineer('Grace', 34, 'grace@fakemail.com', 'gchoi2u');

    expect(engineer.getRole()).toEqual("Engineer");
});