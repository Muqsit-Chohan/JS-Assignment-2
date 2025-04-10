//  Chapter 5 Start --------------------------------------------------------------------------------

// Question 1 ____________________________________________________________________________________

// 1. Write a program that take two numbers & add them in a new variable. Show the result in your browser.  

// let a = +prompt("Enter a number");
// let b = +prompt("Enter a number");
// number = alert (a + b);

// Question 2 ____________________________________________________________________________________

// 2. Repeat task1 for subtraction, multiplication, division & modulus.  

// let a = +prompt("Enter a number");
// let b = +prompt("Enter a number");
// let chrtr = prompt("Enter.. +, -, x, %");

// if(chrtr == '+'){
//     alert (number = a + b);
// } else if(chrtr == '-'){
//     alert (number = a - b);
// } else if(chrtr == 'x'){
//     alert (number = a * b);
// } else if(chrtr == '%'){
//     alert (number = a % b);
// } else {
//     alert ("please enter right values");
// }

// Question 3 ____________________________________________________________________________________

// 3. Do the following using JS Mathematic Expressions 
// a. Declare a variable.  
// b. Show the value of variable in your browser like “Value after variable declaration is: ??”.  
// c. Initialize the variable with some number.  
// d. Show the value of variable in your browser like “Initial value: 5”.  
// e. Increment the variable.  
// f. Show the value of variable in your browser like “Value after increment is: 6”.  
// g. Add 7 to the variable.  
// h. Show the value of variable in your browser like “Value after addition is: 13”.  
// i. Decrement the variable.  
// j. Show the value of variable in your browser like “Value after decrement is: 12”.  
// k. Show the remainder after dividing the variable’s value  by 3.   
// l. Output : “The remainder is : 0”. 

// var myVar;
// document.write("Value after variable declaration is:" + myVar + "<br>");
// myVar = 5;
// document.write("Initial value: " + myVar + "<br>");
// myVar++;
// document.write("Value after Increment: " + myVar + "<br>");
// myVar += 7;
// document.write("Value after addition: " + myVar + "<br>");
// myVar--;
// document.write("Value after decrement: " + myVar + "<br>");
// var remainder = myVar % 3;
// document.write("The remainder is " + remainder);

// Question 4 ____________________________________________________________________________________

// 4. Cost of one movie ticket is 600 PKR. Write a script to  store ticket price in a variable & calculate the cost of buying 5 tickets  to a movie. Example output: 

// let ticketPrice = 600;
// let ticketPurchase = +prompt("Which tickets you buy");
// ticket = ticketPrice * ticketPurchase;
// document.write(`Total case to buy ${ticketPurchase} tickets to a movie is ${ticket}`);

// Question 5 ____________________________________________________________________________________

// 5. Write a script to display multiplication table of any  number in your browser. E.g 

// let table = +prompt("Enter number for table");

// for(i = 1; i <= 10; i++){
//     document.write(table + '  ' + ' x ' + i + ' = ' + table*i + '<br>');
// }

// Question 6 ___________________________________________________________________________________

// 6. The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here.  
// a. Store a Celsius temperature into a variable.  
// b. Convert it to Fahrenheit & output “NNoC is NNoF”. 
// c. Now store a Fahrenheit temperature into a variable. 
// d. Convert it to Celsius & output “NNoF is NNoC”.

// let celsiusTemp = 25;

// let fahrenheitTemp = (celsiusTemp * 9/5) + 32;
// console.log(`${celsiusTemp}°C is ${fahrenheitTemp}°F`);

// let fahrenheitTemp2 = 77;

// let celsiusTemp2 = (fahrenheitTemp2 - 32) * 5/9;
// console.log(`${fahrenheitTemp2}°F is ${celsiusTemp2}°C`);

// Question 7 ____________________________________________________________________________________

// 7. Write a program to implement checkout process of a shopping cart system for an e-commerce website. Store the following in variables 
// a. Price of item 1  
// b. Price of item 2  
// c. Ordered quantity of item 1  
// d. Ordered Quantity of item 2  
// e. Shipping charges  
// Compute the total cost & show the receipt in your browser.

