// Using Employee constructor
const employee = require('../lib/Employee');

// creating the employee object
test('creates an employee object', () => {
    const employee = new Employee('John', 33, 'john@fakemail.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    exect(employee.email).toEqual(expect.any(String));
});

//return name from getName();
test('returns employee name', () => {
    const employee = new Employee('John', 33, 'john@fakemail.com');

    expect(employee.getName()).toEqual(expect.any(String));
});

//return id from getId();
test('returns employee Id', () => {
    const employee = new Employee('John', 33, 'john@fakemail.com');

    expect(employee.getId()).toEqual(expect.any(Number));
});

//return email from getEmail();
test('returns employee email', () => {
    const employee = new Employee('John', 33, 'john@fakemail.com');

    expect(employee.getEmail()).toEqual(expect.stringContaning(employee.email.toString()));
});

//return role from getRole();
test('returns employee role', () => {
    const employee = new Employee('John', 33, 'john@fakemail.com');

    expect(employee.getRole()).toEqual("Employee");
});