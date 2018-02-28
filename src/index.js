module.exports = function solveEquation(equation) {
let arrofstr = equation.split(' ');
let a = arrofstr[0];
let b = arrofstr[3] + arrofstr[4];
let c = arrofstr[7] + arrofstr[8]; 
let D = (Math.pow(b , 2)) - (4 * a * c);
let x1 = Math.round((- b - Math.sqrt(D)) / (2 * a));
let x2 = Math.round((- b + Math.sqrt(D)) / (2 * a));
let solution = 0;
if(x1 < x2) {
    solution = [x1 , x2]; 
    }
else {
    solution = [x2 , x1];
    }
return(solution);
}