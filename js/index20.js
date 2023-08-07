// 1

let a = ['lorem', 123, true, 'ipsum'];
console.log('1 / length a:', a.length);


// 2

console.log('2 / first item a:', a[0], '\n2 / last item a:', a[a.length - 1]);

// 3

let em = [];

em.push('one', 'two');
em.unshift(2, 1, true);
console.log('3 / ', em);

// 4

a.unshift('first', 'css', true);
console.log('4 / ', a);

// 5

a.shift();
a.splice(a.length - 2, 2)
console.log('5 / ', a);

// 6

let number = [1, 3, 5, 7, 9]

console.log('6 / ', number);

for (var i in number){
    if (number[i] % 2 !== 0){
        number[i] ++;
    }
}

console.log('6 / ', number);

// 7

number.splice(1, number.length-2)
console.log('7 / ', number);


number.splice(1, 0, 12, 14, 16, 18, 20)
console.log('7 / ', number);