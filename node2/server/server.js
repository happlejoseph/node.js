

const http = require('http');
const fs = require('fs');
const url = require('url');
const queryString = require('querystring')

const {MongoClient} = require('mongodb')

        
const port = 3001

const client = new MongoClient('mongodb://127.0.0.1:27017/')

const app = http.createServer((req,res)=> {

    // creating database //
    const db = client.db('Institute')

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

    else if(pathname === '/pages/addStudent.html') {
        res.writeHead(200, {"content-type":'text/html'})
        res.end(fs.readFileSync('../client/pages/addStudent.html'))
    }

    // form submit //
    if(pathname === '/submit' && req.method === 'POST') {
        // console.log('form submited');

        let body = ""
        req.on('data',(chunks)=> {
            console.log('Inside data event')
            console.log(chunks);
            body += chunks.toString()
            console.log(body);
            
        })

        req.on('end',()=> {
            console.log('Inside end event')
            const formData = queryString.parse(body)
            console.log(formData);
            collection.insertOne(formData).then(()=> {
                console.log('data is added successfully');
                
            })
            .catch((err)=> {
                console.log(err);
            })
            
        })

        res.writeHead(201, {"content-type":'text/html'})
        res.end(fs.readFileSync('../client/index.html'))
    }

    // fetch students //
    if(pathname === '/getstudents' && req.method === 'GET') {
        console.log('students');
        const data = await collection.find().toArray()
        console.log(data);
        res.writeHead(200, {"content-type":'text/json'})
        res.end(JSON.stringify(data))
        
        
    }
})



app.listen(port,()=> {
    console.log(`server is running on port ${port}`);

});
