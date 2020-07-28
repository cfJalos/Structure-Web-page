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