// let priceItem1 = 650;
// let priceItem2 = 100;
// let shippingCharges = 100;

// let quatityItem1 = +prompt("Quatity of item 1");
// let quatityItem2 = +prompt("Quatity of item 2");

// item1 = priceItem1 * quatityItem1;
// item2 = priceItem2 * quatityItem2;

// document.write(`Price of item 1 is ${priceItem1} <br>`);
// document.write(`Quantity of item 1 is ${quatityItem1} <br>`);
// document.write(`Price of item 1 is ${priceItem2} <br>`);
// document.write(`Quantity of item 1 is ${quatityItem2} <br>`);
// document.write(`Shipping Charges ${shippingCharges} <br>`);

// totalCost = item1 + item2 + shippingCharges;
// document.write(`Total cost of your order is: ${totalCost}`);

// Question 8 ____________________________________________________________________________________

// 8. Store total marks & marks obtained by a student in 2 variables. Compute the percentage & show the result in your browser 

// let totalMarks = 500;
// let marksObtained = 375;

// let percentage = (marksObtained / totalMarks) * 100;

// document.write(`Total Marks: ${totalMarks}`);
// document.write(`Marks Obtained: ${marksObtained}`);
// document.write(`Percentage: ${percentage}`);

// alert(`You scored ${marksObtained} out of ${totalMarks} (${percentage}%)`);

// Question 9 ____________________________________________________________________________________

// 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a  script to convert the total currency to Pakistani Rupees.  Perform all calculations in a single expression.  
// (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee and 1 Saudi Riyal = 28 Pakistani Rupee) 

// const totalInPKR = (10 * 104.80) + (25 * 28);
// console.log(`Total amount in Pakistani Rupees: ${totalInPKR} PKR`);

// Question 10 ____________________________________________________________________________________

// 10. Write a program to initialize a variable with some number and do arithmetic in following sequence:  
// a. Add 5  
// b. Multiply by 10  
// c. Divide the result by 2  
// Perform all calculations in a single expression  

// const initialNumber = 8;

// const result = ((initialNumber + 5) * 10) / 2;

// console.log(`Initial number: ${initialNumber}`);
// console.log(`After adding 5: ${initialNumber + 5}`);
// console.log(`After multiplying by 10: ${(initialNumber + 5) * 10}`);
// console.log(`Final result: ${result}`);

// Question 11 ____________________________________________________________________________________

// 11. The Age Calculator: Forgot how old someone is? Calculate it!  
// a. Store the current year in a variable.  
// b. Store their birth year in a variable.  
// c. Calculate their 2 possible ages based on the stored  values.  
// Output them to the screen like so: “They are either NN or NN years old”. 

// let currentYear = 2025;
// let birthYear = 2002;

// let age1 = currentYear - birthYear;
// console.log(`You are ${age1} years old.`);

// Question 12 ____________________________________________________________________________________

// 12. The Geometrizer: Calculate properties of a circle. 
// a. Store a radius into a variable.
// b. Calculate the circumference based on the radius, and output “The circumference is NN”.  
//(Hint : Circumference of a circle = 2 π r , π = 3.142)  
//Calculate the area based on the radius, and output “The area is NN”. (Hint : Area of a circle = π r2, π = 3.142)  

// let radius = 7;
// let circumference = 2 * Math.PI * radius;
// let area = Math.PI * Math.pow(radius, 2);

// console.log(`The radius is: ${radius}`);
// console.log(`The circumference is: ${circumference}`);
// console.log(`The area is: ${area}`);

// Question 13 ____________________________________________________________________________________

// 13. The Lifetime Supply Calculator: Ever wonder how much a “lifetime supply” of your favorite snack is?  Wonder no more.  
// a. Store your favorite snack into a variable  
// b. Store your current age into a variable.  
// c. Store a maximum age into a variable.  
// d. Store an estimated amount per day (as a number). e. 
// Calculate how many would you eat total for the rest of your life.  
//Output the result to the screen like so: “You will need NNNN to last you until the ripe old age of NN”. 

