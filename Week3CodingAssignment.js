//created new array called ages with assigned values: Question 1 Begins:
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
//created a loop to find the average age of the ages array, printed that to the console and then rounded down. 
var sum1 = 0; 
for (var i =0; i < ages.length; i++){
    sum1 = sum1 + ages[i];
    
} console.log(average = sum1/ages.length);

average = Math.floor(average);
console.log(average  +", " + " Question 1 Ends......");
//.....................................................: Question 1 Ends.

//created new array called names with assigned names and sent to the console to ensure it works: Question 2 Begins:
var names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];
console.log(names);

// This pertains to question 5 on the assignment. created a new variable called nameLengths to determine number of letters per item in the names array; then sent that to the console: Question 5 Begins:
var nameLengths = names.map(function(element){
    return element.length;
}); 
console.log(nameLengths + ", " + "Question 5 ends......");

// created loop to determine the average number of letters per name in the names array; then sent that to the console
var sum2 = 0; 
for (var i =0; i < nameLengths.length; i++){
    sum2 = sum2 + nameLengths[i];
    
} console.log(average = sum2/nameLengths.length);

// rounded down the average result to the nearest whole number
average = Math.floor(average);
console.log(average);
//........................................................................................ Question 5 Ends.

//sent the array to the console as a string separated by spaces
console.log(names.join(' ') + ", " + "Question 2 ends......"); 
//........................................................... Questsion 2 Ends.


 
// Referring to question 3: This is how I would access the last item in an array: Question 3.
 console.log(names[names.length - 1] + ", " + "Question 3 Ends......");

 // Referring to question 4: This is how I would access the first item in an array: Question 4.
 console.log(names[0] + ", " + "Question 4 ends......");


 // Created a loop to calculate the sum of all the elements in the nameLengths array and sent that to the console: Question 6 Begins:
 var sum3 = 0;
for (var i = 0; i < nameLengths.length; i++){
    sum3 += nameLengths[i];
} console.log(sum3 + ", " + "Question 6 ends......"); 
//.................................................................................... Question 6 Ends.

//created a function that takes two parameters, word and n, and concatenated that word n number of times to itself. So, the word hola will be concatenated 4 number of times to itself when 4 is passed through n: Question 7 Begins:
function toMultiply(word, n){
    return word.repeat(n);
} console.log(toMultiply("hola", 4));
console.log("Question 7 ends.....");
//.................................................................................. Question 7 Ends.

//created a function with two parameters then returned the full name (concatenated firstName and lastname) with spaces: Question 8.
function fullName(firstName, lastName){
    console.log(firstName + " " + lastName);
}

fullName("Wade", "Kallsen" + ", " + "Question 8 ends......");

//created an array of numbers, I then ran that through a function to determine the sum. Finally, I created an if statement to return true if the sum of the array was > 100 and false if < 100: Question 9 Begins:
let arrayx = [22, 46, 37];

let sum = arrayx.reduce(function(accumulator, currentValue){
    return accumulator + currentValue;
}); console.log(sum);

if (sum > 100){
    console.log(true);
} else {
    console.log(false);
} console.log("Question 9 ends......")
//...................................................................................................Question 9 Ends.



//Created a function that tool the array of numbers and calculated the average. I then sent that to the console: Question 10 Begins:
let array = [2, 4, 34, 65, 25];

function getAverage(array){
    let sum = 0;
    let count = 0;

    array.forEach(function(item, index){
        sum += item;
        count++;
    });
    return sum/count;
} console.log(getAverage(array)); console.log("Question 10 ends......")
//.................................................................................... Question 10 Ends.

//created two arrays of numbers: Question 11 Begins:
let array1 = [5, 3, 6, 5, 64];
let array2 = [3, 4, 5, 6, 75];

//ran array1 through a function to determine its average.
function getAverage(array1){
    let sum = 0;
    let count = 0;

    array1.forEach(function(item, index){
        sum += item;
        count++;
    });
    return sum/count;
} console.log(getAverage(array1));

//ran array2 through a function to determine its average.
function getAverage(array2){
    let sum = 0;
    let count = 0;

    array2.forEach(function(item, index){
        sum += item;
        count++;
    });
    return sum/count;
} console.log(getAverage(array2));

//compared the averages of array1 and array2 and sent true to the console if array1 was greater than array2 or false if not.
if (getAverage(array1) > getAverage(array2)){
    console.log('true');
} else {
    console.log("false");
} console.log("Question 11 ends......")
//.................................................................................... Question 11 Ends.


//created two variables "isHotOutside" and "moneyInPocket" to run through a function called "willBuyDrink": Question 12 Begins:
let isHotOutside = true;
let moneyInPocket = 10.49;

//created a function to determine if it is outside and if there is more than 10.5 in my pocket, if so, this function will return true, if not it will return false. 
function willBuyDrink(isHotOutside, moneyInPocket){
        
    if (isHotOutside && moneyInPocket > 10.50){
            return true;
        } else {
            return false;
        } 
}console.log(willBuyDrink(isHotOutside, moneyInPocket)); console.log("Question 12 ends......")
//.................................................................................... Question 12 Ends.

//created two variables to run through "goToSleep" function: Question 13 Begins:
let currentTime = 11;
let tired = false;

//created a function to determine if you should go to bed or not. If you're both tired and it's past ten, go to bed, otherwise, stay up. 
function goToSleep(currentTime, tired){
    if (currentTime > 10.00 && tired){
        return "Go to bed";
    } else {
        return "Stay awake a little longer";
    }
} console.log(goToSleep(currentTime, tired)); console.log("Question 13 ends......")
//.................................................................................... Question 13 Ends.