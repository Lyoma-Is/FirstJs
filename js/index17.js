// 1
const numConst = 10;

function fnum(x){
    if (x < 10){
        console.log("константа меньше 10");
    }
    else{
        console.log("константа не меньше 10");
    }

};
//let numOne = prompt("Enter Number:");
fnum(8);

// 2

function fHello(){
    alert("Hello, world!");
};
fHello();

// 3

function fconsoleJS(){
    console.log("JavaScript");
};

fconsoleJS();

// 4

let text = "first second third fourth lorem";

function findLorem(s){
    if (s.includes("lorem")){
        console.log("У вас ошибка в тексте");
    }
    else{
        console.log("Содержимое переменной:", s);
    }
}

findLorem(text);