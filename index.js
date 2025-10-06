var http = require("http");
port = 8000

http.createServer(function(req, res) {
    res.writeHead(200, {"Content-Type": "text/html"});
    res.end(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>All About me!</title>
        </head>
        <body>
           <h1><b>All About Me!/b></h1>
           <h2>My name is Ruqiya currently studying Creative Computing at Goldsmiths University of London and I have just started my second year. Excited to delve even deeper and gain some knowledge.</h2>
           <p>I orginally didnt have any experince with computers so when I did start First Year it was a bit overwhelming but I have learnt so much and made stuff that I never beleieved I could make</p>
           <h6>Lets hope I can make really cool stuff.</h6>
        </body>
        </html>
    `);
}).listen(port, function() {
    console.log(`Node server is running on port ${port}...`);
});