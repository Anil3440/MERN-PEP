const http = require('http');
const {log} = require('console');

// log(http);

// const server = http.createServer((req,res)=>{
//     log(req.url);
//     log('hello from server.');
//     res.end();
// });
const server = http.createServer((req,res)=>{
    res.write('Hello from server');
    res.end();
});
const port = 3000;

server.listen(port,()=>{
    log(`server is listening on port ${port}`);
});
