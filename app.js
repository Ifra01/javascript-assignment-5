// ASSIGNMENT - 5

// CHAPTER - String Methods

// Question 1 Write a program that takes two user inputs for first
// and last name using prompt and merge them in a new variable titled fullName.
// Greet the user using his full name. 
// answer:
// let firstName = prompt("enter your first name");
// let lastName = prompt("enter your last name");
// alert("hello " + firstName + " " + lastName);

// Question 2 Write a program to take a user input about his favorite
// mobile phone model. Find and display the length of user input in your browser.
// answer:
// let userFavPhone = prompt("enter your favourite phone model");
// document.write("your favourite phone model is " + userFavPhone + " and it's length is " + userFavPhone.length);

// Question 3 Write a program to find the index of letter “n” in the word “Pakistani” and
// display the result in your browser.
// answer:
// let nationality = "Pakistani";
// document.write("nationality: " + nationality + "<br />" + "Length of 'n': " + nationality.indexOf('n'));

// Question 4 Write a program to find the last index of letter “l” in the word “Hello World” and 
// display the result in your browser.
// answer:
// let msg = "Hello World";
// document.write("message: " + msg + "<br />" + "last length of 'l': " + msg.lastIndexOf('l'));

// Question 5 Write a program to find the character at 3rd index in the word “Pakistani”
// and display the result in your browser.
// answer:
// let nationality = "Pakistani";
// document.write("nationality: " + nationality + "<br />" + "character at third index: " + nationality.charAt(3));

// Question 6 Repeat Q1 using string concat() method.
// answer:
// let firstName = prompt("enter your first name");
// let lastName = prompt("enter your last name");
// alert("Hello " + firstName.concat(" " + lastName));

// Question 7 Write a program to replace the “Hyder” to “Islam” in the word “Hyderabad” and display 
// the result in your browser.
// answer:
// let city = "Hyderabad";
// let replacing = city.replace("Hyder", "Islam");
// document.write("name of city: " + city + "<br />" + "After replacing: " + replacing);

// Question 8 Write a program to replace all occurrences of “and” in the string with “&” and display 
// the result in your browser.
// answer:
// let message = "Ali and Sami are best friends. They play cricket and football together."
// let replacing = message.replaceAll("and", "&");
// document.write("before replacement: " + message + "<br />" + "after replacement: " + replacing);

// Question 9  Write a program that converts a string “472” to a number 472. Display the values &
// types in your browser.
// answer:
// let string = "472";
// let conversion = +string;
// document.write("value then: " + string + "<br />" + "Type: " + typeof(string) + "<br />" + "value now: " 
// + conversion + "<br />" + "Type: " + typeof(conversion));

// Question 10 Write a program that takes user input. Convert and show the input in capital letters.
// let userInput = prompt("enter any word to capitalize");
// let response = userInput.toUpperCase();
// document.write("user input is: " + userInput + "<br />" + "after making it capitalize: " + response);

// Question 11 Write a program that takes user input. Convert and show the input in title case.
// answer: 
// let userInput = prompt("enter a word in any random case");
// let response = userInput.slice(0,1).toUpperCase() + userInput.slice(1).toLowerCase();
// document.write("user input is: " + userInput + "<br />" + "In title case: " + response);

// Question 12 Write a program that converts the variable num to string. var num = 35.36 ; Remove the dot 
// to display “3536” display in your browser. 
// answer: 
// let number = 35.36;
// let string = number.toString();
// let indexOfDot = string.indexOf('.');
// let result = string.slice(0,indexOfDot) + string.slice(indexOfDot + 1);
// document.write("before: " + number + "<br />" + "after: " + result);