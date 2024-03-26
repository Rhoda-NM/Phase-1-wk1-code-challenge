const prompt = require("prompt-sync")({ sigint: true })

const speed = parseFloat(prompt("Input car's speed"));
const speedChecker = () => {
    if(speed < 70) {
        return 'Ok';
    }
    else {
        let overSpeed = speed - 70;
        let demerit = Math.floor(overSpeed / 5);
        if(demerit >= 12) {
            return "Suspend Licence";
        }
        else {
            return demerit;
        }
    }
    
}
console.log(speedChecker());
