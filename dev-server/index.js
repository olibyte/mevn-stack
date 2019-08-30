//nodemon is a tool that helps develop node.js based applications by automatically restarting the node 
//application when file changes in the directory are detected.
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))