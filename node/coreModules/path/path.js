const path = require('path');

// basename //
// const filePath = 'user/files/index.html';
// const result = path.basename(filePath);
// console.log(result);


// extname //
// const filePath = 'user/files/index.html';
// const result = path.extname(filePath);
// console.log(result);



// dirname //
// const filePath = 'user/files/index.html';
// const result = path.dirname(filePath);
// console.log(result);



// path.isAbsolute() //
// const filePath = '/user/files/index.html';
// const result = path.isAbsolute(filePath);
// console.log(result);



// path.join //
// const filePath = '/user/file';
// const fileName = '/index.html';
// const result = path.join(filePath, fileName);
// console.log(result);



// path.normalize //
// const filePath = '/user/file///index.html';
// const result = path.normalize(filePath);
// console.log(result);


// path.resolve //
// const filePath = '/user/file/index.html';
// const result = path.resolve(filePath);
// console.log(result);

// path.resolve //
// const filePath = 'user/file/index.html';
// const result = path.resolve(filePath);
// console.log(result);



// path.parse //
const filePath = '/user/file/index.html';
const result = path.parse(filePath);
console.log(result);


