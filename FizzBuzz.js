/*
Given an integer n, return a string array answer (1-indexed) where:

answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
answer[i] == "Fizz" if i is divisible by 3.
answer[i] == "Buzz" if i is divisible by 5.
answer[i] == i (as a string) if none of the above conditions are true.
 

Example 1:

Input: n = 3
Output: ["1","2","Fizz"]
Example 2:

Input: n = 5
Output: ["1","2","Fizz","4","Buzz"]
Example 3:

Input: n = 15
Output: ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]
 

Constraints:

1 <= n <= 104
*/


// an integer. Always an integer, never a string, or array, or empty, no null or undefined. No funny stuff

 // Return a string array of Fizz, Buzz, Fizzbuzz and numbers.

 // (3) => ["1","2","Fizz"]
 // (5) => ["1","2","Fizz","4","Buzz"]
 // (15) => ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]

 // Do a for loop, and check against each conditional



 function fizzBuzz (n) {
    //Array that will hold our results
    let results = [];
    //For loop that iterates through the n array
    for (let i = 1; i <= n; i++) {
        //Check if the number is a "FizzBuzz"
        if (i % 3 === 0 && i % 5 === 0) {
            results.push("FizzBuzz");
        } //Check if the number is a "Fizz" 
        else if (i % 3 === 0) {
            results.push("Fizz");
        } //Check if the number is a "Buzz"
        else if (i % 5 === 0) {
            results.push("Buzz");
        } //Otherwise add the string number to results
        else {
            results.push(i.toString());
        }
    }
    //Return the results array
    return results;
}