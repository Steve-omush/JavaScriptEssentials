//Tenary operator
// is  shortcut for if statements
//takes 3 operands  
/* 
    1. if statement is true ?
    2. condition if true
    3. condition if false 
*/

function checkWin(win) {
    win ? console.log("You Win!") : console.log("You Lose!");
}
checkWin(false);


function checkAge(age) {
    return age>18 ? "You  can drink beer responsibly" : "You can drink apple juice responsibly";
}
console.log(checkAge(19));
console.log(checkAge(14));