//created new array called ages with assigned values
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
console.log(average);

var names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];
var lengths = names.map(function(element){
    return element.length;
}); 
console.log(lengths);

var sum = 0; 
for (var i =0; i < lengths.length; i++){
    sum = sum + lengths[i];
    
} console.log(average = sum/lengths.length);
average = Math.floor(average);
console.log(average);

var concatenatedNames = "  " ;

for (let i = 0; i < names.length; i++){
    concatenatedNames = concatenatedNames.concat(names[i]);
}
 console.log(concatenatedNames);

// Referring to question 3: This is how I would access the last item in an array.
 console.log(names[names.length - 1]);

 // Referring to question 4: This is how I would access the first item in an array.
 console.log(names[0]);

var nameLengths = names.map(function(element){
    return element.length;
}); console.log(nameLengths);
