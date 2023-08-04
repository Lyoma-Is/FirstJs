
// 1 
let name = 'Lyoma'; // 2 string 



// 3
const age = 24;  // integer



// 4
if (age < 15){
    console.log('доступ запрещен');
}
else{
    console.log(`Hello, ${name}`);
}



//5

function viewMoney(){
    console.log('viewMoney:','Вот вам 10$');

}
viewMoney();



//6  // 7

function getMoney(x){
    return `Вот вам ${x}$`;
}
console.log('getMoney:', getMoney(399));




// 8

function pow2(x){
    console.log('Pow2:', x**2);   
}
pow2(2);




// 9

let argOne = 5,
    argTwo = 7,
    argThree = 9;

function maxArg(a, b, c){
    console.log("maxArg:", Math.max(a, b, c));
}
maxArg(argOne, argTwo, argThree);



// 10

function diskr(a, b, c){
    return b**2 - 4*a*c
}
console.log('diskr:', diskr(1, 1, -12));



// 11

let numOne = prompt("Enter first numder: "),
    numTWO = prompt("Enter second numder: ");

function chet(x, y){
    if (x % 2 == 0 && y % 2 == 0){
        return x*y;
    }
    else if (x % 2 != 0 && y % 2 != 0){
        return +x + +y;
    }
    else{
        if (x % 2 == 0){
            return y;
        }
        else{
            return x;
        }
    }
}

console.log(chet(numOne, numTWO));