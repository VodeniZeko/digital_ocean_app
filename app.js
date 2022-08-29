const express = require('express');
const server = express();
const port = 3000;

server.get('/',(req,res) => {
res.send('hello from app.js');
});

server.listen(port, () => {console.log(`listening at port ${port}`)});

