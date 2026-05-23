

const qs = require('querystring');
// 'https://dummyjson.com/products?limit=10&skip=10&select=title,price'

const query = 'limit=10&skip=10&select=title,price';
const parsedQuery = qs.parse(query);

// console.log(parsedQuery);
console.log(parsedQuery.limit);
console.log(parsedQuery.skip);


// boject //
const obj = {limit:10, skip:10, select:'title,price'}
console.log(obj);

const stringedQuery = qs.stringify(obj);
console.log(stringedQuery);



