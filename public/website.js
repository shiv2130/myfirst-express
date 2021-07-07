const  fs  = require('fs');
const http = require('http');
const port = process.env.PORT||3000;
const server = http.createServer((req, res)=>{
     res.setHeader('Content-type', 'text/html')
     console.log(req.url)
     if(req.url=='/'){
        res.statusCode = 200;
        const data = fs.readFileSync('index.html');
        res.end(data.toString())
    }
     else if(req.url == '/about'){
        res.statusCode = 200;
        res.end('<h1>Hey this is the about of shivanshu</h1><p>Welcome</p>');
    }
    else if(req.url == '/info'){
        res.statusCode = 200; 
        res.end('<h1>Hey I am Shivanshu</h1><p>Hey this is the way to rock</p>');
    }
     else{
        res.statusCode = 404;
        res.end('<h1>This page was not found</h1>');
     }
})

server.listen(port, ()=>{
    console.log(`Server is Listening on ${port}`)
})

//200 for ok
//500 for error
//404 not found