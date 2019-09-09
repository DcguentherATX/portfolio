const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", express.static('public'));

app.get("/", (req, res) => {
    console.log('hello, I am a get request');
});

app.listen(port, () => console.log(`server is listening on port: ${port}`));