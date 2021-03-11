const express = require('express');
const app = express();
const mongooseApp = require('./mongoose')
const port = 3000

app.get('/', (req, res) => {
    res.send("Hello backend");
});

app.post('/item', mongooseApp.createItem)


app.listen(port, () => {
    console.log(`Server started on port`);
});