const numbers = [5, 13, 7, 41, 29, 79, 30, 5, 2, 19];
const bigNumbers = numbers.filter(number => number > 20);
const smallNumbers = numbers.filter(number => number < 10);
console.log(bigNumbers, smallNumbers);
const products =[
    {name: 'water bottle', price: 50, color: 'yellow'},
    {name: 'Mobile Phone', price: 150000, color: 'black'},
    {name: 'Smart watch', price: 15000, color: 'black'},
    {name: 'Sticky notes', price: 30, color: 'lime'},
    {name: 'Water glass', price: 30, color: 'white'}
];
const expensive = products.filter(product => product.price > 10000);
console.log(expensive);
const blacks = products.filter(product => product.color == 'black');
console.log(blacks);
const whiteItems = products.find(product => product.color == 'yellow' );
console.log(whiteItems);
