const http = require('http');
const port = process.env.PORT||3000;
const server = http.createServer((req, res)=>{
     console.log(req.url)
     res.statusCode = 200;
     res.setHeader('Content-type', 'text/html')
     res.end('<h1>Hey I am Shivanshu</h1><p>Hey this is the way to rock</p>');
})
server.listen(port, ()=>{
    console.log(`Server is Listening on ${port}`)
})

//200 for ok
//500 for error
//404 not found