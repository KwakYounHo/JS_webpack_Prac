const express = require('express');
const app = express();
const path = require('path');

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './bundle/index.html'));
})

app.use(express.static(path.join(__dirname, 'bundle')));
app.listen(8080, ()=>{
  console.log('my app listening on 8008');
})