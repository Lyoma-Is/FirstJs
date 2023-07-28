// 1
const numConst = 8;

if (numConst < 10){
    console.log(" 1. ", "константа меньше 10");
}
else{
    console.log(" 1. ", "константа не меньше 10");
}

// 2

let strVar1 = prompt("Enter word 1:");
let strVar2 = prompt("Enter word 2:");

if (strVar1.length > strVar2.length){
    console.log(" 2. ", strVar1);
}
else if(strVar1.length === strVar2.length){
    console.log(" 2. ", "equal");
}
else{
    console.log(" 2. ", strVar2);
}

switch(strVar1){
    case 'css': console.log(" 2. ", strVar1);
    break;
    case "html": console.log(" 2. ", strVar1);
    break;
    default: console.log(" 2.  default");
    break;
}

// 3

let numX = 10, numY = 7;

numX > numY ? console.log(" 3. ", "x больше, чем y") : console.log(" 3. ", "x не больше, чем y");

// 4

let enterNum = prompt("Введите число");

if (enterNum % 2 == 0){
    console.log(" 4. ", `Число ${enterNum} четное`);
}
else{
    console.log(" 4. ", `Число ${enterNum} нечетное`);
}

// 5

let numOne = prompt("first number:");
let numTwo = prompt("second number:");
let numThree = prompt("third number:");

console.log(" 5. ", Math.max(numOne, numTwo, numThree));

