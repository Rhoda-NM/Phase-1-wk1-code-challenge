const prompt = require("prompt-sync")({ sigint: true });

const basicPay= parseFloat(prompt("Enter your gross paay"));
const benefits = parseFloat(prompt("Enter any fringe benefits"));
const allowances = parseFloat(prompt("Enter any allowances"));
//Gross pay is calculated as basic salary + benefits +allowance earnings.
const grossPay = basicPay + benefits + allowances
console.log(grossPay)

//Calculating fringe benefit tax which is 30%
function fringeBenefitTax(benefitAmount){
    let benefitTax = 30/100 * benefitAmount;
    return benefitTax;
}
//nssf is calculated as given by nssf rates
function nssfDeduction(pay) {
    let nssf = 0;
    if(pay >= 36000) {
        return nssf = 6/100 * 36000
    }
    else {
        return 6/100 * pay;
    }
}
//nssf is considered as deductible reliefs
//taxable income is calculated as gross pay - deductible reliefs
const taxableIncome = grossPay - nssfDeduction(grossPay);
console.log(`Your taxable income is: ${taxableIncome}`);

//income tax calculation
//Income tax is calculated based in the income range and is added cumulatively
const taxBracket1 = () => {
    if(taxableIncome <= 24000) {
        return taxableIncome * 10/100;
    }
    else {  //If the income is greater than 24,000, the the tax will be 10% for 24,000
        return 24000 * 10/100;
    }
}
const taxBracket2 = () =>{
    if(taxableIncome <= 32333) {
        return (taxableIncome - 24000) * 25/100;
    }
    else {
        return 8333 *25/100;
    }
}
const taxBracket3 = () => {
    if(taxableIncome <= 500000) {
        return (taxableIncome - 32333) * 30/100;
    }
    else {
        return 467667 * 30/100;
    }
}
const taxBracket4 = () => {
    if(taxableIncome <= 800000) {
        return (taxableIncome - 500000) * 32.5/100;
    }
    else {
        return 300000 * 32.5/100;
    }
}
const taxBracket5 = () => {
    return (taxableIncome - 800000) * 35/100;
}
function incomeTaxCalc(taxableIncome) {
    let tax = 0;
    if(taxableIncome <=24000){
        tax = taxBracket1();
        return tax;
    }
    else if(taxableIncome > 24000 && taxableIncome <= 32333) {
        tax = taxBracket1() + taxBracket2();
        return tax;
    }
    else if(taxableIncome >32333 && taxableIncome <= 500000) {
        tax = taxBracket1() + taxBracket2() + taxBracket3();
        return tax;
    }
    else if(taxableIncome > 500000 && taxableIncome <= 800000) {
        tax = taxBracket1() + taxBracket2() + taxBracket3() +taxBracket4();
        return tax;
    }
    else if(taxableIncome > 800000){
        tax = taxBracket1() + taxBracket2() + taxBracket3() +taxBracket4() + taxBracket5();
        return tax;
    }
}
const incomeTax = incomeTaxCalc(taxableIncome);
console.log(`The total income tax is: ${incomeTax}`);
//NHIF is a percentage of the gross income
function nhifCalc() {
    if(grossPay < 6000) {
        return 150;
    }
    else if(grossPay < 8000) {
        return 300;
    }
    else if(grossPay < 12000) {
        return 400;
    }
    else if(grossPay < 15000) {
        return 500;
    }
    else if(grossPay < 20000) {
        return 600;
    }
    else if(grossPay < 25000) {
        return 750;
    }
    else if(grossPay < 30000) {
        return 850;
    }
    else if(grossPay < 35000) {
        return 900;
    }
    else if(grossPay < 40000) {
        return 950;
    }
    else if(grossPay < 45000) {
        return 1000;
    }
    else if(grossPay < 50000) {
        return 1100;
    }
    else if(grossPay < 60000) {
        return 1200;
    }
    else if(grossPay < 70000) {
        return 1300;
    }
    else if(grossPay < 80000) {
        return 1400;
    }
    else if(grossPay < 90000) {
        return 1500;
    }
    else if(grossPay < 100000) {
        return 1600;
    }
    else if(grossPay >= 100000) {
        return 1700;
    }
}
console.log(`Your NHIF contribution is: ${nhifCalc()}`);
//insurance relief = 15% of nhif
const insuranceRelief = nhifCalc() *15/100;
//console.log(insuranceRelief);
const personalRelief = 2400;
//PAYE = INCOME TAX - INSURANCE RELIEF- PERSONAL RELIEF
let paye = 0
const taxPayable = () => {// for taxable income below 24,000, the income tax is 0
    paye = incomeTax - insuranceRelief - personalRelief;
    if(paye < 0){
        return paye = 0;
    }
    else{
        return paye;
    }
}
console.log(taxPayable());
 //Aftertax deductions include NHIF and Fringe benefit tax
//Net salary = taxable income - paye -fbt - nhif

const netSalary = taxableIncome - taxPayable() - nhifCalc() - fringeBenefitTax(benefits);
console.log(`Your net salary is: ${netSalary}`);