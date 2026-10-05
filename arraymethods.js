/*Task 1: Adding and Removing Elements
● Start with the array:
let fruits = ["apple", "banana", "cherry"];
    ● Add "orange" to the end of the array.
    ● Remove the first element.
    ● Add "grape" to the beginning of the array.
    ● Submit the final fruits array.
Expected Output:
["grape", "banana", "cherry", "orange"]*/

let fruits = ["apple", "banana", "cherry"];
let newFruit = fruits.push("orange");
let removeFirstFruit = fruits.shift();
let updatedFirstFruit = fruits.unshift("grape");
console.log(fruits);



/*Task 2: Query and Access
● Start with the array:
let colors = ["red", "blue", "green", "blue", "yellow"];
    ● Check if "blue" is in the array (using includes()).
    ● Find the first index of "blue" (using indexOf()).
    ● Find the last index of "blue" (using lastIndexOf()).
    ● Submit the results as an array in the following format:
[includesResult, firstIndex, lastIndex]
Expected Output:
[true, 1, 3]*/

let colors = ["red", "blue", "green", "blue", "yellow"];
console.log(checkBlue = colors.includes("blue"));
console.log(indexBlue = colors.indexOf("blue"));
console.log(lastIndexBlue = colors.lastIndexOf("blue"));
let results = [checkBlue, indexBlue, lastIndexBlue];
console.log(results);


/*Task 3: Combining Arrays
● Start with these two arrays:
let teamA = ["Alice", "Bob"];
let teamB = ["Charlie", "Diana"];
    ● Combine the two arrays into a single array called allTeams.
    ● Add "Eve" to the end of the combined array.
    ● Submit the final allTeams array.
Expected Output:
["Alice", "Bob", "Charlie", "Diana", "Eve"]*/

let teamA = ["Alice", "Bob"];
let teamB = ["Charlie", "Diana"];
let allTeams = teamA.concat(teamB);
let addEve = allTeams.push("Eve");
console.log(allTeams);



/*Task 4: Extracting and Splicing
● Start with the array:
let numbers = [10, 20, 30, 40, 50];
    ● Use slice() to create a new array called middleNumbers containing only the
    second and third elements.
    ● Use splice() to remove the last two elements from the original array and
    add 60 and 70 in their place.
    ● Submit both the middleNumbers and modified numbers arrays.
Expected Output:
middleNumbers: [20, 30]
numbers: [10, 20, 30, 60, 70]*/

let numbers = [10, 20, 30, 40, 50];
let middleNumbers = numbers.slice(1, 3);
let removeLastTwo = numbers.splice(3, 2, 60, 70);
console.log(middleNumbers);
console.log(numbers);

/*Task 5: Sorting and Reversing
● Start with the array:
let scores = [85, 70, 95, 60, 75];
    ● Sort the scores in ascending order.
    ● Reverse the sorted array.
    ● Submit the final scores array.
Expected Output:
[95, 85, 75, 70, 60]*/

let scores = [85, 70, 95, 60, 75]; 
scores.sort().reverse();
console.log(scores)