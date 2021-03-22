const express = require('express');
const bodyParser = require('body-parser');
const mongooseApp = require('./mongoose');

const app = express();
app.use(bodyParser.json());

let port = process.env.PORT;
if (port == null || port == "") {
  port = 5000;
}

app.get('/', (req, res) => {
    res.send("Hello backend");
});

app.get('/test', (req, res) => {
    res.send([
        {
            id: 1,
            name: "item 1"
        },
        {
            id: 2,
            name: "item 2"
        },
        {
            id: 3,
            name: "item 3"
        },
        {
            id: 4,
            name: "item 4"
        }
    ])
});

app.post('/test', (req, res) => {
    res.send(req.body)
});

app.get('/items', mongooseApp.getItems);

app.post('/item', mongooseApp.createItem);



app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});