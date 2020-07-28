var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow > 18) {
    greeting = 'Good evening!';
} else if (hourNow > 12) {
    greeting = 'Good afternoon!';
} else if (hourNow > 0) {
    greeting = 'Good morning!';
}else {
    greeting = 'Welcome!';
}

document.write('<h3>' + greeting + '</h3>');

var firstName = prompt('What is your first name?');
var lastName = prompt('What is your last name?');
var age = prompt('What is your age?');

console.log('Your full name is ' + firstName + " " + lastName);
console.log('Your are ' + age + ' ' years old);