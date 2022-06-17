/*//created new array called ages with assigned values
var ages = [3, 9, 23, 64, 2, 8, 28, 93];

//Finding the last item in the array programmatically
var lastItem = ages[ages.length -1 ];

//printing the result of the first item being subtracted from the last item to the console from the array called ages
console.log(lastItem - ages[0]);

//adding a new age to the ages array
ages.push(25);

//printing the updates ages array to ensure it works
console.log(ages);
//running the subtraction formula again to ensure it works with new item in array
var lastItem = ages[ages.length -1 ];
//printing to console so that I can see the result
console.log(lastItem - ages[0]);

var sum = 0; 
for (var i =0; i < ages.length; i++){
    sum = sum + ages[i];
    
} console.log(average = sum/ages.length);

average = Math.floor(average);
console.log(average);*/


//created new array called names with assigned names and sent to the console to ensure it works
/* var names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];
console.log(names);

// This pertains to question 5 on the assignment. created a new variable called nameLengths to determine number of letters per item in the names array; then sent that to the console
var nameLengths = names.map(function(element){
    return element.length;
}); 
console.log(nameLengths);

// created loop to determine the average number of letters per name in the names array; then sent that to the console
/*var sum = 0; 
for (var i =0; i < nameLengths.length; i++){
    sum = sum + nameLengths[i];
    
} console.log(average = sum/nameLengths.length);

// rounded down the average result to the nearest whole number
average = Math.floor(average);
console.log(average);

//sent the array to the console as a string separated by spaces
console.log(names.join(' ')); */



 
// Referring to question 3: This is how I would access the last item in an array.
 /*console.log(names[names.length - 1]);

 // Referring to question 4: This is how I would access the first item in an array.
 console.log(names[0]);


 // Created a loop to calculate the sum of all the elements in the nameLengths array and sent that to the console
 var sum = 0;
for (var i = 0; i < nameLengths.length; i++){
    sum += nameLengths[i];
} console.log(sum); */

//created a function with two parameters then returned the full name (concatenated firstName and lastname) with spaces.
function fullName(firstName, lastName){
    console.log(firstName + " " + lastName);
}

fullName("Wade", "Kallsen");

let array = [22, 46, 37];

let sum = array.reduce(function(accumulator, currentValue){
    return accumulator + currentValue;
}); console.log(sum);

if (sum > 100){
    console.log(true);
} else {
    console.log(false);
}