// 1

let arr_1= [101, 202, 303, 404, 505];
let arr_2 = [606, 707, 808, 909];

let superArr = [...arr_1, ...arr_2]
console.log(superArr);

// 2
console.log(Math.min(...superArr));

// 3

let obj = {
    width: 300,
    heigth: 550,
}
console.log(obj);

let objCopy = {
    ...obj,
    area(){
        return this.heigth * this.width
    }
}
console.log("area:", objCopy.area())

// 4

let itemS = function(...items){ 
    let sum = 0;
    for (let item of items) sum += item;
    return sum;
}
console.log(itemS(1, 2, 3, 8, 6));
