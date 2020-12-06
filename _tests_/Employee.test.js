const { TestScheduler } = require('jest');
const Employee = require('../lib/Employee.js');

test('Creates an employee object', () =>{
    const employee1 = new Employee('billy',1,'a.b@gmail.com')

    expect(employee1.name).toBe('billy')
    expect(employee1.id).toBe(1)
    expect(employee1.email).toBe('a.b@gmail.com')
    expect(employee1.getRole()).toBe('Employee')
});