# Unit testing with Mocha and Chai

### Description
This project shows how to use a feature-rich JavaScript test frameworks 
Mocha and Chai running on Node.js.  
In this project we test **10 functions**, which you can find in 
[index.js file](https://github.com/irina08/mochaProjectGH/blob/master/index.js):  
- **function  isPalindrome()**, that checks if a given one-word string 
(case insensitive) is a palindrome. If argument not a String or no argument or 
contains more than 1 word it returns 'Wrong argument'.
- **function unique()**, which takes an Array and returns it free of duplicates.
If argument not an array or empty array, or no argument, it returns false.
Other way it returns array without duplicates;
-  **function isReallyNaN()**, which returns true only if passed in an argument 
that evaluates to NaN, and returns false otherwise; 
- **howMuchILoveYou()**, which takes the number of petals in the flower and returns 
phase according the number of last petal. Return string 'No petals' if petals <= 0;
- **factorial()**, which calculates factorial for a given input. If input is below 
0 or above 12 it throw an exception of type ArgumentOutOfRangeException;
- **function greet()**, which takes a parameter 'language' (always a string), and 
returns a greeting - if we have it in our database. By default language is English 
if the language is not in the database, or in the event of an invalid input;
- **function validatePIN()**, which return true, if ATM machine Pin Code contains 
exactly 4 digits or exactly 6 digits. Other way it returns false. 
It accept only strings;
- **function digitize()**, which returns the digits of given number within an 
array in reverse order. In other way it returns empty array;  
- **function countLetters()**, which counts the letters in a string in object 
notation. Input: a string, case-insensitive, ignore whitespace, and anything 
not a-z. If input is anything other than a string, it returns null. Output is 
an object of the letters and how often they show up;
- **function firstNonConsecutive()**, which returns the first element of an array 
that is not consecutive. If the whole array is consecutive it returns null.
Input: The array always has at least 2 elements1 and all elements are numbers.
The numbers are also all be unique and in ascending order.
The numbers could be positive or negative.

Unit tests for those functions you can find in [/test/index.spec.js file](https://github.com/irina08/mochaProjectGH/blob/master/test/index.spec.js). 

### Node and npm installation
For this project you need to have already installed Node.js, npm, Mocha and git.  
1. Go to the [Node installation page](https://nodejs.org/en/download/), and download the Node installer.  
2.  Once it's done, you can test to see both node and npm functioning by 
opening terminal and typing node -v and npm -v, which will check 
the version number.    

[Helpful link Node](https://www.taniarascia.com/how-to-install-and-use-node-js-and-npm-mac-and-windows/)

### Initialization of local repository
1.  You need to clone this repo to your local machine.  
In the terminal change the current working directory to the location where 
you want the cloned directory to be made.  
Use command: git clone https://github.com/irina08/mochaProjectGH
2. Go to the directory 'mochaProjectGH'.  
3. For initializing a project run command: npm init.  

### Mocha and Chai Installation 
1. Run command: npm install mocha  
2. Run command: npm install chai

[Helpful link Mocha](https://mochajs.org/)  
[Helpful link Chai](https://www.chaijs.com/guide/)

### How to run tests  
1. Run command: npm test 
 


 
