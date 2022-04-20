 const friends = ['Tom Hanks', 'Tom Cruise', 'Tom Hardy', 'Tom Solaiman'];
 const fLength = friends.map(friend => friend.length);
//  console.log(fLength);,
const products =[
    {name: 'water bottle', price: 50, color: 'yellow'},
    {name: 'Mobile Phone', price: 150000, color: 'black'},
    {name: 'Smart watch', price: 15000, color: 'black'},
    {name: 'Sticky notes', price: 30, color: 'lime'},
    {name: 'Water glass', price: 30, color: 'white'}
]
const productName = products.map(product => product.name);
const productPrices = products.map(product => product.price);
products.forEach(product => console.log(product));
// console.log(productName, productPrices);