/*
a variable for your name
    a variable for your last name
    if you have a middle name, create a variable for it
a variable that will sum the first two variables into your full name, make sure there is a space in between name, middle name and last name.
  print on the console: hello, my name is [NAME HERE]. Make sure to use the variables!
*/
let firstName = "Mantas";
let lastName = "Petrosius"
let fullName = firstName + " " + lastName;
console.log("Hello, my name is "+fullName);
/*
Save your age to a variable
    Save the current year to a variable
    Starting from this two information, print your birth year on the terminal, saving it to a variable.
    If you are uncomfortable sharing this info, you can come up with fake ones.
Use NodeJS in the terminal to see the outcome in the console
BONUS: try to run the code in the browser as well. Add a <script> tag at the end of an html <body> and check the browser’s console for the result.
*/
let age = 24;
let year = 2022;
birthyear = year - age;
console.log("Birth year is "+birthyear);