'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const conf = require('../conf/default.json');
const app = express();

class HttpServer {
    constructor() {
        this.initServer();
    }

    initServer = () => {
        let port = process.env.HTTP_PORT || conf.http_port;

        app.use(bodyParser.json);

        app.get('/', (req, res) => {
            res.send('jChain');
        })
        app.listen(port, () => {
            console.log(`HTTP port ${port} active`);
        })
    }
}

export { HttpServer as default };
