
function robot()  {

  var num = 0;
  while(num !== 2){
  num = parseInt(prompt("Are you a robot? if not 1 + 1"));
  }
  
  console.log('Your answer is' + num);
  
}

robot();


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