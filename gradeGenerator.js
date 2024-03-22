const prompt = require("prompt-sync")({ sigint: true })

const userInput = prompt("Input Student's Marks");//Prompts user for student's marks.
const studentsMarks = parseFloat(userInput);// Ensures marks is a number
const StudentGrade = gradeGenerator(studentsMarks);// Hoisting allows a function declaration to be invoked before declaration.
function gradeGenerator(marks) {
    if(marks >=  0 && marks <=100) {//Ensures student's marks is within valid range
        if(marks > 79) {
            return "A";
        }
        else if(marks > 59){
            return "B";
        }
        else if(marks > 49) {
            return "C";
        }
        else if(marks >= 40){
            return "D";
        }
        else {
            return "E";
        }
    }
    else {
        return 'Enter Valid Marks';
    }
}
console.log(`Student scored grade: ${StudentGrade}!`);
