import {faker} from '@faker-js/faker';
let database = {products: []}

for ( let i = 0; i <= 300 ; i++ ) {
  database.products.push({
    id: i,
    name: faker.commerce.productName(),
    description: faker.lorem.sentences(),
    price: faker.commerce.price(),
    imageUrl: "https://source.unsplash.com/1600x900/?product",
    quantity: faker.random.number()
  });
}

console.log(JSON.stringify(database));