// let favtSnack = "Waffers";
// let currAge = 23;
// let maxAge = "Don't know";
// let perDay = 2;

// let remainingYear = (maxAge - currAge) * 365 * perDay;

// document.write(`The Life Time Supply Calculator`);
// document.write(`Favourite Snack: ${favtSnack}<br>`);
// document.write(`current age: ${currAge}<br>`);
// document.write(`Estimated Maximum Age: ${maxAge}<br>`);
// document.write(`Ammount Per Day: ${perDay}<br>`);
// document.write(`You will need ${remainingYear} ${favtSnack} to last you until the ripe old age of ${maxAge}<br>`);



//     Chapter 5 End --------------------------------------------------------------------------------



//     Chapter 6-9 Start ----------------------------------------------------------------------------




// Question 1 ____________________________________________________________________________________

// 1. Write a program to take a number in a variable, do the required arithmetic to display the following result in your browser:  

//let a = 10;
// document.write(`The value of a is: ${a}<br>`);

// ++a;
// document.write(`the value of ++a is:${a}<br>`);

// a++;
// document.write(`the value of a++ is: ${a}`);

// --a;
// document.write(`the value of --a is: ${a}<br>`);

// a--;
// document.write(`the value of a--: ${a}<br>`)

// Question 2 ____________________________________________________________________________________


// 2. What will be the output in variables a, b & result after execution of the following script:  
// var a = 2, b = 1;  
// var result = --a - --b + ++b + b--;  
// Explain the output at each stage:  
// --a;  
// --a - --b;  
// --a - --b + ++b;  
// --a - --b + ++b + b--; 


// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
//
// --a;
// --a - --b;
// --a - --b + ++b;
// --a - --b + ++b + b--;
// var a = 2;
// var b = 1;

// Question 3 ____________________________________________________________________________________

// 3. Write a program that takes input a name from user & greet the user.  

// let userName = "Abdul Muqsit Chohan";
// alert(`welcome back ${userName}`);

// Question 4,5 ____________________________________________________________________________________

//4.  
//5. Write a program to take input a number from user &  display it’s multiplication table on your browser. If user  does not enter a new number, multiplication table of 5  should be displayed by default.  

// let table = +prompt("Enter number for table");
// let defaultNum = 5;
// if(table)
//     for(i = 1; i <= 10; i++){
//         document.write(table + '  ' + ' x ' + i + ' = ' + table*i + '<br>');
//     }
// else{
//     for(i = 1; i <= 10; i++){
//         document.write(defaultNum + '  ' + ' x ' + i + ' = ' + defaultNum*i + '<br>');
//     }
// }

// Question 6 ____________________________________________________________________________________

//6. Take  
// a) Take three subjects name from user and store them in 3  different variables.  
// b) Total marks for each subject is 100, store it in another variable.  
// c) Take obtained marks for first subject from user and stored it in different variable. 
// d) Take obtained marks for remaining 2 subjects from user and store them in variables.  
// e) Now calculate total marks and percentage and show the result in browser like this.(Hint: user table) 

// let subj1 = prompt("enter a first subject name:");
// let subj2 = prompt("enter a second subject name:");
// let subj3 = prompt("enter a  third subject name:");

// totalMarksPerSubj = 100;
// let totalMarks = 100 * 3;

// subj2Marks = +prompt("enter a second subject marks");
// subj1Marks = +prompt("enter a first subject marks");
// subj3Marks = +prompt("enter a third subject marks");

// let obtainMarks = subj1Marks + subj2Marks + subj3Marks;
// let percentage = (obtainMarks / totalMarks) * 100;
// document.write(`<table border="1" cellspacing="0" cellpadding="10">
//        <tr> 
//         <th>Subject</th>
//         <th>Total Marks</th>
//         <th>Obtained Marks</th>
//         <th>Percentage</th>
//        <tr> 

