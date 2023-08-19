
// 1

let arr = [10, 2762, 0.42, 192, 3, 28, 1125, 2018, 34, 66, 100];
console.log("1 |", arr);
arr.forEach(function(item, index, array){
    if (item % 2 !== 0){
        ("1 |", item);
    }
})
console.log(' ');

// 2

let arr2 = [ 'lorem ipsum', 'javascript', 'php', 'css', 'react', 'git', 'html', 'mysql']
console.log("2 |", arr2);
arr2.forEach(function(item, index, array){
    if (item.length <= 4){
        console.log("2 |", item);
    }
})

console.log(' ');

// 3

let arr3 = [1, -3, 5, 6, -7, 8, 9, -11];
console.log("3 |", arr3);
let arr33 = arr3.filter(function(item, index, array){
    if (item < 0){
        return 1
    }
})
console.log("3 |", arr33);

console.log(' ');

// 4
console.log("4 |", arr);
let arr4 = arr.filter(function(item, index, array){
    if (item % 2 === 0){
        return 1
    }
})
console.log("4 |", arr4);

console.log(' ');

// 5
console.log("5 |", arr2);
let arr5 = arr2.filter(function(item, index, array){
    if (item.length !== 3){
        return 1
    }
})
console.log("5 |", arr5);

console.log(' ');

// 6

let arr6 = [5, 6, 7, 8, 9]
console.log("6 |", arr6);
let arr66 = arr6.map(function(item){
    return item**2
})
console.log("6 |", arr66);

console.log(' ');

// 7

let arr7 = [ {a: 10, b: 5}, {a: 20, b: 22}, {a: 131, b: 55}];

console.log("7 |", arr7);

let arr77 = arr7.map(function(item){
    return item.a + item.b
})

console.log("7 |", arr77);

console.log(' ');

// 8 

let arr8 = [-13, 0, 12, 1662, -0.32, -102, -2];
console.log("8 |", arr8);

let arr88 = arr8.reduce(function(sum, item, index, array){
    if (item < 0){
        sum += item        
    }
    return sum
}, 0)
console.log("8 |", arr88);
console.log(' ');

// 9

let arr9 = [ {x: 10, y: 'lorem'}, {x: 21, y: 'lorem'}, {x: -17, y: 'lorem'}, {x: 156, y: 'lorem'}]
console.log("9 |", arr9);
let arr99 = arr9.reduce(function(sum, item, index, array){
    sum += item.x
    return sum

}, 0)
console.log("9 |", arr99);