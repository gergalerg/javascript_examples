const https = require('https');
//const url = 'https://www.random.org/integers/?num=1&min=1&max=100&col=1&base=10&format=plain&rnd=new';
const url = 'swapi.co';

let options = {
    host: url,
    port: 443,
    path: '/api/planets/?format=json',
    method: 'GET'
}

var req= https.request(options, (res) => {
    console.log("Status: " + res.statusCode);
        console.log("Headers: " + JSON.stringify(res.headers));
        res.setEncoding('utf8');
        res.on('data', (chunk) => {
            console.log(chunk);
        });
});

req.on('error', (e)=> {
    console.log("Error: " + e.message);
});

req.end();