//         <tr>
//             <td>${subj1}</td>
//             <td>${totalMarksPerSubj}</td>
//             <td>${subj1Marks}</td>
//             <td>${((subj1Marks / totalMarksPerSubj) * 100).toFixed(2)}</td>
//         </tr>
//                 <tr>
//             <td>${subj2}</td>
//             <td>${totalMarksPerSubj}</td>
//             <td>${subj3Marks}</td>
//             <td>${((subj2Marks / totalMarksPerSubj) * 100).toFixed(2)}</td>
//         </tr>
//         <tr>
//             <td>${subj3}</td>
//             <td>${totalMarksPerSubj}</td>
//             <td>${subj3Marks}</td>
//             <td>${((subj3Marks / totalMarksPerSubj) * 100).toFixed(2)}</td>
//         </tr>

//         <tr>
//             <td></td>
//             <td>${totalMarks}</td>
//             <td>${obtainMarks}</td>
//             <th>${percentage.toFixed(2)}%</th>
//         </tr>
//     </table>`);




//    Chapter 6-9 End --------------------------------------------------------------------------------


//    Chapter 14-16 Start ----------------------------------------------------------------------------



// Question 1 ____________________________________________________________________________________

// 1. Declare an empty array using JS literal notation to store student names in future.  

// let students = ["Abdul Muqsit","Zain","Aun"];
// document.write();

// Question 3 ____________________________________________________________________________________

// 3. Declare and initialize a strings array.  

// let students = ["Abdul Muqsit","Zain","Aun"];
// document.write();

// Question 4 ____________________________________________________________________________________

// 4. Declare and initialize a numbers array. 

// let number = [3,7,5,3];
// console.log(number)

// Question 5 ____________________________________________________________________________________

// 5. Declare and initialize a boolean array. 

// let booleanArray = [true,false,true,true]
// document.write(booleanArray)

// Question 6 ____________________________________________________________________________________

// 6. Declare and initialize a mixed array. 

// let mixArray = ["Abdul Muqsit",23,true,1.5];
// console.log(mixArray);

// Question 7 ____________________________________________________________________________________

// 7. Declare and Initialize an array and store available education qualifications in Pakistan (e.g. SSC, HSC, BCS, BS, BCOM, MS, M. Phil., PhD). Show the listed  qualifications in your browser like:

// let pakistanEducation = ["SSC","HSC","BCS","BS","BCOM","MS","M,Phil","Phd"];
// document.write(`Qualifications: ${pakistanEducation}%<br>`);

// Question 8 ____________________________________________________________________________________

// 8. Write a program to store 3 student names in an array.Take another array to store score of these three students. Assume that total marks are 500 for each student, display  the scores & percentages of students like: 

// let students = ["Abdul Muqsit","Zain","Aun"];
// let scores = [410,360,450];

// let totalMarks = 500;

// for (let i = 0; i < students.length; i++) {
//     let percentage = scores[i]/totalMarks*100
//     document.write(`student of ${students[i]} score ${scores[i]} and the percentage is ${percentage}%<br>`);
// }


// Question 9 ____________________________________________________________________________________

// 9. Initialize an array with color names. Display the array 
// elements in your browser.  
// a. Ask the user what color he/she wants to add to the beginning & add that color to the beginning of the array. Display the updated array in your browser.  
// b. Ask the user what color he/she wants to add to the end  & add that color to the end of the array. Display the  updated array in your browser.  
// c. Add two more color to the beginning of the array.  Display the updated array in your browser.  
// d. Delete the first color in the array. Display the updated array in your browser.  
// e. Delete the last color in the array. Display the updated array in your browser.  
// f. Ask the user at which index he/she wants to add a color  & color name. Then add the color to desired   position/index. . Display the updated array in your  browser.  
// g. Ask the user at which index he/she wants to delete color(s) & how many colors he/she wants to delete. 
// Then remove the same number of color(s) from user-defined position/index.. Display the updated array in your browser. 

// let colors = ["red","blue","green"];
// document.write(colors("<br>"))
// let color1 = prompt("enter a color what you want to add in the begginig:");
// colors.unshift(color1)
// document.write(`<br><br>After adding color at the beginning of array:<br>${colors("<br>")}`);
// let color2 = prompt("enter a color name where you end in the end:");
// colors.push(color2);
// document.write(`<br>after adding the color at end of array:<br> ${colors.join("<br>")}`)

