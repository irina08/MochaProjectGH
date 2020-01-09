# Unit testing with Mocha

### Description
This project shows how to use a feature-rich JavaScript test framework 
Mocha running on Node.js.  
In this project we test **3 functions**, which you can find in 
[index.js file](https://github.com/irina08/mochaProjectGH/blob/master/index.js):  
- **function  isPalindrome()**, that checks if a given one-word string 
(case insensitive) is a palindrome. If argument not a String or no argument or 
contains more than 1 word it will return 'Wrong argument'.
- **function unique()**, which takes an Array and returns it free of duplicates.
If argument not an array or empty array, or no argument, it will return false.
Other way it will return array without duplicates.  
-  **function isReallyNaN()**, which returns true only if passed in an argument 
that evaluates to NaN, and returns false otherwise.  

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

### Mocha Installation 
1. Run command: npm install mocha  

[Helpful link Mocha](https://mochajs.org/)

### How to run tests  
1. Run command: npm test 
 


 
