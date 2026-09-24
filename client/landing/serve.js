const express = require('express');
 var cors = require('cors');
const {resolve} = require("node:path");
const app = express();
 app.use(cors());

 const corsMiddleware = (req, res, next) => {
     console.log('CORS middleware ' + req.method + " at " + req.url);

    res.setHeader(
        "Access-Control-Allow-Methods",
        "POST, GET, PUT, DELETE, OPTIONS"
    );
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );

     next();
 };

const port = 3000;
const sainceRoot = __dirname + '/../dist';
const ohifRoot = resolve(__dirname + '../OHIFViewers/platform/app/dist')
console.log(`serving from ${sainceRoot}`);
console.log(`also serving from ${ohifRoot}`);
app.use('/ohifv3',express.static(ohifRoot));
app.use('/',express.static(sainceRoot));
 app.all('*', corsMiddleware)
app.get('/ohifv3', (req, res) => {
    const muParam = req.query.mu;
    const filePath = ohifRoot + '/index.html';
    console.log(`sending back ohif v3 index file ${filePath} units: ${muParam}`);
    res.sendFile(filePath);
})
app.use('/ohifv3',express.static(ohifRoot));
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})
