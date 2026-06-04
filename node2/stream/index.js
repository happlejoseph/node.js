

const fs = require('fs');

// fs.readFile('video.mp4',(err,data)=> {
//     console.log(data);
    
// });

const stream = fs.createReadStream('video.mp4');
console.log(stream);

stream.on('data', (chunk)=> {
    console.log('Recived chunk:', chunk.length);
    
})