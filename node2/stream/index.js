

const fs = require('fs');

// fs.readFile('video.mp4',(err,data)=> {
//     console.log(data);
    
// });

// const stream = fs.createReadStream('video.mp4');
// console.log(stream);

// stream.on('data', (chunk)=> {
//     console.log('Recived chunk:', chunk.length);
    
// })




// 1 Writaable Stream //
const writeStream = fs.createWriteStream('sample.txt');
writeStream.write('helo, this is a sample text\n')
writeStream.write('helo, this is another line of text\n')
writeStream.end('this is the ebd of the file')


// 2 Readable Stream //
const readStream = fs.createReadStream('sample.txt', 'utf-8')

readStream.on('data', (chunk)=> {
    console.log('Recived chunk:', chunk);
    
})


// 3 Duplex Stream //
