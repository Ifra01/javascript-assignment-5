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

// Question 13 Write a program to take user input and store username 
// in a variable. If the username contains any special symbol 
// among [@ . , !], prompt the user to enter a valid username. 
// For character codes of 
// Note:
// ASCII code of ! is 33
// ASCII code of , is 44
// ASCII code of . is 46
// ASCII code of @ is 64
// answer:
// let userName = prompt("enter your name");
// for(let i=0; i<userName.length;i++){
//     if(userName.charCodeAt(i) == 33 || userName.charCodeAt(i) == 44 || userName.charCodeAt(i) == 46 || userName.charCodeAt(i) == 64){
//         alert("Please enter a valid username!")
//     }
// }

// Question 14 You have an array
// A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array. After searching, prompt the user whether the given
// item is found in the list or not.
// Note: Perform case insensitive search. Whether the user
// enters cookie, Cookie, COOKIE or coOkIE, program
// should inform about its availability. Example:
// answer:
// let A = ["cake", "apple pie", "cookie", "chips", "patties"];
// let userInput = prompt("Welcome to ABC bakery! what do you want to order sir/ma'am?").toLowerCase()
// let flag = false;
// for(let i=0; i<A.length; i++){
//     if(userInput === A[i]){
//         document.write(userInput + " is available at index " + i + " in our bakery")
//         flag = true;
//     }
// }

// if(flag === false){
//     document.write("we're sorry! " + userInput + " is not available at index in our bakery");
// }

// Question 15 Write a program to take password as an input from
// user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements,
// prompt the user to enter a valid password.
// For character codes of a-z, A-Z & 0-9, refer to ASCII
// table at the end of this document.
// answer:
// let password = prompt("Enter your password:");

// if (password.length < 6) {
//     document.write("Password must be at least 6 characters long.");
// } else if (password.charCodeAt(0) >= 48 && password.charCodeAt(0) <= 57) {  
//     document.write("Password should not start with a number.");
// } else {
//     let hasLetter = false;
//     let hasNumber = false;

//     for (let i = 0; i < password.length; i++) {
//         let charCode = password.charCodeAt(i);

//         if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)) {  
//             hasLetter = true;
//         }
//         if (charCode >= 48 && charCode <= 57) {  
//             hasNumber = true;
//         }
//     }

//     if (hasLetter && hasNumber) {
//         document.write("Password accepted!");
//     } else {
//         document.write("Password must contain both letters and numbers." + "Please enter a valid password.");
//     }
// }

// Question 16 Write a program to convert the following string to an
// array using string split method.
// var university = “University of Karachi”;
// Display the elements of array in your browser.
// answer:
// var university = "University of Karachi";  
// var universityArray = university.split(""); 
// for (var i = 0; i < universityArray.length; i++) {
//     document.write(universityArray[i] + "<br>");
// }

// Question 17 Write a program to display the last character of a user
// input.
// answer:
// let userInput = "Pakistan";
// let result = userInput.charAt(7);
// document.write("Userinput is : Pakistan" + "<br />" + "Last character of input is: " + result);

// Question 18 You have a string “The quick brown fox jumps over the
// lazy dog”. Write a program to count number of
// occurrences of word “the” in given string.
// answer:
// let statement = "The quick brown fox jumps over the lazy dog";
// statement = statement.toLowerCase();
// let count = 0;

// for(i=0; i<statement.length; i++){
//     if(statement.slice(i, i+3) == "the"){
//         count++;
//     }
// }

// document.write("The quick brown jumps over the lazy dog" + "<br />" + "There are " + count + " occurences of word 'the'. ");

    // X    -----------------    X    ------------------  X 