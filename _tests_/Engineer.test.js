const Engineer = require('../lib/Engineer.js');

test('Creates an Engineer object', () =>{
    const employee1 = new Engineer('billy',1,'a.b@gmail.com','Gocus10');

    expect(employee1.name).toBe('billy');
    expect(employee1.id).toBe(1);
    expect(employee1.email).toBe('a.b@gmail.com');
    expect(employee1.gitHub).toBe('Gocus10');
    expect(employee1.getRole()).toBe('Engineer');
});