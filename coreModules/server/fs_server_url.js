

const fs = require('fs');
const http = require('http');
const url = require('url');


const server = http.createServer((req,res)=> {
    const newUrl = url.parse(req.url)
        if(newUrl.pathname === '/') {
            fs.readFile('home.html', (err,data)=> {
                if(err) {
                    res.writeHead(404, {'content-type':'text/html'})
                    res.end()
                }
                else {
                    res.writeHead(200, {'content-type':'text/html'})
                    res.end(data)
                }
            })
        }
        
        else if(newUrl.pathname === '/about') {
            fs.readFile('about.html', (err,data)=> {
                if(err) {
                    res.writeHead(404, {'content-type':'text/html'})
                    res.end()
                }
                else{
                    res.writeHead(200, {'content-type':'text/html'})
                    res.end(data)
                }
            })
        }

        else if(newUrl.pathname === '/contact') {
            fs.readFile('contact.html', (err,data)=> {
                if(err) {
                    res.writeHead(404, {'content-type':'text/html'})
                    res.end()
                }
                else {
                    res.writeHead(200, {'content-type':'text/html'})
                    res.end(data)
                }
            })
        }
        else {
            fs.readFile('error.html', (err,data)=> {
                if(err) {
                    res.writeHead(404, {'content-type':'text/html'})
                    res.end()
                }
                else {
                    res.writeHead(200, {'content-type':'text/html'})
                    res.end(data)
                }
            })
        }
    // res.end('helo')
})

server.listen(3001,()=> {
    console.log('server is running on port 3001');
    
})