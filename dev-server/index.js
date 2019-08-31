//nodemon is a tool that helps develop node.js based applications by automatically restarting the node 
//application when file changes in the directory are detected.
//const express = require('express')
import express from 'express';
const app = express();
const port = 3000
import { registerRoutes } from './routes';

registerRoutes(app);

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Oliver's MEVN app listening on port ${port}!`))