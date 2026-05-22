

const http = require('http');

const server = http.createServer((req,res)=> {
    // res.end('helo node.js')
    // res.write('hello')

    // console.log(req);
    console.log(req.url);
    console.log(req.method);
    console.log(req.headers);
    console.log(req.body);
    
    
    
    
    res.end('helo node.js')

    
});


server.listen(3001,()=> {
    console.log('server is running on port 3001');
    
});