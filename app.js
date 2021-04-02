const express = require("express");
const bodyParser = require("body-parser");
const itemRoute = require("./routes/productsRoutes");
const ordersRoute = require('./routes/ordersRoutes')

const app = express();
app.use(bodyParser.json());

const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
    res.send("Hello backend");
});

app.get("/test", (req, res) => {
    res.send([
        {
            id: 1,
            name: "item 1",
        },
        {
            id: 2,
            name: "item 2",
        },
        {
            id: 3,
            name: "item 3",
        },
        {
            id: 4,
            name: "item 4",
        },
    ]);
});

app.post("/test", (req, res) => {
    res.send(req.body);
});

app.use("/api/items", itemRoute);
app.use('/api/order', ordersRoute)

app.use((req, res, next) => {
    throw new HttpError("This route is not supported.", 404);
});

app.listen(port);
