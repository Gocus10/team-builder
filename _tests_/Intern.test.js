const Intern = require('../lib/Intern.js');

test('Creates an Intern object', () =>{
    const employee1 = new Intern('billy',1,'a.b@gmail.com','UT');

    expect(employee1.name).toBe('billy');
    expect(employee1.id).toBe(1);
    expect(employee1.email).toBe('a.b@gmail.com');
    expect(employee1.school).toBe('UT');
    expect(employee1.getRole()).toBe('Intern');
});