var firstName = prompt('What is your first name?');
var lastName = prompt('What is your last name?');
var age = prompt('What is your age?');

console.log('Your full name is ' + firstName + " " + lastName);

console.log('Your are ' + age + ' ' + 'years old');

var txt;

if (confirm("Proceed to website?")) {
    txt = "Enjoy!";
  } else {
    txt = "Hope to see you again!";
  }

alert(txt);

function greeting() {

var today = new Date()
var curHr = today.getHours()
var greetings;

  if (curHr < 12) {
    greetings = 'Good morning!';
  } else if (curHr < 18) {
    greetings = 'Good afternoon!';
  } else {
    greetings = 'Good evening!';
}

document.write('<h3>' + greetings + '</h3>');
}