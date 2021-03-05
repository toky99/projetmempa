const http = require('http');

http.createServer((req,res)=>{

    console.log(req.url);

    res.writeHead(200,{"Content-type":"text/html;charset='utf-8"});
    res.write("<head><meta charest='UTF-8'></head>");

    res.write('This is our magic project mempa!!!!!');

    res.end();
}).listen(4000);
