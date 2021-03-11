const express = require('express');
const bodyParser = require('body-parser');
const mongooseApp = require('./mongoose');

const app = express();
app.use(bodyParser.json());

const port = 3000

app.get('/', (req, res) => {
    res.send("Hello backend");
});

app.get('/items', mongooseApp.getItems);

app.post('/item', mongooseApp.createItem);



app.listen(port, () => {
    console.log(`Server started on port`);
});