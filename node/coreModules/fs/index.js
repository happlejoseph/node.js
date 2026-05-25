

const fs = require('fs'); // to import fs module //


// // fs.readFile('sample.txt','utf8', (err,data)=> {
// //     if(err) {
// //         console.log('error: ', err);
        
// //     }
// //     else {
// //         console.log(data);
        
// //     }
// // })





// fs.mkdir('myFolder', (err)=> {
//     if (err) {
//         console.log('error: ',err);
        
//     }
//     else {
//         console.log('folder created successfully');
        
//     }
// });



// fs.writeFile('myFolder/new.txt', 'helo node js', (err)=> { // fs.writeFile ('foldername/filename','content', (callback)=>{})
//     if (err) {
//         console.log('error: ',err);
        
//     }
//     else {
//         console.log('file created successfully');
        
//     }
// });


// fs.readFile('myFolder/new.txt','utf8', (err,data)=> {
//     if (err) {
//         console.log('error: ',err);
        
//     }
//     else {
//         console.log(data);
        
//     }
// });


// fs.appendFile('myFolder/new.txt','\nWelcome to node js', (err)=> {
//     if (err) {
//         console.log('error: ',err);
        
//     }
//     else {
//         console.log('data append successfully');
        
//     }
// });


// fs.unlink('myFolder/new.txt', (err)=> {
//     if (err) {
//         console.log('error: ',err);
        
//     }
//     else {
//         console.log('file deleted successfully');
        
//     }
// });

// fs.rmdir('myFolder', (err)=> {
//     if (err) {
//         console.log('error: ',err);
        
//     }
//     else {
//         console.log('delete folder successfully');
        
//     }
// });


// try catch //

// try {
//     fs.mkdirSync('myFolder');
//     console.log('folder created');
    
// }
// catch (err) {
//     console.log('error: ',err);
    
// }


// try {
//     fs.writeFileSync('myFolder/new.txt', 'helo node.js');
//         console.log('folder created');
        
// }
// catch (err) {
//     console.log('error: ', err);
    
// }

// try {
//     const data = fs.readFileSync('sample.txt','utf8');
//     console.log(data);
    
// }
// catch(err) {
//     console.log('error: ', err);
    
// }


// try {
//     fs.appendFileSync('myFolder/new.txt','\nWelcome to Node.js')
//         console.log('attached new data');
        
// }
// catch (err) {
//     console.log('error: ', err);
    
// }


try {
    fs.unlinkSync('myFolder/new.txt')
        console.log('file deleted');
        
}
catch (err) {
    console.log('error: ',err);
    
}