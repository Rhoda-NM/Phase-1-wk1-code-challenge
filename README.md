# Week 1 -Phase-1 code challenge

Date: 03/24/2024

## Intro
This is the first code challenge of my learning at Moringa School. It includes javascript challenges which are:
A student grade generator, A speed detector, and A net salary calculator.

 ## Description
### 1. Student's Grade generator  
This application prompts  the user for student's marks, and ensures that the marks are a number data type and within the valid range of 0 -100;
and then assigns the grade accordingly.  
Some concepts used for this code are:
1. Prompt- A javascript method that displays a dialog box for inputting the user's data.
2. ParseFloat - Converts user input to number data type
3. Check that marks are within the valid range of 0 -100 using a conditional statement. (if else)
4. If passing step 3 check for the range of marks and return the corresponding grade using a conditional statement( if elseif else)

### 2. Speed Detector  
This application is meant to check the speed of a car, 70 being the speed limit, with any speed above that warranting demerit points with possibility of license suspension.
The code works as follows:
1. Prompt- A javascript method that displays a dialog box for inputting the user's data which in this case is the recorded speed of a car.
2. ParseFloat - Converts user input to number data type.
3. Less than  or equal to 70 returns OK (if else statement)
4. Math.float - Allows for 1 demerit point for every 5 points above 70. (Inbulit method that rounds down the results of division by 5)
5. Conditional statement that checks to suspend license for demerit points above 12



##Salary calculator   
This program takes in several tax rates depen dig on the income range computes appropriate deductions and taxes and returns one's Net salary after deductions. The code is per the provided taxation implementation by the KRA.





## Acknowledgements


 - [KRA Tax rate]https://www.aren.co.ke/payroll/taxrates.htm
 - [Calculating tax]https://www.kra.go.ke/en/individual/calculate-tax/calculating-tax/payeLinks to an external site.


## Authors

- [@Rhoda Muya](https://www.github.com/Rhoda-NM)


## Installation

Use git clone to download the project files from github
## Run Locally

Clone the project

```bash
  git clone https://github.com/Rhoda-NM/Phase-1-wk1-code-challenge.git
```



## Tech Stack

**Javascript

#Dependencies:   
*prompt-sync

## Running Tests

To run tests, run the following command

```bash
node 'js file'
```


## License

[MIT](https://choosealicense.com/licenses/mit/)


## File structure
The project folder contains:

|-node modules                       
|-grade-Generator.js  
|-LICENSE   
|-{}package-lock.json  
|-{}package.json    
|-Readme.md   
|-salaryCalc.js     
|-speedDetector.js