// let color3 = prompt("enter a 3rd color name: ");
// let color4 = prompt("enter a 4th color name: ");
// colors.unshift(color3,color4);
// document.write(`<br>after adding a two new color at the begining of array:<br> ${colors("<br>")}`)
// colors.shift();
// document.write(`<br> after removing the first element from th array:<br> ${colors("<br>")}`)
// colors.pop();
// document.write(`<br> after removing the last element from th array:<br> ${colors("<br>")}`)
// let color5 = prompt("Enter a color name you want to add 5th:");
// let index = prompt("enter the index position where you want to add:");
// index=parseInt(index);
// if (index>=0 && index<=colors.length) {
//     colors.splice(index,0,color5);
// }
// document.write(`<br> after we apply splice method and add color:<br> ${colors("<br>")}`)

// let deltIndex = +prompt("enter a number at which index:");

// let count = +prompt("enter a number how many colors you wnat to delete:");

// colors.splice(deltIndex,count);

// document.write(`after deltion at index:<br>${colors.join("<br>")}<br>`)


// Question 10 ____________________________________________________________________________________

// 10. Write a program to store student scores in an array &  sort the array in ascending order using Array’s sort method. 

// let scoreOfStudents = [410,360,450,120]
// document.write(`Score Of Students: ${scoreOfStudents}<br>`)
// scoreOfStudents.sort()
// document.write(`Order Score Of Students: ${scoreOfStudents}`)

// Question 11 ____________________________________________________________________________________

// 11. Write a program to initialize an array with city names. Copy 3 array elements from cities array to selectedCities array. 

// let citiesList = [" Karachi "," Islamabad "," Quetta "," Peshawar "," Lahore "];
// document.write(`Cities list: ${citiesList} <br>`);
// let selectCities = citiesList.slice(1,3);
// document.write(`After copy: ${selectCities}`);

// Question 12 ____________________________________________________________________________________

// 12. Write a program to create a single string from the  below mentioned array:  
// var arr = [“This ”, “ is ”, “ my ”, “ cat”];  
// (Use array’s join method)

// var arr = ["This","is","my", "cat"];
// document.write(`Array: ${arr}<br>`);
// document.write(`String: ${arr.join(" ")}`);

// Question 13 ____________________________________________________________________________________

// 13. Create a new array. Store values one by one in such a way that you can access the values in the order in which they  were stored. 
// (FIFO-First In First Out)

// let devices = ["Keyboard","Mouse","Printer","Monitor"]
// document.write(`${devices}<br>`)
// devices.shift();
// document.write(`atter first element del:<br> ${devices}<br>`)
// devices.shift();
// document.write(`atter 2nd element del:<br> ${devices}<br>`)
// devices.shift();
// document.write(`atter 3rd element del:<br> ${devices}<br>`)


// Question 14 ____________________________________________________________________________________

// 14. Create a new array. Store values one by one in such a way that you can access the values in reverse order. 
// (Last In First Out)


// let devices = ["Keyboard","Mouse","Printer","Monitor"]
// document.write(`${devices}<br>`
// devices.pop();
// document.write(`after last element del:<br> ${devices}<br>`)
// devices.pop();
// document.write(`after 2nd last element del:<br> ${devices}<br>`)
// devices.pop();
// document.write(`after 3rd last element del:<br> ${devices}<br>`)


// Question 15 ____________________________________________________________________________________

// 15. Write a program to store phone manufacturers (Apple, Samsung, Motorola, Nokia, Sony & Haier) in an array.  
// Display the following dropdown/select menu in your browser using document.write() method:

// let storeManufacture = ["Apple","Samsung","Motorola","Nokia","Sony","Haier"];
// document.write("<select>");

// for(let i = 0; i < storeManufacture.length; i++) {
//     document.write(`<option value="${storeManufacture[i]}">${storeManufacture[i]}`);
// }
// document.write("<select>");



