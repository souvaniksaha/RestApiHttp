const http = require('http');
const heroList = [
    {
        id: 1,
        name: 'Thor'
    },
    {
        id: 2,
        name: 'Hulk',
    },
    {
        id: 3,
        name: 'Captain America'
    },
    {
        id: 4,
        name: 'Iron Man'
    }
];
const server = http.createServer((req, res) => {
    res.setHeader('content-type', 'application/json');
    //get authorization key through header
    /*   console.log(req.headers.authorization); */
    //get from data 
    let body = [];
    req.on('data', (chunk) => {
        body.push(chunk);
    }).on('end', () => {
        body = Buffer.concat(body).toString();
        console.log(body);
    });
    
    res.end(JSON.stringify({
        success: true,
        data: heroList
    }));
});

const PORT = 5000;

server.listen(PORT, () => console.log(`SERVER IS RUNNING ON ${PORT}`));