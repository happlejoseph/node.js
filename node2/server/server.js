

const http = require('http');
const fs = require('fs');
const url = require('url');


<<<<<<< HEAD
const port = 3001;

const app = http.createServer((req,res)=> {
    const {pathname} = url.parse(url.req);

    if(pathname === '/') {
        res.writeHead(200, {"content-type":'text/html'})
        res.end(fs.readFileSync('../client/index/html'))
=======
const port = 3001

const app = http.createServer((req,res)=> {
    const {pathname} = url.parse(req.url);

    if(pathname === '/') {
        res.writeHead(200, {"content-type":'text/html'})
        res.end(fs.readFileSync('../client/index.html'))
>>>>>>> 715fdda502612675a72b4ea5687db8601a38f8db
    }
    else if(pathname === '/js/index.js') {
        res.writeHead(200, {"content-type":'text/html'})
        res.end(fs.readFileSync('../client/js/index.js'))
    }
<<<<<<< HEAD
})
=======
});

app.listen(port,()=> {
    console.log(`server is running on port ${port}`);
    

});
>>>>>>> 715fdda502612675a72b4ea5687db8601a38f8db
