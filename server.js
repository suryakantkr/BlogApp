const express = require("express");
const app = express();

app.use(express.json());

require("dotenv").config();
const port = process.env.PORT || 1000;

const blog = require("./routes/blog");
app.use('/api/v1', blog);

const connectWithData = require("./config/database");
connectWithData();

app.listen(port, () => {
    console.log(`Server Running On The Port : ${port}`);
});

app.get('/', (req, res) => {
    res.send(`<h1>This is my home page<h1>`);
});