//    Chapter 14-16 End -------------------------------------------------------------------------


//    Chapter 17-20 Start -----------------------------------------------------------------------



// Question 1 ____________________________________________________________________________________

// 1. Declare and initialize an empty multidimensional array. 
// (Array of arrays)  


// let multiDArray = [[], []];

// console.log(multiDArray);

// Question 2 ____________________________________________________________________________________

// 2. Declare and initialize a multidimensional array representing the following matrix: 

// let multiDArray = [
//     [0, 1, 2, 3],
//     [1, 0, 1, 2],
//     [2, 0, 1, 0]
   
// ]
// console.log(multiDArray);

// Question 3 ____________________________________________________________________________________

// 3. Write a program to print numeric counting from 1 to 10.

// for (let a = 1; a <= 10; a++) {
//     document.write([a],'<br>') 
// }

// Question 4 ____________________________________________________________________________________

// 4. Write a program to print multiplication table of any number using for loop. Table number & length should be taken as an input from user.

// let tableNumber = +prompt("Enter a number for table");
// let tableLength = +prompt("Enter a number for table lenth");

// for (let a = 1; a <= tableLength; a++) {
//     document.write(tableNumber + '  ' + ' x ' + a + ' = ' + tableNumber*a + '<br>');
// }

// Question 5 ____________________________________________________________________________________

// 5. Write a program to print items of the following array using for loop:  
// fruits = [“apple”, “banana”, “mango”, “orange”, “strawberry”] 

// let fruits = ["apple","banana","mango","orange","strawberry"];

// for (let i= 0; i < fruits.length; i++) {
//     document.write(`Element at index ${i} is ${fruits[i]}<br>`)
// }

// Question 6 ____________________________________________________________________________________

// 6. Generate the following series in your browser. See example output.  
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15 
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1 
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20  
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19  
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k

// document.write(`counting<br>`)
// for (let i = 1; i <= 15; i++) {
//     document.write(`${i}<br>`)
// }
// document.write(`reversing<br>`)
// for (let i = 10; i >= 1; i--) {    
//     document.write(`${i}`)
    
// }
// document.write(`even<br>`)
// for (let i = 0; i <= 20; i+=2) {    
//     document.write(`${i}<br>`)
// }
// document.write(`odd<br>`)
// for (let i = 1; i <= 20; i+=2) {    
//     document.write(`${i}<br>`)
// }
// document.write(`series<br>`)
// for (let i = 2; i <= 20; i+=2) {    
//     document.write(`${i}k <br>`)
// }


// Question 7 ____________________________________________________________________________________

// 7. You have an array  
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”] 
// Write a program to enable “search by user input” in an array.  
// After searching, prompt the user whether the given item is found in the list or not. Example: 

// let A = ["cake", "apple pie", "cookie", "chips", "patties"];
// let userInput = prompt("Welcome to Kababjees Bakers. What do you want to order?").toLowerCase();
// if (A.includes(userInput)) {
//     alert(`${userInput} is available in the list.`);
// } else {
//     alert(`${userInput} is not available in the list.`);
// }


// Question 8 ____________________________________________________________________________________

// 8. Write a program to identify the largest number in the given array.  
// A = [24, 53, 78, 91, 12].

// let numbers = [55, 43, 78, 19, 22];
// console.log(`Array ${numbers}`)
// console.log(`Largest number: ${Math.max(...numbers)}`);


// Question 9 ____________________________________________________________________________________

// 9. Write a program to identify the smallest number in the  given array.  
// A = [24, 53, 78, 91, 12]  

// let numbers = [55, 43, 78, 19, 22];
// console.log(`Array ${numbers}`)
// console.log(`Largest number: ${Math.min(...numbers)}`);


// Question 10 ____________________________________________________________________________________

// 10. Write a program to print multiples of 5 ranging 1 to  100.

// console.log("Multiples of 5:");
// for (let i = 5; i <= 100; i += 5) {
//     console.log(i);
// }



//    Chapter 17-20 End -----------------------------------------------------------------------


