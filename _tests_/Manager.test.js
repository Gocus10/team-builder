const Manager = require('../lib/Manager.js');

test('Creates an Manager object', () =>{
    const employee1 = new Manager('billy',1,'a.b@gmail.com',12312512);

    expect(employee1.name).toBe('billy');
    expect(employee1.id).toBe(1);
    expect(employee1.email).toBe('a.b@gmail.com');
    expect(employee1.officeNumber).toBe(12312512);
    expect(employee1.getRole()).toBe('Manager');
});