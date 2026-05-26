

const http = require('http');
const fs = require('fs');
const url = require('url');

const {MongoClient} = require('mongobd')

        
const port = 3001

const client = new MongoClient('mongodb://127.0.0.1:27017/')

const app = http.createServer((req,res)=> {

    // creating database //
    const bd = client.db('Institute')

    // creating collection //
    const collection = db.collection('student')

    const {pathname} = url.parse(req.url);
    if(pathname === '/') {
        res.writeHead(200, {"content-type":'text/html'})
        res.end(fs.readFileSync('../client/index.html'))
    }

    else if(pathname === '/js/index.js') {
        res.writeHead(200, {"content-type":'text/html'})
        res.end(fs.readFileSync('../client/js/index.js'))
    }

    else if(pathname === '/pages/addStudent.html')
        res.writeHead(200, {"content-type":'text/html'})
        res.end(fs.readFileSync('../client/pages/addStudent'))
})


app.listen(port,()=> {
    console.log(`server is running on port ${port}`);

});
