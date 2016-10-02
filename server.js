const express = require('express');

const app = express();
const port = 5555;

app.use(express.static(__dirname + '/build'));

app.get('/', (request, response) => {
  response.sendFile(__dirname + '/build/index.html');
});

console.log(`The is running on port ${port}:`);
app.listen(port);