///1
let man = {
    name: 'Jon',
    surname: 'Snow',
    age: 30,
    height: 175,
    login: 'JonSnow',
    password: 'Winterfell',
    money: '12345rud',
    
    address: {
        city: "Grozny",
        street: "Novaya",
        house: 17,
    },
};

////2
let text = 'Winterfell';

if (text === man.password){
    console.log(`Welcome, ${man.name} ${man.surname} \n\nYour login: ${man.login}`);
}
else{
    console.log(`Password: ${text} is wrong. Try again.`);
}


// 3

for(let i = 1; i < 11; i++){
    console.log(i);
}

