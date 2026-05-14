

const fs = require('fs');


// fs.readFile('sample.txt','utf8', (err,data)=> {
//     if(err) {
//         console.log('error: ', err);
        
//     }
//     else {
//         console.log(data);
        
//     }
// })


try {
    const data = fs.readFileSync('sample.txt','utf8');
    console.log(data);
    
}
catch(err) {
    console.log('error: ', err);
    
}