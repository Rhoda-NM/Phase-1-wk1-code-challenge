# Week 1 -Phase-1 code challenge

This code challenge included three javascript challenges which are:
A student grade generator, A speed detector, and A net salary calculator.

Date: 03/24/2024

 ## Description
### 1. Student's Grade generator  
This application prompts  the user for student's marks, and ensures that the marks are a number data type and within the valid range of 0 -100;
and then assigns the grade accordingly.  
Some concepts used for this code are:
1. Prompt- A javascript method used to display a dialog box for inputtin user's data.
2. ParseFloat - Converts user input to number data type
3. Check that marks is within valid range of 0 -100 using a conditional statement.(if else)
4. If passing step3 check for the rane of marks and return correspondin grade using conditional statement( if elseif else)

##Speed Detector  
This code takes a variable speed as entered by the user and checks to see if the speed is greater than or less than 70. If it is less than or equal  it should return oK.WHILE  speed above 70 earns one a demerit point for every 5 points above 70, with a license suspension when demerit points are greater than or equal to 12.

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
