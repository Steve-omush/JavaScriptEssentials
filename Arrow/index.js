
//arrow function
let hello;
let x = "Yo";
let y = "Steve!";
//function expression
hello = function () {
    return "Hello World!";
}
console.log(hello());
//arrow function
hello = () => "Hello World!";
console.log(hello());

//example2 
//function expression
hello = function (x) {
    return x + "Hello!";
}
console.log(hello(x));
//arrow function
hello = x => x + "Hello!";
console.log(hello(x));

//example3
//function expression
hello = function (x, y) {
    return x + " "+y;
}
console.log(hello(x, y));
//arrow function
hello = (x,y) => x + " "+y;
console.log(hello(x, y));

//example4
//function expression
hello = function (x,y) {
    console.log(x);
    console.log(y);
}
hello(x,y);
//arrow function
hello = (x,y) => {
    console.log(x);
    console.log(y);
}
hello(x,y)


//arrow functions in higher order functions (map(),filter(),reduce())
//map()
let storeUSD = [5,6,7,8,9];
let storeEUR;

function toEuros(values) {
    values *= 0.84;
    return values;
}
storeEUR = storeUSD.map(toEuros)
console.log(storeEUR);

//arrow function
storeEUR = storeUSD.map(values =>values *= 0.84 );
console.log(storeEUR);

//filter()
let students = [16,17,18,19,20];
let adultStudents;

function checkAge(age) {
    if(age>=18){
        return age;
    }
}
adultStudents = students.filter(checkAge);
console.log(adultStudents);
//arrow function
adultStudents = students.filter(age => age>=18 );
console.log(adultStudents);


//reduce()
let letters = ["H","E","L","P","!"];
let word;

function combineLetters(total, nextLetter) {
    return total + nextLetter
}
word = letters.reduce(combineLetters);
console.log(word);
//arrow funcion
word = letters.reduce((total, nextLetter) => total + nextLetter);
console.log(word)