

// const buffer = Buffer.from('helo')
// console.log(buffer);

// console.log(buffer.toString());

// const bufferAllocate = Buffer.alloc(6)
// console.log(bufferAllocate);


// bufferAllocate.write('hieripkf')
// console.log(bufferAllocate);

// console.log(bufferAllocate.toString());

const fs = require('fs')

fs.readFile('sample.txt',(err,data)=> {
    if(err) {
        console.log('error:', err);
        
    }
    else {
        console.log(data);
        console.log(data.toString()); 
        
    }
    
})
