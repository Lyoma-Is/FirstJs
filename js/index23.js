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

function itemS(...items){
    let itemSum = items.reduce(function(sum, item){
        sum += item
        return sum
    }, 0)
    console.log(items);
    console.log(itemSum);
}
itemS(1, 2, 3, 8, 6, 1, 4);

