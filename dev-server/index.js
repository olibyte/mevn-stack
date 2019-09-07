//nodemon is a tool that helps develop node.js based applications by automatically restarting the node 
//application when file changes in the directory are detected.
//const express = require('express')
import express from 'express';
const app = express();
const port = 3000
import { registerRoutes } from './routes';
import { setEnvironment } from './config/env';

setEnvironment(app);
registerRoutes(app);

app.get('/', (req, res) => {
    if (process.env.NODE_ENV !== 'production') {
        return res.send(
            'Running server in development mode.'
        );
    } else {
        return res.sendFile('index.html', { root:  __dirname + '/../dist/' });
    }
})

app.listen(port, () => {
    console.log(`Oliver's MEVN app listening on port ${port} in ${process.env.NODE_ENV} mode!`);
});