// Part 1 Fizz Buzz



for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        // console.log("FizzBuzz")
    }
    else if (i % 3 === 0) {
        // console.log("Fizz")
    }
    else if (i % 5 === 0) {
        // console.log("Buzz")
    } else {
        // console.log(i)
    }


}


//Part 2
/***
 * 
 * Now we will move onto something slightly more complex.
Context: A prime number is any whole number greater than 1 that cannot be exactly divided by any whole number other than itself and 1. For example, the number 5 is prime because it cannot be divided by 4, 3, or 2; it can only be divided by itself (5) and 1. Similarly, the numbers 7 and 11 are prime. As numbers become larger, determining whether or not they are prime is increasingly difficult, but loops make this process relatively easy!
Write a script that accomplishes the following:
Declare an arbitrary number, n.
Create a loop that searches for the next prime number, starting at n and incrementing from there.
As soon as you find the prime number, log that number and exit the loop.
Continuing with the example above, if n is equal to 4, your loop should log 5. Similarly, if n is 5, it should log 7, and if n is 9, it should log 11. Test your loop with higher numbers and reference an online prime number table to determine the accuracy of your code.
Be careful! If you set n to a number too large, your loop could take a long time to process.

 */

let x = 23;

while (true) {
    let isPrime = true;
    x++;
    for (let i = 2; i < x; i++) {
        if (x % i === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        console.log(x);
        break;
    }
}

///Part 3

// Your task is to write a script that accomplishes the following:
// Loop through the characters of a given CSV string.
// Store each “cell” of data in a variable.
// When you encounter a comma, move to the next cell.
// When you encounter the “\r\n” sequence, move to the next “row.”
// Log each row of data.
// You do not need to format the data, the following works well.
// console.log(cell1, cell2, cell3, cell4);
// You can make the following assumptions:
// There will only be 4 cells per row.
// There will be no escaped characters other than “\n”.


const string = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26`

let cell1 = "";
let cell2 = "";
let cell3 = "";
let cell4 = "";


let counter = 1;
for(let i = 0; i <string.length; i++ ){
    if(counter === 1){
        cell1 = cell1 + string[i];
        //add in cell 1
    }
    if(counter === 2){
        cell2 = cell2 + string[i];
        //add in cell 2
    }
    if(counter === 3){
        cell3 = cell3 + string[i];
        //add in cell 3
    }
    if(counter === 4){
        cell4 = cell4 + string[i];
        //add in cell 3
    }
    if(string[i] === '\n'){
        counter += 1;
    }
    
}
console.log(cell1,cell2,cell3,cell4);