//      Practice Question Start -----------------------------------------------------------------------



//      Question 1 ____________________________________________________________________________________

// 1. Simulating an ATM Withdrawal System 

// let atmBalance = 70000;
// let amount = +prompt("Enter amount to withdraw:");


// if (amount %100 !==0) {
//     document.write(`Enter amount must be a multiple`)
// } else if (amount>atmBalance) {
//     document.write(`Inuficient balance in your account:`)
// } else {
//     let note1000 = Math.floor(amount/1000);
//     let note500 = Math.floor((amount%1000)/500);
//     let note100 = Math.floor((amount%500)/100);

//     atmBalance-=ammount
    
//     document.write(`withdraw successful<br>
//         withdraw amount ${amount}<br>
//         remaining amount in your account ${atmBalance}<br> 
//         1000 notes: ${note1000}<br>
//         500 notes: ${note500}<br>
//         100 note: ${note100}<br>`)
// }


//      Question 2 ____________________________________________________________________________________

// 2. Parking Lot Fee Calculator 

// let carHours = +prompt("Enter a number of hours to park the Car:");
// let parkingFee = 0; 

// if (carHours > 10) {
//     parkingFee = 50;

// } else if(carHours > 2) {
//     parkingFee = (carHours-2)*5;
    
// } else {
    
// }
// document.write("<h2> Parking Fees </h2> <br>");
// document.write("First 2 hours is free <br>");
// document.write("Aftre 10 hours parking is 50$ <br> <br>"); 
// document.write(`Total hours parked <b>${carHours}</b>, and your fee is <b>${parkingFee}$</b> <br>`);


//     Question 3 ____________________________________________________________________________________

// 3. Car Speed Fine System 

// let speed = +prompt("Enter Car Speed"); 

// if (speed <= 60) {
//     document.write("Safe Speed");
// } else if (speed <= 80) {
//     document.write("Warning: Please slow down!");
// } else {
//     let fine = (speed - 80) * 10;
//     document.write(`Overspeeding! You are fined $${fine}`);
// }


//     Question 4 ____________________________________________________________________________________

// 4. Bank Loan Interest Calculator

// let loanAmount = +prompt("Enter loan ammount");

// let interestRate;
// if (loanAmount <= 10000) {
//     interestRate = 0.05;
// } else if (loanAmount <= 50000) {
//     interestRate = 0.07;
// } else {
//     interestRate = 0.10;
// }

// let interest = loanAmount * interestRate;
// let totalPayable = loanAmount + interest;

// document.write(`Loan Amount: $${loanAmount} <br>`);
// document.write(`Interest Rate: ${(interestRate * 100)}% <br>`);
// document.write(`Interest: $${interest} <br>`);
// document.write(`Total Amount to be Paid: $${totalPayable} <br>`);


//     Question 5 ____________________________________________________________________________________

// 5. Toll Booth System - Vehicle Fee Collection

// let vehicleType = prompt("Vehical type: Truck or Car or Bus?");
// let amountPaid = +prompt("Vehical toll Rates: Truck = 10$ or Car = 5$ or Bus = 8$?");

// let tollRates = {
//     Car: 5,
//     Truck: 10,
//     Bus: 8
// };

// let toll = tollRates[vehicleType];

// let unpaidTolls = [];

// if (amountPaid >= toll) {
//     document.write(`${vehicleType} paid $${amountPaid}. Toll accepted. <br>`);
// } else {
//     let unpaidAmount = toll - amountPaid;
//     document.write(`${vehicleType} paid $${amountPaid}. Allowed to pass, but $${unpaidAmount} unpaid. <br>`);
//     unpaidTolls.push({
//         vehicleType: vehicleType,
//         unpaidAmount: unpaidAmount
//     });
// }
// document.write("Unpaid Tolls Record:", unpaidTolls ,"<br>");


//     Question 6 ____________________________________________________________________________________

// 6. School Exam Result Processing  

// function getRandomMark() {
//     return Math.floor(Math.random() * 101);
// }

