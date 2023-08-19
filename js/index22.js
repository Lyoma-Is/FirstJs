
// 1

const cities = [        
    {name: 'Москва', population: 12506468},
    {name: 'Санкт-Петербург', population: 5351935},        
    {name: 'Новосибирск', population: 1612833},
    {name: 'Калиниград', population: 482443},
    {name: 'Калуга', population: 336726}
]; 

let grozny = { name: 'Грозный', population: 500 }
let gudermes = { name: 'Гудермес', population: 600}

cities.unshift(grozny)
cities.push(gudermes)

console.log("1 | ", cities)
console.log(' ');

// 2

cities.forEach(function(item){
    console.log(`2 | город: ${item.name}, население: ${item.population}`);
})
console.log(' ');

// 3

let newCity = cities.filter(function(item, index, array){
    if (item.population > 1000000){
        return 1
    }
})

console.log("3 | ", newCity)
console.log(' ');
// 4

let growCity = cities.map(function(item){
    return item.population * 1.5

})

console.log("4 | ", growCity)
console.log(' ');
// 5

let countPopulation = growCity.reduce(function(sum, item){
    sum += item
    return sum
}, 0)

console.log("5 | ", countPopulation);
console.log(' ');
// 6

let arr = [
    {
      "userId": 1,
      "id": 1,
      "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
    {
      "userId": 1,
      "id": 2,
      "title": "qui est esse",
      "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
    },
    {
      "userId": 1,
      "id": 3,
      "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
      "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
    },
    {
      "userId": 1,
      "id": 4,
      "title": "eum et est occaecati",
      "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
    },
    {
      "userId": 1,
      "id": 5,
      "title": "nesciunt quas odio",
      "body": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
    },
    {
      "userId": 1,
      "id": 6,
      "title": "dolorem eum magni eos aperiam quia",
      "body": "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae"
    },
    {
      "userId": 1,
      "id": 7,
      "title": "magnam facilis autem",
      "body": "dolore placeat quibusdam ea quo vitae\nmagni quis enim qui quis quo nemo aut saepe\nquidem repellat excepturi ut quia\nsunt ut sequi eos ea sed quas"
    },
    {
      "userId": 1,
      "id": 8,
      "title": "dolorem dolore est ipsam",
      "body": "dignissimos aperiam dolorem qui eum\nfacilis quibusdam animi sint suscipit qui sint possimus cum\nquaerat magni maiores excepturi\nipsam ut commodi dolor voluptatum modi aut vitae"
    },
    {
      "userId": 1,
      "id": 9,
      "title": "nesciunt iure omnis dolorem tempora et accusantium",
      "body": "consectetur animi nesciunt iure dolore\nenim quia ad\nveniam autem ut quam aut nobis\net est aut quod aut provident voluptas autem voluptas"
    },
    {
      "userId": 1,
      "id": 10,
      "title": "optio molestias id quia eum",
      "body": "quo et expedita modi cum officia vel magni\ndoloribus qui repudiandae\nvero nisi sit\nquos veniam quod sed accusamus veritatis error"
    }
]

console.log("6 | ", arr)
console.log(' ');
// 7

let arr7 = arr.filter(function(item){
    if (item.id > 5){
        console.log(`7 |  TITLE: ${item.title} \n     BODY: ${item.body}`)
        return 1
    }
})

console.log(' ');

// 8 

let arr8 = arr7.map(function(item){
    item.title = 'EXPOVISION'
    return item
})

arr8.forEach(function(item){
    console.log(`8 | id: ${item.id}, title: ${item.title}`)
})
