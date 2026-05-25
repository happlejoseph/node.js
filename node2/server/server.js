

const http = require('http');
const fs = require('fs');
const url = require('url');


const port = 3001;

const app = http.createServer((req,res)=> {
    const {pathname} = url.parse(url.req);

    if(pathname === '/') {
        res.writeHead(200, {"content-type":'text/html'})
        res.end(fs.readFileSync('../client/index/html'))
    }
    else if(pathname === '/js/index.js') {
        res.writeHead(200, {"content-type":'text/html'})
        res.end(fs.readFileSync('../client/js/index.js'))
    }
})