// function getAverage(marks) {
//     let sum = marks.reduce((total, mark) => total + mark, 0);
//     return sum / marks.length;
// }

// function getGrade(avg) {
//     if (avg >= 80) return 'A';
//     else if (avg >= 70) return 'B';
//     else if (avg >= 60) return 'C';
//     else if (avg >= 50) return 'D';
//     else return 'F';
// }

// document.write(`<h1> School Exam Result Processing </h1>`)

// for (let i = 1; i <= 3; i++) {
//     let marks = [getRandomMark(), getRandomMark(), getRandomMark(), getRandomMark()];
//     let average = getAverage(marks);
//     let grade = getGrade(average);

//     document.write(`<br> Student ${i}: <br>`);
//     document.write(`Marks: ${marks.join(", ")} <br>`);
//     document.write(`Average: ${average} <br>`);
//     document.write(`Grade: ${grade} <br>`);
//     document.write('-----------------------');
// }


//     Question 7 ____________________________________________________________________________________

// 7. Cinema Ticket Booking System 

// let seats = 10;
// let totalRevenue = 0;

// document.write(`<h3> Cinema Ticket Booking System </h3> <br>`);
// for (let i = 1; i <= seats; i++) {
//     let age = Math.floor(Math.random() * 90);
//     let price = 0;

//     if (age <= 12) {
//         price = 5;
//     } else if (age <= 59) {
//         price = 10;
//     } else {
//         price = 7;
//     }

//     document.write(`Seat ${i}: Age ${age}, Ticket $${price} <br>`);
//     totalRevenue += price;
// }

// document.write(`\n <br> <b> Total Revenue: $${totalRevenue}</b> <br>`);


//     Question 8 ____________________________________________________________________________________

// 8. Parking Lot Fee Calculation 

// let totalCars = 15;
// let totalFees = 0;

// document.write(`<h3> Parking Lot Fee Calculation </h3> <br>`)
// for (let i = 1; i <= totalCars; i++) {
//     let hours = Math.floor(Math.random() * 10) + 1; 
//     let rate = 0;

//     if (hours <= 3) {
//         rate = 3;
//     } else if (hours <= 6) {
//         rate = 2;
//     } else {
//         rate = 1;
//     }

//     let fee = hours * rate;
//     document.write(` Car ${i}: Parked for ${hours} hour(s), Fee: $${fee} <br>`);
//     totalFees += fee;
// }

// document.write(`\n <br> <b>Total Parking Fees Collected: $${totalFees} </b> <br>`);


//     Question 9 ____________________________________________________________________________________

// 9. Library Late Fee System

// let borrowers = [4, 7, 12, 3, 5, 10, 15, 2, 8, 14, 6, 11, 9, 13, 5, 4, 6, 8, 10, 1];
// let totalFee = 0;

// for (let i = 0; i < borrowers.length; i++) {
//     let daysLate = borrowers[i];
    
//     if (daysLate >= 1 && daysLate <= 5) {
//         totalFee += daysLate * 2; 
//     } else if (daysLate >= 6 && daysLate <= 10) {
//         totalFee += daysLate * 3;
//     } else if (daysLate >= 11) {
//         totalFee += daysLate * 5; 
//     }
// }
// document.write("Total Late Fees Collected: $" + totalFee);


//     Question 10 ____________________________________________________________________________________


// 10. Gas Station Fuel Dispenser

// function calculateRevenue() {
//     let totalRevenue = 0;

//     for (let i = 0; i < 10; i++) {
//         let fuelAmount = Math.floor(Math.random()*46) + 5; 
//         let pricePerLiter;

//         if (fuelAmount <= 20) {
//             pricePerLiter = 1.2;
//         } else if (fuelAmount <= 35) {
//             pricePerLiter = 1.0;
//         } else {
//             pricePerLiter = 0.8;
//         }

//         totalRevenue += fuelAmount * pricePerLiter;
//     }

//     document.write("Total Revenue: $" + totalRevenue);
// }

// calculateRevenue();



//      Practice Question End -----------------------------------------------------------------------


