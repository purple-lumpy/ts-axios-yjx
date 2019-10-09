function greeter(person) {
    return 'Hello ' + person.firstName + ' ' + person.lastName;
}
var user = {
    firstName: 'Y',
    lastName: 'X'
};
console.log(greeter(user));
