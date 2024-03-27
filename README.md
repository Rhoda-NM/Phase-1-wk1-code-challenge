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

   Example of the code working

   ![Screenshot from 2024-03-27 08-43-43](https://github.com/Rhoda-NM/Phase-1-wk1-code-challenge/assets/56297292/f4050656-67a1-4f60-8f0a-ea709976469d)

   

### 2. Speed Detector  
This application is meant to check the speed of a car, 70 being the speed limit, with any speed above that warranting demerit points with the possibility of license suspension.
The code works as follows:
1. Prompt- A javascript method that displays a dialog box for inputting the user's data which in this case is the recorded speed of a car.
2. ParseFloat - Converts user input to number data type.
3. Less than  or equal to 70 returns OK (if else statement)
4. Math.float - Allows for 1 demerit point for every 5 points above 70. (Inbulit method that rounds down the results of division by 5)
5. Conditional statement that checks to suspend license for demerit points above 12

   
   Example of how the code works
   
   ![Screenshot from 2024-03-27 08-39-43](https://github.com/Rhoda-NM/Phase-1-wk1-code-challenge/assets/56297292/f381e070-dc8b-4c51-9b45-4df775a7496f)



### Salary calculator   
This is a calculator application that calculates income tax, NSSF NHIF, Paye as well as Net Pay after taxations and deductions using the rates provided by KRA

Some concepts used for this code are:
1. Prompt- A javascript method that displays a dialog box for inputting the user's data. Requires 3 user inputs. (Gross pay, allowances, and benefits)
2. ParseFloat - Converts user input to number data type.
3. Function declarations Anonymous functions and arrow functions are used to accomplish the task of creating the various tax rates and deductions.
4. First-class functions are passed as arguments to other functions or assigned to variables.
5. Conditional statements (if else if else) are used to determine the taxation and deduction bracket for the provided salary.
6. Basic math operations such as summation, subtraction, multiplication and division are used to perform various computations.

Example of how the application works

![salarycalculation](https://github.com/Rhoda-NM/Phase-1-wk1-code-challenge/assets/56297292/181241bd-0a58-43fa-95f2-03f63b268b28)





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
